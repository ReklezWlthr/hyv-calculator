import { Build, BuildStoreType } from './build_store'
import { CalculatorStore, CalculatorStoreType } from './calculator_store'
import { CharacterStore, CharacterStoreType } from './character_store'
import { ImportStore } from './import_store'
import { InventoryStoreType, Inventory } from './inventory_store'
import { Modal, ModalStoreType } from './modal_store'
import { SettingStore } from './setting_store'
import { Team, TeamStoreType } from './team_store'
// import { User, UserType } from './user_store'

interface RootStoreType {
  modalStore: ModalStoreType
  teamStore: TeamStoreType
  artifactStore: InventoryStoreType
  buildStore: BuildStoreType
  charStore: CharacterStoreType
  calculatorStore: CalculatorStoreType
  settingStore: SettingStore
  importStore: ImportStore
  // userStore: UserType
}

export class RootStore {
  modalStore: ModalStoreType
  teamStore: TeamStoreType
  artifactStore: InventoryStoreType
  buildStore: BuildStoreType
  charStore: CharacterStoreType
  calculatorStore: CalculatorStore
  settingStore: SettingStore
  importStore: ImportStore
  // userStore: UserType

  constructor() {
    this.modalStore = new Modal()
    this.teamStore = new Team()
    this.artifactStore = new Inventory()
    this.buildStore = new Build()
    this.charStore = new CharacterStore()
    this.calculatorStore = new CalculatorStore()
    this.settingStore = new SettingStore()
    this.importStore = new ImportStore()
    // this.userStore = new User()
  }

  hydrate(data: RootStoreType) {
    if (!data) return
    this.modalStore.hydrate(data.modalStore)
    this.teamStore.hydrate(data.teamStore)
    this.artifactStore.hydrate(data.artifactStore)
    this.buildStore.hydrate(data.buildStore)
    this.charStore.hydrate(data.charStore)
    this.calculatorStore.hydrate(data.calculatorStore)
    this.settingStore.hydrate(data.settingStore)
    this.importStore.hydrate(data.importStore)
    // this.userStore.hydrate(data.userStore)
  }
}
