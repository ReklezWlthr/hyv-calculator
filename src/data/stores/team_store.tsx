import { Element, WeaponType } from '@src/domain/genshin'
import { makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

interface Character {
  name: string
  weapon: WeaponType
  element: Element
  level: number
  ascension: number
  cons: number
}

export interface TeamStoreType {
  characters: Character[]
  setMember: (index: number, character: Character) => void
  setMemberInfo: (index: number, info: Partial<Character>) => void
  hydrate: (data: TeamStoreType) => void
}

export class Team {
  characters: Character[]

  constructor() {
    this.characters = Array<Character>(4)

    makeAutoObservable(this)
  }

  setValue = <k extends keyof this>(key: k, value: this[k]) => {
    this[key] = value
  }

  setMember = (index: number, character: Character) => {
    if (index < 0 || index > 4) return
    this.characters[index] = character
  }

  setMemberInfo = (index: number, info: Partial<Character>) => {
    if (index < 0 || index > 4) return
    this.characters[index] = { ...this.characters[index], ...info }
  }

  hydrate = (data: TeamStoreType) => {
    if (!data) return

    this.characters = data.characters || Array(4)
  }
}
