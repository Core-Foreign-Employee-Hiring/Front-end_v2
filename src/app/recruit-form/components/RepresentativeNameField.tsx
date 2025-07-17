import Input from '@/components/common/Input'
import { useRecruitStore } from '@/store/recruitStore'

export default function RepresentativeNameField() {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const representativeName = useRecruitStore((state) => state.recruitPostData.representativeName)

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        대표자명<span className="text-main">*</span>
      </p>
      <Input
        value={representativeName ?? ''}
        inputBoxStyle={'default'}
        placeholder={'대표자명을 입력해주세요.'}
        setValue={(e) => {
          setState({ ...recruitPostData, recruitPostData: { ...recruitPostData, representativeName: e.target.value } })
        }}
      />
    </div>
  )
}
