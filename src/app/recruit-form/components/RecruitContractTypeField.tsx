import Button from '@/components/common/Button'
import Input from '@/components/common/Input'

interface RecruitContractTypeFieldProps {}

export default function RecruitContractTypeField({}: RecruitContractTypeFieldProps) {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">
        계약형태 <span className="text-main">*</span>
      </p>
      <div className="flex gap-x-2">
        {['정규직', '계약직', '인턴', '신입', '경력'].map((type) => {
          return (
            <button
              key={type}
              className="border-gray2 button text-gray5 flex h-[40px] w-[73px] items-center justify-center rounded-[12px] border"
            >
              {type}
            </button>
          )
        })}
      </div>
      <div className="flex w-full items-center gap-x-3">
        <p className="subtitle-sm text-gray5 whitespace-nowrap">기타사항</p>
        <Input placeholder={'직접입력'} inputBoxStyle={'default'} customClassName={'w-full'}></Input>
      </div>
    </div>
  )
}
