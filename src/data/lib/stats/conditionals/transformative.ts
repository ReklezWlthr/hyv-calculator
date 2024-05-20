import { IContent } from '@src/domain/genshin/conditional'
import { StatsObject } from '../baseConstant'
import { Element, Stats } from '@src/domain/genshin/constant'
import { BaseReactionDmg } from '@src/domain/genshin/scaling'
import _ from 'lodash'
import { calcTransformative } from '@src/core/utils/data_format'

const Transformative = (level: number, element: Element, stat: StatsObject, swirl: Element, nilou?: boolean) => {
  const emBonus = calcTransformative(stat?.[Stats.EM] || 0)
  const base = BaseReactionDmg[level - 1]

  return [
    {
      name: 'Swirl',
      element: swirl,
      show: element === Element.ANEMO,
      base,
      mult: 0.6,
      emBonus,
      dmg: stat?.SWIRL_DMG,
      amp: swirl === Element.PYRO ? stat?.PYRO_MULT || 1 : 1,
      cd: 0,
      add: swirl === Element.ELECTRO ? stat?.ELECTRO_F_DMG : 0,
    },
    {
      name: 'Electro-Charged',
      element: Element.ELECTRO,
      show: _.includes([Element.HYDRO, Element.ELECTRO, Element.ANEMO], element),
      base,
      mult: 1.2,
      emBonus,
      dmg: stat?.TASER_DMG,
      cd: 0,
      amp: 1,
      add: 0,
    },
    {
      name: 'Superconduct',
      element: Element.CRYO,
      show: _.includes([Element.CRYO, Element.ELECTRO, Element.ANEMO], element),
      base,
      mult: 0.5,
      emBonus,
      dmg: stat?.SUPERCONDUCT_DMG,
      cd: 0,
      amp: 1,
      add: 0,
    },
    {
      name: nilou ? 'Bloom: Bountiful Core' : 'Bloom',
      element: Element.DENDRO,
      show: _.includes([Element.HYDRO, Element.DENDRO, Element.ANEMO], element),
      base,
      mult: 2,
      emBonus,
      dmg: stat?.BLOOM_DMG,
      cd: stat?.CORE_CD,
      amp: 1,
      add: 0,
    },
    {
      name: 'Hyperbloom',
      element: Element.DENDRO,
      show: _.includes([Element.ELECTRO, Element.ANEMO], element),
      base,
      mult: 3,
      emBonus,
      dmg: stat?.HYPERBLOOM_DMG,
      cd: stat?.CORE_CD,
      amp: 1,
      add: 0,
    },
    {
      name: 'Burgeon',
      element: Element.DENDRO,
      show: _.includes([Element.PYRO, Element.ANEMO], element),
      base,
      mult: 3,
      emBonus,
      dmg: stat?.BURGEON_DMG,
      cd: stat?.CORE_CD,
      amp: 1,
      add: 0,
    },
    {
      name: 'Burning',
      element: Element.PYRO,
      show: _.includes([Element.DENDRO, Element.PYRO, Element.ANEMO], element),
      base,
      mult: 0.25,
      emBonus,
      dmg: stat?.BURNING_DMG,
      cd: stat?.CORE_CD || 0,
      amp: stat?.PYRO_MULT || 1,
      add: 0,
    },
    {
      name: 'Overloaded',
      element: Element.PYRO,
      show: _.includes([Element.PYRO, Element.ELECTRO, Element.ANEMO], element),
      base,
      mult: 2,
      emBonus,
      dmg: stat?.OVERLOAD_DMG,
      cd: 0,
      amp: 1,
      add: 0,
    },
    {
      name: 'Shattered',
      element: Element.PHYSICAL,
      show: true,
      base,
      mult: 1.5,
      emBonus,
      dmg: stat?.SHATTER_DMG,
      cd: 0,
      amp: 1,
      add: 0,
    },
  ]
}

export default Transformative

export type TransformativeT = {
  name: string
  element: Element
  show: boolean
  base: number
  mult: number
  emBonus: number
  dmg: number
  amp: number
  cd: number
  add: number
}
