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
  defPen?: number //Only used by Yae
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
  options?: { name: string; value: string }[]
}

export interface ITalentDisplay {
  title: string
  content: string
  upgrade?: string[]
  value?: { name: string; value: { stat: Stats; scaling: (v: number) => number | string } }[]
}

export interface ITalent {
  [key: string]: ITalentDisplay
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
  preComputeShared: (own: StatsObject, base: StatsObject, form: Record<string, any>) => StatsObject
  postCompute: (base: StatsObject, form: Record<string, any>) => StatsObject
}

export type ConditionalFunction = (c: number, a: number, t: ITalentLevel, team?: ITeamChar[]) => IConditional
