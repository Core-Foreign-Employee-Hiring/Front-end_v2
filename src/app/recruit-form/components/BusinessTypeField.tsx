import Input from '@/components/common/Input'
import { useRecruitStore } from '@/store/recruitStore'

export default function BusinessTypeField() {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const businessType = useRecruitStore((state) => state.recruitPostData.businessType)

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        업종<span className="text-main">*</span>
      </p>
      <Input
        type={'text'}
        inputBoxStyle={'default'}
        placeholder={'업종을 입력해주세요.'}
        value={businessType ?? ''}
        setValue={(e) => {
          setState({ ...recruitPostData, recruitPostData: { ...recruitPostData, businessType: e.target.value } })
        }}
      ></Input>
    </div>
  )
}
