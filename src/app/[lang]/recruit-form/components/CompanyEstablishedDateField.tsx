import Input from '@/components/common/Input'
import { useRecruitStore } from '@/store/recruitStore'

export default function CompanyEstablishedDateField() {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const establishedDate = useRecruitStore((state) => state.recruitPostData.establishedDate)

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">설립일</p>
      <Input
        value={establishedDate ?? ''}
        inputBoxStyle={'default'}
        type={'date'}
        setValue={(e) => {
          setState({ ...recruitPostData, recruitPostData: { ...recruitPostData, establishedDate: e.target.value } })
        }}
      />
    </div>
  )
}
