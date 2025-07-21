import Input from '@/components/common/Input'
import { useRecruitStore } from '@/store/recruitStore'
import { ContractType } from '@/types/recruit'

interface RecruitContractTypeFieldProps {}

export default function RecruitContractTypeField({}: RecruitContractTypeFieldProps) {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const contractType = useRecruitStore((state) => state.recruitPostData.contractType)
  const directInputContractType = useRecruitStore((state) => state.recruitPostData.directInputContractType)

  const contractContents: { kor: string; eng: ContractType }[] = [
    { kor: '정규직', eng: 'REGULAR' },
    { kor: '계약직', eng: 'CONTRACT' },
    { kor: '인턴', eng: 'INTERN' },
    { kor: '신입', eng: 'NEWCOMER' },
    { kor: '경력', eng: 'EXPERIENCED' },
  ]

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">
        계약형태 <span className="text-main">*</span>
      </p>
      <div className="flex gap-x-2">
        {contractContents.map((type) => {
          return (
            <button
              onClick={() => {
                setState({
                  recruitPostData: {
                    ...recruitPostData,
                    contractType: contractType === type.eng ? undefined : type.eng,
                  },
                })
              }}
              key={type.eng}
              className={`${contractType === type.eng ? 'border-main bg-main-light button text-main flex h-[40px] w-[73px] items-center justify-center rounded-[12px] border' : 'border-gray2 button text-gray5 flex h-[40px] w-[73px] items-center justify-center rounded-[12px] border'}`}
            >
              {type.kor}
            </button>
          )
        })}
      </div>
      <div className="flex w-full items-center gap-x-3">
        <p className="subtitle-sm text-gray5 whitespace-nowrap">기타사항</p>
        <Input
          value={directInputContractType ?? ''}
          setValue={(e) =>
            setState({
              recruitPostData: {
                ...recruitPostData,
                directInputContractType: e.target.value,
              },
            })
          }
          placeholder={'직접입력'}
          inputBoxStyle={'default'}
          customClassName={'w-full'}
        ></Input>
      </div>
    </div>
  )
}
