import Input from '@/components/common/Input'
import { useRecruitStore } from '@/store/recruitStore'

export default function CompanyNameField() {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const companyName = useRecruitStore((state) => state.recruitPostData.companyName)
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        회사이름<span className="text-main">*</span>
      </p>
      <Input
        value={companyName ?? ''}
        setValue={(e) =>
          setState({
            recruitPostData: {
              ...recruitPostData,
              companyName: e.target.value,
            },
          })
        }
        inputBoxStyle={'default'}
        placeholder={'회사이름을 입력해주세요.'}
      />
    </div>
  )
}
