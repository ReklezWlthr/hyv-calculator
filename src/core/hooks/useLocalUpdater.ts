import { useStore } from '@src/data/providers/app_store_provider'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useLocalUpdater = (game: string) => {
  const router = useRouter()
  const { teamStore, artifactStore, buildStore, charStore, settingStore, calculatorStore, setupStore } = useStore()
  const [data, setData] = useState(null)
  const [hydrated, setHydrated] = useState(false)

  const key = `${game}_local_storage`
  const settingKey = 'mdc_settings'

  const updateData = (data: string) => {
    const json = JSON.parse(data)
    teamStore.hydrateCharacters(json?.team)
    artifactStore.hydrateArtifacts(json?.artifacts)
    buildStore.hydrateBuilds(json?.builds)
    charStore.hydrateCharacters(json?.characters)
    setupStore.hydrateSetup(json?.setup)
    setData(data)
  }

  const updateSettings = (data: string) => {
    const json = JSON.parse(data)
    settingStore.setSettingValue(json)
    calculatorStore.setValue('level', json?.defaultEnemyLevel || 1)
  }

  useEffect(() => {
    window.onbeforeunload = function () {
      return 'Your changes may not be saved.'
    }
  }, [])

  useEffect(() => {
    if (hydrated && settingStore.settings.storeData) {
      localStorage.setItem(
        key,
        JSON.stringify({
          team: teamStore.characters,
          artifacts: artifactStore.artifacts,
          builds: buildStore.builds,
          characters: charStore.characters,
          setup: setupStore.setup,
        })
      )
    }
  }, [...teamStore.characters, artifactStore.artifacts, buildStore.builds, charStore.characters, setupStore.setup])

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(settingKey, JSON.stringify(settingStore.settings))
      calculatorStore.setValue('level', settingStore?.settings?.defaultEnemyLevel || 1)
    }
  }, [settingStore.settings])

  useEffect(() => {
    setupStore.updateCompare(0, {
      team: teamStore.characters,
      mod: calculatorStore.form,
      custom: calculatorStore.custom,
    })
  }, [...teamStore.characters, ...calculatorStore.form, ...calculatorStore.custom])

  useEffect(() => {
    const data = localStorage.getItem(key)
    const settings = localStorage.getItem(settingKey)

    updateData(data)
    updateSettings(settings)

    setHydrated(true)
  }, [router.asPath])

  return { data, updateData }
}
