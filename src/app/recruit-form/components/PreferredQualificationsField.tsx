import { useRecruitStore } from '@/store/recruitStore'

export default function PreferredQualificationsField() {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const preferences = useRecruitStore((state) => state.recruitPostData.preferences)
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">우대 사항</p>
      <textarea
        value={preferences ?? ''}
        onChange={(e) => {
          setState({
            recruitPostData: {
              ...recruitPostData,
              preferences: e.target.value,
            },
          })
        }}
        placeholder={'직접 입력'}
        className="border-gray2 hover:border-gray3 h-[240px] w-full cursor-pointer rounded-[16px] border px-5 py-3 outline-1 transition outline-none hover:duration-75"
      />
    </div>
  )
}
