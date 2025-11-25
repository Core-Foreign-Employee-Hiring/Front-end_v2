import { useRecruitStore } from '@/store/recruitStore'

interface QualificationFieldProps {}
export default function QualificationField({}: QualificationFieldProps) {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const qualifications = useRecruitStore((state) => state.recruitPostData.qualifications)

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">
        자격 요건 <span className="text-main">*</span>
      </p>
      <textarea
        value={qualifications ?? ''}
        onChange={(e) => {
          setState({
            recruitPostData: {
              ...recruitPostData,
              qualifications: e.target.value,
            },
          })
        }}
        placeholder={'직접 입력'}
        className="border-gray2 hover:border-gray3 h-[240px] w-full cursor-pointer rounded-[16px] border px-5 py-3 outline-1 transition outline-none hover:duration-75"
      />
    </div>
  )
}
