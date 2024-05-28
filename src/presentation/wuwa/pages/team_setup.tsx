import { useCallback, useState } from 'react'
import _ from 'lodash'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'
import { useStore } from '@src/data/providers/app_store_provider'
import { PrimaryButton } from '@src/presentation/components/primary.button'
import { TextInput } from '@src/presentation/components/inputs/text_input'
import { GhostButton } from '@src/presentation/components/ghost.button'
import { findCharacterW } from '@src/core/utils/finder'
import { getResonanceCount, getSetCount } from '@src/core/utils/data_format'
import { ArtifactSets } from '@src/data/db/genshin/artifacts'
import { Tooltip } from '@src/presentation/components/tooltip'
import { CommonModal } from '@src/presentation/components/common_modal'
import { Resonance } from '@src/data/db/genshin/characters'
import ConditionalsObject from '@src/data/lib/stats/conditionals/conditionals'
import { TravelerIconName, WeaponIcon } from '@src/domain/genshin/constant'
import { SelectInput } from '@src/presentation/components/inputs/select_input'
import { calculateFinal, calculateOutOfCombat } from '@src/core/utils/calculator'
import { baseStatsObject } from '@src/data/lib/stats/baseConstant'
import { CharacterSelect } from '../components/character_select'

const SetToolTip = observer(({ item, set }: { item: number; set: string }) => {
  const setDetail = _.find(ArtifactSets, ['id', set])
  const count = _.floor(item / 2) * 2
  return (
    item >= 2 && (
      <Tooltip
        title={setDetail?.name}
        body={
          <div className="space-y-1">
            <p
              className={count < 2 && 'opacity-40'}
              dangerouslySetInnerHTML={{ __html: `<b>2 Piece:</b> ${setDetail?.desc[0]}` }}
            />
            <p
              className={count < 4 && 'opacity-40'}
              dangerouslySetInnerHTML={{ __html: `<b>4 Piece:</b> ${setDetail?.desc[1]}` }}
            />
          </div>
        }
        style="w-[400px]"
        key={set}
      >
        <div className="flex items-center justify-between w-full gap-3 text-xs text-white cursor-default">
          <p className="w-full line-clamp-2">{setDetail?.name}</p>
          <p className="px-2 py-0.5 rounded-lg bg-primary-lighter bg-opacity-40">{count}</p>
        </div>
      </Tooltip>
    )
  )
})

const ResonanceToolTip = observer(({ count, element }: { count: number; element: string }) => {
  const resDetail = _.find(Resonance, ['element', element])
  const floorCount = _.floor(count / 2) * 2
  return (
    count >= 2 && (
      <Tooltip
        title={resDetail?.name}
        body={
          <div className="space-y-1">
            <p dangerouslySetInnerHTML={{ __html: resDetail?.desc }} />
          </div>
        }
        style="w-[400px]"
        position="right"
        key={element}
      >
        <div className="flex items-center justify-between w-full gap-3 text-xs text-white cursor-default">
          <p className="w-full line-clamp-2">{resDetail?.name}</p>
          <p className="px-2 py-0.5 rounded-lg bg-primary-lighter bg-opacity-40">{floorCount}</p>
        </div>
      </Tooltip>
    )
  )
})

const SaveBuildModal = observer(({ index }: { index: number }) => {
  const [name, setName] = useState('')

  const { modalStore, teamStore, buildStore } = useStore()

  const onSaveBuild = useCallback(() => {
    const id = crypto.randomUUID()
    const character = teamStore.characters[index]

    if (name) {
      const pass = buildStore.saveBuild({
        id,
        name,
        cId: character?.cId,
        isDefault: false,
        ...character?.equipments,
      })
      if (pass) {
        buildStore.setDefault(id)
        modalStore.closeModal()
      }
    }
  }, [index, name])

  return (
    <div className="px-5 py-3 space-y-3 text-white rounded-lg bg-primary-dark">
      <div className="space-y-1">
        <p className="font-semibold">
          Build Name<span className="text-red">*</span>
        </p>
        <TextInput onChange={setName} value={name} />
      </div>
      <div className="flex justify-end gap-2">
        <GhostButton title="Cancel" onClick={() => modalStore.closeModal()} />
        <PrimaryButton title="Confirm" onClick={onSaveBuild} />
      </div>
    </div>
  )
})

