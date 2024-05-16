import { findContentById } from '@src/core/utils/finder'
import _ from 'lodash'
import { baseStatsObject, getPlungeScaling, StatsObject } from '../../baseConstant'
import { Element, ITalentLevel, Stats, TalentProperty, WeaponType } from '@src/domain/genshin/constant'

import { toPercentage } from '@src/core/utils/converter'
import { IContent, ITalent } from '@src/domain/genshin/conditional'
import { calcScaling } from '@src/core/utils/data_format'

const Candace = (c: number, a: number, t: ITalentLevel) => {
  const upgrade = {
    normal: false,
    skill: c >= 5,
    burst: c >= 3,
  }
  const normal = t.normal + (upgrade.normal ? 3 : 0)
  const skill = t.skill + (upgrade.skill ? 3 : 0)
  const burst = t.burst + (upgrade.burst ? 3 : 0)

  let a4Dmg = 0

  const talents: ITalent = {
    normal: {
      title: `Gleaming Spear - Guardian Stance`,
      content: `<b>Normal Attack</b>
      <br />Performs up to 4 consecutive spear strikes.
      <br />
      <br /><b>Charged Attack</b>
      <br />Consumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.
      <br />
      <br /><b>Plunging Attack</b>
      <br />Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.
      `,
    },
    skill: {
      title: `Sacred Rite: Heron's Sanctum`,
      content: `Candace's fighting style is capable of warding off an entire tide of foes.
      <br />
      <br /><b>Tap</b>
      <br />Rushes forward with her shield, dealing <b class="text-genshin-hydro">Hydro DMG</b> to opponents in front of her.
      <br />
      <br /><b>Hold</b>
      <br />Raises her shield to block incoming attacks from nearby opponents, forming a barrier that absorbs DMG based on her Max HP and absorbs <b class="text-genshin-hydro">Hydro DMG</b> <span class="text-yellow">250%</span> more effectively. This barrier lasts until the Elemental Skill is unleashed.
      <br />After holding for a certain period of time, Candace will finish charging, and when the skill button is released, the skill duration expires, or when the barrier is broken, she will perform a leaping strike that deals <b class="text-genshin-hydro">Hydro DMG</b> to opponents in front of her.
      `,
    },
    burst: {
      title: `Sacred Rite: Wagtail's Tide`,
      content: `Raising her weapon on high, Candace calls upon a divine blessing that deals <b class="text-genshin-hydro">AoE Hydro DMG</b> based on her Max HP and continuously confers the Prayer of the Crimson Crown on your active character.
      <br />
      <br /><b>Prayer of the Crimson Crown</b>
      <br />This effect has the following properties:
      <br />- Characters deal increased Elemental DMG with their Normal Attacks.
      <br />- Whenever a character takes the field, they will unleash a rippling wave of water that deals <b class="text-genshin-hydro">Hydro DMG</b> to nearby opponents. There is a limited number of waves that can be triggered in the duration of this skill.
      <br />- Sword, Claymore, and Polearm-wielding characters under this effect will obtain a <b class="text-genshin-hydro">Hydro Infusion</b>.`,
    },
    a1: {
      title: `A1: Aegis of Crossed Arrows`,
      content: `If Candace is hit by an attack in the Hold duration of Sacred Rite: Heron's Sanctum, that skill will finish charging instantly.`,
    },
    a4: {
      title: `A4: Celestial Dome of Sand`,
      content: `Characters affected by the Prayer of the Crimson Crown caused by Sacred Rite: Wagtail's Tide will deal <span class="text-yellow">0.5%</span> increased DMG to opponents for every <span class="text-yellow">1,000</span> points of Candace's Max HP when they deal Elemental DMG with their Normal Attacks.
      <br /><br />Current DMG Bonus: <span class="text-yellow">${toPercentage(a4Dmg)}</span>`,
    },
    c1: {
      title: `C1: Returning Heiress of the Scarlet Sands`,
      content: `The duration of Prayer of the Crimson Crown effect triggered by Sacred Rite: Wagtail's Tide is increased by <span class="text-yellow">3</span>s.`,
    },
    c2: {
      title: `C2: Moon-Piercing Brilliance`,
      content: `When Sacred Rite: Heron's Sanctum hits opponents, Candace's Max HP will be increased by <span class="text-yellow">20%</span> for <span class="text-yellow">15</span>s.`,
    },
    c3: {
      title: `C3: Hunter's Supplication`,
      content: `Increases the Level of Sacred Rite: Wagtail's Tide by <span class="text-yellow">3</span>.
      <br />Maximum upgrade level is <span class="text-yellow">15</span>.`,
    },
    c4: {
      title: `C4: Sentinel Oath`,
      content: `Shortens the Hold CD of Sacred Rite: Heron's Sanctum to be the same as that of the Tapping CD.`,
    },
    c5: {
      title: `C5: Heterochromatic Gaze`,
      content: `Increases the Level of Sacred Rite: Heron's Sanctum by <span class="text-yellow">3</span>.
      <br />Maximum upgrade level is <span class="text-yellow">15</span>.`,
    },
    c6: {
      title: `C6: The Overflow`,
      content: `When characters (excluding Candace herself) affected by the Prayer of the Crimson Crown caused by Sacred Rite: Wagtail's Tide deal Elemental DMG to opponents using Normal Attacks, an attack wave will be unleashed that deals <b class="text-genshin-hydro">AoE Hydro DMG</b> equal to <span class="text-yellow">15%</span> of Candace's Max HP.
      <br />This effect can trigger once every <span class="text-yellow">2.3</span>s and is considered Elemental Burst DMG.`,
    },
  }

  const content: IContent[] = [
    {
      type: 'toggle',
      id: 'candace_burst',
      text: `Prayer of the Crimson Drown`,
      ...talents.burst,
      show: true,
      default: true,
    },
    {
      type: 'toggle',
      id: 'candace_c2',
      text: `C2 Skill Hit`,
      ...talents.c2,
      show: c >= 2,
      default: true,
    },
  ]

  const teammateContent: IContent[] = [findContentById(content, 'candace_burst')]

  return {
    upgrade,
    talents,
    content,
    teammateContent,
    preCompute: (x: StatsObject, form: Record<string, any>) => {
      const base = _.cloneDeep(x)

      base.BASIC_SCALING = [
        {
          name: '1-Hit',
          value: [{ scaling: calcScaling(0.608, normal, 'physical', '1'), multiplier: Stats.ATK }],
          element: Element.PHYSICAL,
          property: TalentProperty.NA,
        },
        {
          name: '2-Hit',
          value: [{ scaling: calcScaling(0.6115, normal, 'physical', '1'), multiplier: Stats.ATK }],
          element: Element.PHYSICAL,
          property: TalentProperty.NA,
        },
        {
          name: '3-Hit [1]',
          value: [{ scaling: calcScaling(0.3549, normal, 'physical', '1'), multiplier: Stats.ATK }],
          element: Element.PHYSICAL,
          property: TalentProperty.NA,
        },
        {
          name: '3-Hit [2]',
          value: [{ scaling: calcScaling(0.4337, normal, 'physical', '1'), multiplier: Stats.ATK }],
          element: Element.PHYSICAL,
          property: TalentProperty.NA,
        },
        {
          name: '4-Hit',
          value: [{ scaling: calcScaling(0.9494, normal, 'physical', '1'), multiplier: Stats.ATK }],
          element: Element.PHYSICAL,
          property: TalentProperty.NA,
        },
      ]
      base.CHARGE_SCALING = [
        {
          name: 'Charged Attack DMG',
          value: [{ scaling: calcScaling(1.2418, normal, 'physical', '1'), multiplier: Stats.ATK }],
          element: Element.PHYSICAL,
          property: TalentProperty.CA,
        },
      ]
      base.PLUNGE_SCALING = getPlungeScaling('base', normal)
      base.SKILL_SCALING = [
        {
          name: 'Shield',
          value: [{ scaling: calcScaling(0.12, skill, 'elemental', '1'), multiplier: Stats.HP }],
          flat: calcScaling(1155, skill, 'special', 'flat'),
          element: TalentProperty.SHIELD,
          property: TalentProperty.SHIELD,
        },
        {
          name: 'Base DMG',
          value: [{ scaling: calcScaling(0.12, skill, 'elemental', '1'), multiplier: Stats.HP }],
          element: Element.HYDRO,
          property: TalentProperty.SKILL,
        },
        {
          name: 'Charged DMG',
          value: [{ scaling: calcScaling(0.1904, skill, 'elemental', '1'), multiplier: Stats.HP }],
          element: Element.HYDRO,
          property: TalentProperty.SKILL,
        },
      ]
      base.BURST_SCALING = [
        {
          name: 'Skill DMG',
          value: [{ scaling: calcScaling(0.0661, burst, 'elemental', '1'), multiplier: Stats.HP }],
          element: Element.HYDRO,
          property: TalentProperty.BURST,
        },
        {
          name: 'Wave Impact DMG',
          value: [{ scaling: calcScaling(0.0661, burst, 'elemental', '1'), multiplier: Stats.HP }],
          element: Element.HYDRO,
          property: TalentProperty.BURST,
        },
      ]

      if (form.candace_burst) {
        base.BASIC_DMG += 0.2
        base.infuse(Element.HYDRO)
      }
      if (form.candace_c2) base[Stats.P_HP] += 0.2

      return base
    },
    preComputeShared: (own: StatsObject, base: StatsObject, form: Record<string, any>) => {
      const canInfuse = form.weapon !== WeaponType.BOW
      if (form.candace_burst) {
        if (canInfuse) {
          base.BASIC_DMG += 0.2
          base.infuse(Element.HYDRO)
        }
      }
      a4Dmg = (own.getHP() / 1000) * 0.005
      console.log(own.BASE_HP)
      if (a >= 4 && base.INFUSION) base.BASIC_DMG += a4Dmg
      if (form.candace_burst && c >= 6)
        base.BASIC_SCALING.push({
          name: 'C6 Wave DMG',
          value: [
            { scaling: calcScaling(0.0661, burst, 'elemental', '1'), multiplier: Stats.HP, override: base.getHP() },
          ],
          element: Element.HYDRO,
          property: TalentProperty.BURST,
        })

      return base
    },
    postCompute: (base: StatsObject, form: Record<string, any>) => {
      a4Dmg = (base.getHP() / 1000) * 0.005

      if (a >= 4) base.BASIC_DMG += a4Dmg

      return base
    },
  }
}

export default Candace
