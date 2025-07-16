import Input from '@/components/common/Input'

export default function WorkTypeField() {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">
        근무형태 <span className="text-main">*</span>
      </p>
      <div className="flex gap-x-2">
        {['대면 근무', '혼합 근무 (대면 + 비대면)', '비대면 근무'].map((type) => {
          return (
            <button
              key={type}
              className="border-gray2 button text-gray5 flex h-[40px] items-center justify-center rounded-[12px] border px-4"
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
