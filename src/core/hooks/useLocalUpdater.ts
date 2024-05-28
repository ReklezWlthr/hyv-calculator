import { useStore } from '@src/data/providers/app_store_provider'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useLocalUpdater = (game: string) => {
  const router = useRouter()
  const { teamStore, artifactStore, buildStore, charStore, settingStore } = useStore()
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
    setData(data)
  }

  const updateSettings = (data: string) => {
    const json = JSON.parse(data)
    settingStore.setSettingValue(json)
    setData(data)
  }

  useEffect(() => {
    if (hydrated && settingStore.settings.storeData) {
      localStorage.setItem(
        key,
        JSON.stringify({
          team: teamStore.characters,
          artifacts: artifactStore.artifacts,
          builds: buildStore.builds,
          characters: charStore.characters,
        })
      )
    }
  }, [...teamStore.characters, artifactStore.artifacts, buildStore.builds, charStore.characters])

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(settingKey, JSON.stringify(settingStore.settings))
    }
  }, [settingStore.settings])

  useEffect(() => {
    const data = localStorage.getItem(key)
    const settings = localStorage.getItem(settingKey)
    console.log(data)

    updateData(data)
    updateSettings(settings)

    setHydrated(true)
  }, [router.asPath])

  return { data, updateData }
}