export const TeamSetup = observer(() => {
  const { teamStore, modalStore, artifactStore, settingStore } = useStore()
  const selected = teamStore.selected

  const artifactData = _.filter(artifactStore.artifacts, (item) =>
    _.includes(teamStore.characters[selected]?.equipments?.artifacts, item.id)
  )

  const char = teamStore.characters[selected]
  const charData = findCharacterW(char.cId)
  const raw = calculateOutOfCombat(_.cloneDeep(baseStatsObject), selected, teamStore.characters, artifactData)
  const stats = calculateFinal(raw)

  const onOpenSaveModal = useCallback(() => {
    modalStore.openModal(<SaveBuildModal index={selected} />)
  }, [selected])

  const onOpenBuildModal = useCallback(() => {
    modalStore.openModal(<></>)
  }, [selected])

  const onOpenConfirmModal = useCallback(() => {
    modalStore.openModal(
      <CommonModal
        icon="fa-solid fa-question-circle text-yellow"
        title="Unequip All"
        desc="This will unequip everything from this character, including weapons and artifacts. Do you wish to proceed?"
        onConfirm={() => teamStore.unequipAll(selected)}
      />
    )
  }, [selected])

  const set = getSetCount(artifactData)
  const resonance = getResonanceCount(teamStore.characters)

  const talent = _.find(ConditionalsObject, ['id', char.cId])?.conditionals(
    char?.cons,
    char?.ascension,
    char?.talents,
    teamStore.characters
  )

  const maxTalentLevel = _.max([1, (char.ascension - 1) * 2])
  const talentLevels = _.map(Array(maxTalentLevel), (_, index) => ({
    name: (index + 1).toString(),
    value: (index + 1).toString(),
  }))

  return (
    <div className="flex justify-center w-full gap-5 p-5 overflow-y-auto">
      <div className="w-1/3">
        <div className="flex justify-center w-full gap-4 pt-1 pb-3">
          {_.map(teamStore?.characters, (item, index) => {
            return (
              <CharacterSelect
                key={`char_select_${index}`}
                onClick={() => teamStore.setValue('selected', index)}
                isSelected={index === selected}
                id={charData?.id}
              />
            )
          })}
        </div>
        {/* <CharacterBlock index={selected} />
        {charData ? (
          <div className="flex items-center justify-center gap-3 py-3">
            <div className="relative">
              <TalentIcon
                talent={talent?.talents?.normal}
                element={charData?.element}
                icon={`https://enka.network/ui${WeaponIcon[charData?.weapon]}`}
                size="w-9 h-9"
              />
              {talent?.upgrade?.normal && (
                <div className="absolute flex items-center justify-center px-1.5 py-0.5 text-xs rounded-full -bottom-1 -right-3 bg-cyan-600 text-white">
                  +3
                </div>
              )}
            </div>
            <SelectInput
              value={char?.talents?.normal?.toString()}
              onChange={(value) => teamStore.setTalentLevel(selected, 'normal', parseInt(value))}
              options={talentLevels}
              style="w-14"
            />
            <div className="relative ml-3">
              <TalentIcon
                talent={talent?.talents?.skill}
                element={charData?.element}
                icon={`https://enka.network/ui/Skill_${iconCodeName === 'PlayerGrass' ? 'E' : 'S'}_${iconCodeName}${
                  iconCodeName === 'Qin' ? '_02' : '_01'
                }${iconCodeName === 'Diluc' ? '_01' : ''}.png`}
                size="w-9 h-9"
              />
              {talent?.upgrade?.skill && (
                <div className="absolute pointer-events-none flex items-center justify-center px-1.5 py-0.5 text-xs rounded-full -bottom-2 -right-3 bg-cyan-600 text-white">
                  +3
                </div>
              )}
            </div>
            <SelectInput
              value={char?.talents?.skill?.toString()}
              onChange={(value) => teamStore.setTalentLevel(selected, 'skill', parseInt(value))}
              options={talentLevels}
              style="w-14"
            />
            <div className="relative ml-3">
              <TalentIcon
                talent={talent?.talents?.burst}
                element={charData?.element}
                icon={`https://enka.network/ui/Skill_${iconCodeName === 'PlayerGrass' ? 'S' : 'E'}_${iconCodeName}${
                  _.includes(['Ayaka', 'Ambor'], iconCodeName) ? '' : '_01'
                }.png`}
                size="w-9 h-9"
              />
              {talent?.upgrade?.burst && (
                <div className="absolute pointer-events-none flex items-center justify-center px-1.5 py-0.5 text-xs rounded-full -bottom-2 -right-3 bg-cyan-600 text-white">
                  +3
                </div>
              )}
            </div>
            <SelectInput
              value={char?.talents?.burst?.toString()}
              onChange={(value) => teamStore.setTalentLevel(selected, 'burst', parseInt(value))}
              options={talentLevels}
              style="w-14"
            />
          </div>
        ) : (
          <div className="h-5" />
        )}
        <StatBlock index={selected} stat={stats} /> */}
      </div>
      <div className="w-1/5 space-y-5">
        {/* <WeaponBlock index={selected} {...teamStore.characters[selected]?.equipments?.weapon} />
        <ArtifactBlock index={selected} piece={5} aId={teamStore.characters[selected]?.equipments?.artifacts?.[4]} /> */}
        <div className="w-full px-3 py-2 space-y-1 rounded-lg bg-primary-dark">
          {_.every(set, (item) => item < 2) ? (
            <p className="text-xs text-white">No Set Bonus</p>
          ) : (
            _.map(set, (item, key) => <SetToolTip item={item} set={key} key={key} />)
          )}
        </div>
      </div>
      <div className="w-1/5 space-y-5">
        {/* <ArtifactBlock index={selected} piece={4} aId={teamStore.characters[selected]?.equipments?.artifacts?.[3]} />
        <ArtifactBlock index={selected} piece={1} aId={teamStore.characters[selected]?.equipments?.artifacts?.[0]} /> */}
        <div className="w-full px-3 py-2 space-y-1 rounded-lg bg-primary-dark">
          {_.isEmpty(resonance) ? (
            <p className="text-xs text-white">No Resonance Bonus</p>
          ) : _.size(resonance) === 4 ? (
            <ResonanceToolTip count={4} element="Unique" />
          ) : (
            _.map(resonance, (item, key) => <ResonanceToolTip count={item} element={key} key={key} />)
          )}
        </div>
      </div>
      <div className="w-1/5 space-y-5">
        {/* <ArtifactBlock index={selected} piece={2} aId={teamStore.characters[selected]?.equipments?.artifacts?.[1]} />
        <ArtifactBlock index={selected} piece={3} aId={teamStore.characters[selected]?.equipments?.artifacts?.[2]} /> */}
        <div className="flex gap-x-2">
          <PrimaryButton title="Equip Build" onClick={onOpenBuildModal} />
          <PrimaryButton title="Save Build" onClick={onOpenSaveModal} />
          <PrimaryButton title="Unequip All" onClick={onOpenConfirmModal} />
        </div>
      </div>
    </div>
  )
})
