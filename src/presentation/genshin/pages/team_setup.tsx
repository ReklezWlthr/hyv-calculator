import { useCallback, useState } from 'react'
import { CharacterBlock } from '../components/character_block'
import _ from 'lodash'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import { StatBlock } from '../components/stat_block'
import { WeaponBlock } from '../components/weapon_block'
import { ArtifactBlock } from '../components/artifact_block'
import { useStore } from '@src/data/providers/app_store_provider'
import { PrimaryButton } from '@src/presentation/components/primary.button'

const CharacterSelect = ({
  onClick,
  isSelected,
  codeName,
}: {
  onClick: () => void
  isSelected: boolean
  codeName: string
}) => {
  return (
    <div
      className={classNames(
        'w-12 h-12 rounded-full cursor-pointer bg-primary duration-200 relative shrink-0',
        isSelected ? 'ring-4 ring-primary-lighter' : 'hover:ring-2 ring-primary-light'
      )}
      onClick={onClick}
    >
      <img
        src={codeName ? `https://enka.network/ui/UI_AvatarIcon_Side_${codeName}.png` : ''}
        className="absolute scale-150 bottom-3"
      />
    </div>
  )
}

export const TeamSetup = observer(() => {
  const [selected, setSelected] = useState(0)

  const { teamStore, buildStore } = useStore()

  const onSaveBuild = useCallback(() => {
    const character = teamStore.characters[selected]

    buildStore.saveBuild({
      id: `l_b_${_.random(9999999).toString().padStart(7, '0')}`,
      char: character?.data?.name,
      isEquipped: true,
      ...character?.equipments,
    })
  }, [selected])

  return (
    <div className="flex justify-center w-5/6 gap-5 p-5 overflow-y-auto">
      <div className="w-1/3">
        <div className="flex justify-center w-full gap-4 pt-1 pb-3">
          {_.map(teamStore?.characters, (item, index) => (
            <CharacterSelect
              key={`char_select_${index}`}
              onClick={() => setSelected(index)}
              isSelected={index === selected}
              codeName={item.data?.codeName}
            />
          ))}
        </div>
        <CharacterBlock index={selected} />
        <PrimaryButton title='Save Build' onClick={onSaveBuild} />
        <div className="h-5" />
        <StatBlock index={selected} />
      </div>
      <div className="w-1/5 space-y-5">
        <WeaponBlock index={selected} />
        <ArtifactBlock index={selected} piece={5} aId={teamStore.characters[selected]?.equipments?.artifacts?.[4]} />
      </div>
      <div className="w-1/5 space-y-5">
        <ArtifactBlock index={selected} piece={4} aId={teamStore.characters[selected]?.equipments?.artifacts?.[3]} />
        <ArtifactBlock index={selected} piece={1} aId={teamStore.characters[selected]?.equipments?.artifacts?.[0]} />
      </div>
      <div className="w-1/5 space-y-5">
        <ArtifactBlock index={selected} piece={2} aId={teamStore.characters[selected]?.equipments?.artifacts?.[1]} />
        <ArtifactBlock index={selected} piece={3} aId={teamStore.characters[selected]?.equipments?.artifacts?.[2]} />
      </div>
    </div>
  )
})
