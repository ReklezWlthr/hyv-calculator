import { useStore } from '@src/data/providers/app_store_provider'
import { ArtifactSets } from '@src/domain/genshin/artifact'
import { Stats } from '@src/domain/genshin/constant'
import { SelectInput } from '@src/presentation/components/inputs/select_input'
import { SelectTextInput } from '@src/presentation/components/inputs/select_text_input'
import { RarityGauge } from '@src/presentation/components/rarity_gauge'
import classNames from 'classnames'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

export const ArtifactModal = ({ type, cId, aId }: { type: number; cId: string; aId?: string }) => {
  const { teamStore, artifactStore, modalStore } = useStore()

  const [searchWord, setSearchWord] = useState('')

  const { watch, control, setValue, handleSubmit, reset } = useForm({
    defaultValues: {
      set: null,
      quality: 5,
      level: 20,
      main: Stats.ATK,
      type,
      subList: [],
    },
  })
  const values = watch()

  useEffect(() => {
    if (aId) {
      const { data, ...rest } = _.find(artifactStore.artifacts, ['id', aId])

      if (data.id) {
        reset({
          ...rest,
          set: {
            name: data.name,
            value: data.id.toString(),
            img: `https://enka.network/ui/${data.icon}_4.png`,
          },
        })
        setSearchWord(data.name)
      }
    }
  }, [aId])

  const TypeButton = ({ icon, buttonType }: { icon: string; buttonType: number }) => {
    return (
      <div
        className={classNames('w-10 h-10 p-2 duration-200 rounded-full cursor-pointer hover:bg-primary-lighter', {
          'bg-primary-lighter': values.type === buttonType,
        })}
        onClick={() => setValue('type', buttonType)}
      >
        <img src={icon} />
      </div>
    )
  }

  const onSubmit = handleSubmit(({ set, ...rest }) => {
    const id = aId || `l_${_.random(9999999).toString().padStart(7, '0')}`
    const setData = _.find(ArtifactSets, ['id', _.parseInt(set?.value)])

    const data = { id, ...rest, data: setData, subList: [] }

    const oldType = _.find(artifactStore.artifacts, ['id', aId])?.type
    const pass = aId ? artifactStore.editArtifact(aId, data) : artifactStore.addArtifact(data)
    if (pass) {
      teamStore.setArtifact(cId, rest.type, id)
      if (rest.type !== oldType && oldType) teamStore.setArtifact(cId, oldType, null)
    }
    modalStore.closeModal()
  })

  return (
    <div className="w-[300px] p-4 space-y-3 font-semibold text-white rounded-xl bg-primary-dark">
      <div className="flex justify-center gap-2">
        <TypeButton icon="/icons/flower_of_life.png" buttonType={4} />
        <TypeButton icon="/icons/plume_of_death.png" buttonType={2} />
        <TypeButton icon="/icons/sands_of_eon.png" buttonType={5} />
        <TypeButton icon="/icons/goblet_of_eonothem.png" buttonType={1} />
        <TypeButton icon="/icons/circlet_of_logos.png" buttonType={3} />
      </div>
      <div className="flex items-center gap-2">
        <div className="border rounded-full w-9 h-9 bg-primary-darker border-primary-light shrink-0">
          {values?.set?.img && <img src={values?.set?.img} className="scale-105" />}
        </div>
        <Controller
          name="set"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectTextInput
              value={field.value}
              options={_.map(ArtifactSets, (artifact) => ({
                name: artifact.name,
                value: artifact.id.toString(),
                img: `https://enka.network/ui/${artifact.icon}_4.png`,
              }))}
              placeholder="Artifact Set"
              searchWord={searchWord}
              onType={(value) => setSearchWord(value)}
              onChange={(name, value) => {
                setSearchWord(name)
                field.onChange(value)
              }}
            />
          )}
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <p className="text-sm">Level</p>
        <Controller
          name="level"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectInput
              value={field.value.toString()}
              options={_.map(Array(21), (_, index) => ({
                name: '+' + index,
                value: index.toString(),
              }))}
              style="w-16"
              onChange={(value) => field.onChange(_.parseInt(value))}
            />
          )}
        />
        <p className="text-sm">Grade</p>
        <Controller
          name="quality"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectInput
              value={field.value.toString()}
              options={_.map(Array(4).fill(2), (item, index) => ({
                name: <RarityGauge rarity={item + index} />,
                value: (item + index).toString(),
              }))}
              style="w-[70px]"
              onChange={(value) => field.onChange(_.parseInt(value))}
            />
          )}
        />
      </div>
      <div className="flex justify-end gap-2">
        <p onClick={onSubmit}>Confirm</p>
      </div>
    </div>
  )
}
