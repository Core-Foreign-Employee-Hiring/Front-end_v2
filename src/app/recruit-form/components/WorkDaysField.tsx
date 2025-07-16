import Input from '@/components/common/Input'

export default function WorkDaysField() {
  return (
    <div className="flex flex-col gap-y-[12px]">
      <p className="subtitle-lg">
        근무요일 <span className="text-main">*</span>
      </p>
      <section className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          <div className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full">
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
          </div>
          <p className="button text-gray5">목록에서 선택</p>
        </div>
        <div className="flex gap-x-2">
          {['평일 (월, 화, 수, 목, 금)', '주말 (토, 일)', '주7일 (월~일)', '주6일'].map((type) => {
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
      </section>
      <section className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          <div className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full">
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
          </div>
          <p className="button text-gray5">직접 선택</p>
        </div>
        <div className="flex gap-x-2">
          {['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'].map((type) => {
            return (
              <button
                key={type}
                className="border-gray2 button text-gray5 flex h-[40px] w-[60px] items-center justify-center rounded-[12px] border"
              >
                {type}
              </button>
            )
          })}
        </div>
      </section>
      <div className="flex w-full items-center gap-x-3">
        <p className="subtitle-sm text-gray5 whitespace-nowrap">기타사항</p>
        <Input placeholder={'직접입력'} inputBoxStyle={'default'} customClassName={'w-full'}></Input>
      </div>
    </div>
  )
}
