import { useRecruitStore } from '@/store/recruitStore'

export default function MainTaskField() {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const mainTasks = useRecruitStore((state) => state.recruitPostData.mainTasks)

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">
        주요 업무 <span className="text-main">*</span>
      </p>
      <textarea
        value={mainTasks}
        onChange={(e) => {
          setState({
            recruitPostData: {
              ...recruitPostData,
              mainTasks: e.target.value,
            },
          })
        }}
        placeholder={'직접 입력'}
        className={'border-gray2 px- h-[240px] w-full rounded-[16px] border px-5 py-3'}
      />
    </div>
  )
}
