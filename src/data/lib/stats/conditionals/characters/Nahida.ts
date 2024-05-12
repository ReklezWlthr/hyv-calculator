import { findContentById } from '@src/core/utils/finder'
import _ from 'lodash'
import { baseStatsObject, getPlungeScaling, StatsObject } from '../../baseConstant'
import { Element, Stats, TalentProperty } from '@src/domain/genshin/constant'
import { StatObjectT } from '@src/core/hooks/useStat'
import { IContent, ITalent } from '@src/domain/genshin/conditional'
import { toPercentage } from '@src/core/utils/converter'

const Nahida = (c: number, a: number, stat: StatObjectT) => {
  const a4_bonus = _.min([0.001 * _.max([stat.em - 200, 0]), 0.8])
  const a4_cr = _.min([0.0003 * _.max([stat.em - 200, 0]), 0.24])

  const talents: ITalent = {
    normal: {
      title: 'Akara',
      content: `<b>Normal Attack</b>
      <br />Performs up to 4 attacks that deal <b class="text-genshin-dendro">Dendro DMG</b> to opponents in front of her.
      <br />
      <br /><b>Charged Attack</b>
      <br />Consumes a certain amount of Stamina to deal <b class="text-genshin-dendro">AoE Dendro DMG</b> to opponents in front of her after a short casting time.
      <br />
      <br /><b>Plunging Attack</b>
      <br />Calling upon the might of Dendro, Nahida plunges towards the ground from mid-air, damaging all opponents in her path. Deals <b class="text-genshin-dendro">AoE Dendro DMG</b> upon impact with the ground.
      `,
    },
    skill: {
      title: 'All Schemes to Know',
      content: `Sends forth karmic bonds of wood and tree from her side, dealing <b class="text-genshin-dendro">AoE Dendro DMG</b> and marking up to 8 opponents hit with the Seed of Skandha.
      <br />When held, this skill will trigger differently.
      <br />
      <br /><b>Hold</b>
      <br />Enters Aiming Mode, which will allow you to select a limited number of opponents within a limited area. During this time, Nahida's resistance to interruption will be increased.
      <br />When released, this skill deals <b class="text-genshin-dendro">Dendro DMG</b> to these opponents and marks them with the Seed of Skandha.
      <br />Aiming Mode will last up to 5s and can select a maximum of 8 opponents.
      <br />
      <br /><b>Seed of Skandha</b>
      <br />Opponents who have been marked by the Seed of Skandha will be linked to one another up till a certain distance.
      <br />After you trigger Elemental Reactions on opponents who are affected by the Seeds of Skandha or when they take DMG from Dendro Cores (including Burgeon and Hyperbloom DMG), Nahida will unleash Tri-Karma Purification on the opponents and all connected opponents, dealing <b class="text-genshin-dendro">Dendro DMG</b> based on her ATK and Elemental Mastery.
      <br />You can trigger at most 1 Tri-Karma Purification within a short period of time.
      `,
      upgrade: ['a4', 'c2', 'c3', 'c4', 'c6'],
    },
    burst: {
      title: 'Illusory Heart',
      content: `Manifests the Court of Dreams and expands the Shrine of Maya.
      <br />
      <br />When the Shrine of Maya field is unleashed, the following effects will be separately unleashed based on the Elemental Types present within the party.
      <br />- <b class="text-genshin-pyro">Pyro</b>: While Nahida remains within the Shrine of Maya, the DMG dealt by Tri-Karma Purification from "All Schemes to Know" is increased.
      <br />- <b class="text-genshin-electro">Electro</b>: While Nahida remains within the Shrine of Maya, the interval between each Tri-Karma Purification from "All Schemes to Know" is decreased.
      <br />- <b class="text-genshin-hydro">Hydro</b>: The Shrine of Maya's duration is increased.
      <br />
      <br />If there are at least 2 party members of the aforementioned Elemental Types present when the field is deployed, the aforementioned effects will be increased further.
      <br />
      <br />Even if Nahida is not on the field, these bonuses will still take effect so long as party members are within the Shrine of Maya.
      `,
      upgrade: ['a1', 'c1', 'c5'],
    },
    a1: {
      title: 'A1: Compassion Illuminated',
      content: `When unleashing Illusory Heart, the Shrine of Maya will gain the following effects:
    <br />The Elemental Mastery of the active character within the field will be increased by <span class="text-yellow">25%</span> of the Elemental Mastery of the party member with the highest Elemental Mastery.
    <br />You can gain a maximum of <span class="text-yellow">250</span> Elemental Mastery in this manner.`,
    },
    a4: {
      title: 'A4: Awakening Elucidated',
      content: `Each point of Nahida's Elemental Mastery beyond 200 will grant <span class="text-yellow">0.1%</span> Bonus DMG and <span class="text-yellow">0.03%</span> CRIT Rate to Tri-Karma Purification from All Schemes to Know.
      <br />A maximum of <span class="text-yellow">80%</span> Bonus DMG and <span class="text-yellow">24%</span> CRIT Rate can be granted to Tri-Karma Purification in this manner.
      <br /><br />Current Bonus DMG: <span class="text-yellow">${toPercentage(a4_bonus)}</span>
      <br />Current CRIT Rate:<span class="text-yellow"> ${toPercentage(a4_cr)}</span>`,
    },
    c1: {
      title: 'C1: The Seed of Stored Knowledge',
      content: `When the Shrine of Maya is unleashed and the Elemental Types of the party members are being tabulated, the count will add 1 to the number of <b class="text-genshin-pyro">Pyro</b>, <b class="text-genshin-electro">Electro</b>, and <b class="text-genshin-hydro">Hydro</b> characters respectively.`,
    },
    c2: {
      title: 'C2: The Root of All Fullness',
      content: `Opponents that are marked by Seeds of Skandha applied by Nahida herself will be affected by the following effects:
      <br />- Burning, Bloom, Hyperbloom, and Burgeon Reaction DMG can score CRIT Hits. CRIT Rate and CRIT DMG are fixed at 20% and 100% respectively.
      <br />- Within 8s of being affected by Quicken, Aggravate, Spread, DEF is decreased by 30%.`,
    },
    c3: {
      title: 'C3: The Shoot of Conscious Attainment',
      content: `Increases the Level of All Schemes to Know by 3.
      <br />Maximum upgrade level is 15.`,
    },
    c4: {
      title: 'C4: The Stem of Manifest Inference',
      content: `When 1/2/3/(4 or more) nearby opponents are affected by All Schemes to Know's Seeds of Skandha, Nahida's Elemental Mastery will be increased by 100/120/140/160.`,
    },
    c5: {
      title: 'C5: The Leaves of Enlightening Speech',
      content: `Increases the Level of Illusory Heart by 3.
      <br />Maximum upgrade level is 15.`,
    },
    c6: {
      title: "C6: The Fruit of Reason's Culmination",
      content: `When Nahida hits an opponent affected by All Schemes to Know's Seeds of Skandha with Normal or Charged Attacks after unleashing Illusory Heart, she will use Tri-Karma Purification: Karmic Oblivion on this opponent and all connected opponents, dealing <b class="text-genshin-dendro">Dendro DMG</b> based on 200% of Nahida's ATK and 400% of her Elemental Mastery.
      <br />DMG dealt by Tri-Karma Purification: Karmic Oblivion is considered Elemental Skill DMG and can be triggered once every 0.2s.
      <br />This effect can last up to 10s and will be removed after Nahida has unleashed 6 instances of Tri-Karma Purification: Karmic Oblivion.`,
    },
  }

  const content: IContent[] = [
    {
      type: 'toggle',
      id: 'nahida_em_share',
      text: `Compassion Illuminated`,
      ...talents.a4,
      show: a >= 1,
      value: [{ name: 'Elemental Mastery', value: 0.25, formatter: _.floor }],
      default: true,
    },
  ]

  const teammateContent: IContent[] = [findContentById(content, 'nahida_a4')]

  return {
    talents,
    content,
    teammateContent,
    preCompute: (form: Record<string, any>) => {
      const base = _.cloneDeep(baseStatsObject)

      base.BASIC_SCALING = [
        { name: '1-Hit', value: 0.403 * stat.atk, element: Element.DENDRO, property: TalentProperty.NA },
        { name: '2-Hit', value: 0.3697 * stat.atk, element: Element.DENDRO, property: TalentProperty.NA },
        { name: '3-Hit', value: 0.4587 * stat.atk, element: Element.DENDRO, property: TalentProperty.NA },
        { name: '4-Hit', value: 0.5841 * stat.atk, element: Element.DENDRO, property: TalentProperty.NA },
      ]
      base.CHARGE_SCALING = [
        { name: 'Charged Attack', value: 1.32 * stat.atk, element: Element.DENDRO, property: TalentProperty.CA },
      ]
      base.PLUNGE_SCALING = getPlungeScaling('catalyst', stat.atk, Element.DENDRO)
      base.SKILL_SCALING = [
        { name: 'Press DMG', value: 0.984 * stat.atk, element: Element.DENDRO, property: TalentProperty.SKILL },
        { name: 'Hold DMG', value: 1.304 * stat.atk, element: Element.DENDRO, property: TalentProperty.SKILL },
        {
          name: 'Tri-Karma Purification',
          value: 1.032 * stat.atk + 2.064 * stat.em,
          element: Element.DENDRO,
          property: TalentProperty.SKILL,
          bonus: a >= 4 ? 0.001 * a4_bonus : 0,
          cr: a >= 4 ? 0.0003 * a4_cr : 0,
        },
      ]

      return base
    },
    preComputeShared: (base: StatsObject, form: Record<string, any>) => {
      return base
    },
  }
}

export default Nahida
