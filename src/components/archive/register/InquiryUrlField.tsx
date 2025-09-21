import Input from '@/components/common/Input'
import { useArchiveStore } from '@/store/archiveStore'

export default function InquiryUrlField() {
  const archiveData = useArchiveStore((state) => state.archiveData)
  const setState = useArchiveStore((state) => state.setState)
  return (
    <div className="flex flex-col gap-y-3">
      <div className="subtitle-lg flex gap-x-1">
        문의하기 URL <span className="text-main">*</span>
      </div>
      <Input
        placeholder={'문의 시 연결될 오픈채팅 URL을 입력해주세요.'}
        inputBoxStyle={'default'}
        value={archiveData?.inquiryUrl ?? ''}
        type={'text'}
        setValue={(e) => {
          setState({ ...archiveData, archiveData: { ...archiveData, inquiryUrl: e.target.value } })
        }}
      />
    </div>
  )
}
