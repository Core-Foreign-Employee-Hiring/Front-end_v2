import Input from '@/components/common/Input'
import { useRecruitStore } from '@/store/recruitStore'

export default function RecruitTitleField() {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const title = useRecruitStore((state) => state.recruitPostData.title)

  return (
    <div className="flex flex-col gap-y-[12px]">
      <p className="subtitle-lg">
        공고제목 <span className="text-main">*</span>
      </p>
      <Input
        value={title ?? ''}
        setValue={(e) =>
          setState({
            recruitPostData: {
              ...recruitPostData,
              title: e.target.value,
            },
          })
        }
        inputBoxStyle={'default'}
        onClick={() => {}}
        placeholder={'공고 제목을 입력해주세요.'}
      />
    </div>
  )
}
