import { useLocalUpdater } from '@src/core/hooks/useLocalUpdater'
import { useStore } from '@src/data/providers/app_store_provider'
import { CommonModal } from '@src/presentation/components/common_modal'
import { PrimaryButton } from '@src/presentation/components/primary.button'
import { observer } from 'mobx-react-lite'
import { useCallback } from 'react'

export const ImportExport = observer(() => {
  const { modalStore } = useStore()

  const { data, updateData } = useLocalUpdater('genshin')

  const saveFile = async (blob: Blob, suggestedName: string) => {
    const blobURL = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = blobURL
    a.download = suggestedName
    a.style.display = 'none'
    document.body.append(a)
    a.click()
    // Revoke the blob URL and remove the element.
    setTimeout(() => {
      URL.revokeObjectURL(blobURL)
      a.remove()
    }, 1000)
  }

  const onOpenConfirmModal = useCallback((build: number, artifact: number, onConfirm: () => void) => {
    modalStore.openModal(
      <CommonModal
        title="Overwrite Data?"
        desc={`The file contains ${build} builds and ${artifact} artifacts. Are you sure you want to overwrite the current data with this?`}
        onConfirm={onConfirm}
      />
    )
  }, [])

  return (
    <div className="flex w-full gap-5 p-5 overflow-y-scroll text-white">
      <div className="w-1/5 space-y-2">
        <div className="font-bold">Import</div>
        <PrimaryButton
          title="Import"
          onClick={() => {
            document.getElementById('importer').click()
          }}
        />
        <input
          id="importer"
          className="hidden"
          type="file"
          multiple={false}
          onChange={(event) => {
            const file = event.target.files[0]
            const reader = new FileReader()
            reader.addEventListener('load', (event) => {
              const data = JSON.parse(event.target.result.toString())
              onOpenConfirmModal(data?.builds?.length, data?.artifacts?.length, () => {
                localStorage.setItem(`genshin_local_storage`, event.target.result.toString())
                updateData(event.target.result)
              })
            })
            reader.readAsText(file)
          }}
        />
      </div>
      <div className="w-1/5 space-y-2">
        <div className="font-bold">Export</div>
        <PrimaryButton
          title="Export"
          onClick={() => {
            const blob = new Blob([data], { type: 'text/json;charset=utf-8' })
            saveFile(blob, 'export.json')
          }}
        />
      </div>
    </div>
  )
})
