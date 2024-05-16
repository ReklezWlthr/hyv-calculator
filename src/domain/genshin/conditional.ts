import { StatsObject } from '@src/data/lib/stats/baseConstant'
import { Element, ITalentLevel, ITeamChar, Stats, TalentProperty } from './constant'


export interface IScaling {
  name: string
  scale?: Stats
  value: { scaling: number; multiplier: Stats; override?: number }[]
  element: Element | TalentProperty
  property: TalentProperty
  multiplier?: number
  flat?: number
  bonus?: number //Bonus dmg for each component
  cr?: number //Bonus crit rate for each component
  cd?: number //Bonus crit dmg for each component
}

export interface IContent {
  type?: 'toggle' | 'number' | 'element'
  id: string
  text: string
  title: string
  content: string
  show: boolean
  default?: number | boolean | Element
  max?: number
  min?: number
  debuff?: boolean
}

export interface ITalent {
  [key: string]: { title: string; content: string; upgrade?: string[] }
}

export interface IConditional {
  upgrade: {
    normal: boolean
    skill: boolean
    burst: boolean
  }
  talents: ITalent
  content: IContent[]
  teammateContent: IContent[]
  preCompute: (form: Record<string, any>) => StatsObject
  preComputeShared: (base: StatsObject, form: Record<string, any>) => StatsObject
  postCompute: (base: StatsObject, form: Record<string, any>) => StatsObject
}

export type ConditionalFunction = (
  c: number,
  a: number,
  t: ITalentLevel,
  stat: StatObjectT,
  team?: ITeamChar[]
) => IConditional
