import { useStore } from '@src/data/providers/app_store_provider'
import { observer } from 'mobx-react-lite'
import _ from 'lodash'
import { useMemo } from 'react'
import { PrimaryButton } from '@src/presentation/components/primary.button'

export const BuildModal = observer(({ index }: { index: number }) => {
  const { buildStore, teamStore, modalStore } = useStore()

  const char = teamStore.characters[index]

  const filteredBuilds = useMemo(
    () => _.filter(buildStore.builds, (build) => build.char === char?.data?.name),
    [buildStore.builds, char]
  )

  return (
    <div className="w-[33vw] p-4 text-white rounded-xl bg-primary-dark space-y-3 font-semibold">
      <p className="text-lg font-bold">Saved Builds</p>
      {filteredBuilds.length ? (
        _.map(filteredBuilds, (build) => (
          <div className="flex items-center justify-between w-full px-2 text-white">
            <div className="w-1/2">
              <div className="flex items-center gap-2">
                {build.isDefault && (
                  <i className="text-xs fa-solid fa-check-circle text-genshin-dendro" title="Default Build" />
                )}
                <p className="w-full truncate">{build.name}</p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <PrimaryButton
                title="Equip"
                onClick={() => {
                  _.forEach(build.artifacts, (artifact, i) => teamStore.setArtifact(char?.id, i + 1, artifact))
                  teamStore.setWeapon(index, build.weapon)
                  modalStore.closeModal()
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center w-full text-gray">
          <img src="https://cdn.wanderer.moe/genshin-impact/emotes/paimon-s-paintings-set-2-9.png" className='w-32 h-32' />
          <p>No Saved Build</p>
        </div>
      )}
    </div>
  )
})
