import Input from '@/components/common/Input'
import { ChangeEvent } from 'react'
import { useArchiveStore } from '@/store/archiveStore'

export default function TitleField() {
  const archiveData = useArchiveStore((state) => state.archiveData)
  const setState = useArchiveStore((state) => state.setState)

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        제목 <span className="text-main">*</span>
      </p>
      <Input
        inputBoxStyle={'default'}
        value={archiveData?.title ?? ''}
        setValue={(e: ChangeEvent<HTMLInputElement>) => {
          setState({ ...archiveData, archiveData: { ...archiveData, title: e.target.value } })
        }}
        placeholder={'상품에 대한 제목을 작성해주세요.'}
        customClassName={'h-[52px]'}
      />
    </div>
  )
}
