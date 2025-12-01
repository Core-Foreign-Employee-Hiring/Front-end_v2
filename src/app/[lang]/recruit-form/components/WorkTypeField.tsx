import Input from '@/components/common/Input'
import { useRecruitStore } from '@/store/recruitStore'
import { WorkType } from '@/types/recruit'

export default function WorkTypeField() {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const workType = useRecruitStore((state) => state.recruitPostData.workType)
  const directInputWorkType = useRecruitStore((state) => state.recruitPostData.directInputWorkType)

  const workTypeContents: { kor: string; eng: WorkType }[] = [
    { kor: '대면 근무', eng: 'ONSITE' },
    { kor: '혼합 근무 (대면 + 비대면)', eng: 'HYBRID' },
    { kor: '비대면 근무', eng: 'REMOTE' },
  ]

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">
        근무형태 <span className="text-main">*</span>
      </p>
      <div className="flex gap-x-2">
        {workTypeContents.map((type) => {
          return (
            <button
              onClick={() => {
                setState({
                  recruitPostData: {
                    ...recruitPostData,
                    workType: workType === type.eng ? undefined : type.eng,
                  },
                })
              }}
              type="button"
              key={type.eng}
              className={`${workType === type.eng ? 'border-main bg-main-light button text-main flex h-[40px] cursor-pointer items-center justify-center rounded-[12px] border px-2 transition hover:opacity-[80%] hover:duration-75' : 'hover:border-gray3 border-gray2 button text-gray5 flex h-[40px] cursor-pointer items-center justify-center rounded-[12px] border px-2 transition hover:duration-75'}`}
            >
              {type.kor}
            </button>
          )
        })}
      </div>
      <div className="flex w-full items-center gap-x-3">
        <p className="subtitle-sm text-gray5 whitespace-nowrap">기타사항</p>
        <Input
          setValue={(e) =>
            setState({
              recruitPostData: {
                ...recruitPostData,
                directInputWorkType: e.target.value,
              },
            })
          }
          value={directInputWorkType ?? ''}
          placeholder={'직접입력'}
          inputBoxStyle={'default'}
          customClassName={'w-full'}
        ></Input>
      </div>
    </div>
  )
}
