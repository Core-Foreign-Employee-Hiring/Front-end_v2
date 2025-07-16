import Input from '@/components/common/Input'

export default function RecruitPeriodField() {
  return (
    <div className="flex flex-col gap-y-[12px]">
      <p className="subtitle-lg">
        모집기간 <span className="text-main">*</span>
      </p>
      <div className="flex items-center gap-x-3">
        <Input
          customClassName={'w-full'}
          inputBoxStyle={'default'}
          onClick={() => {}}
          placeholder={'모집 시작일'}
          type={'date'}
        />
        <p className="body-md text-gray4">~</p>
        <Input
          customClassName={'w-full'}
          inputBoxStyle={'default'}
          onClick={() => {}}
          placeholder={'모집 종료일'}
          type={'date'}
        />
      </div>
    </div>
  )
}
