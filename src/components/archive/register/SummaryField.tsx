import Input from '@/components/common/Input'
import { useArchiveStore } from '@/store/archiveStore'
import { ChangeEvent } from 'react'

export default function SummaryField() {
  const archiveData = useArchiveStore((state) => state.archiveData)
  const setState = useArchiveStore((state) => state.setState)
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        한줄 설명 <span className="text-main">*</span>
      </p>
      <Input
        inputBoxStyle={'default'}
        value={archiveData?.oneLineReview ?? ''}
        setValue={(e: ChangeEvent<HTMLInputElement>) => {
          setState({ ...archiveData, archiveData: { ...archiveData, oneLineReview: e.target.value } })
        }}
        placeholder={'상품에 대한 한줄 설명을 작성해주세요.'}
        customClassName={'h-[52px] body-md'}
      />
    </div>
  )
}
