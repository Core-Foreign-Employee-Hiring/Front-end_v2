import { useRecruitStore } from '@/store/recruitStore'

export default function AdditionalInformationField() {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const others = useRecruitStore((state) => state.recruitPostData.others)
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">기타</p>
      <textarea
        value={others ?? ''}
        onChange={(e) => {
          setState({
            recruitPostData: {
              ...recruitPostData,
              others: e.target.value,
            },
          })
        }}
        placeholder={'직접 입력'}
        className="border-gray2 hover:border-gray3 h-[240px] w-full cursor-pointer rounded-[16px] border px-5 py-3 outline-1 transition outline-none hover:duration-75"
      />
    </div>
  )
}
