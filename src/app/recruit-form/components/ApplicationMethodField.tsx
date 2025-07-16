import Input from '@/components/common/Input'

export default function ApplicationMethodField() {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">
        지원방법 <span className="text-main">*</span>
      </p>
      <section className="flex flex-col gap-y-3">
        <div className="flex gap-x-5">
          <div className="flex items-center gap-x-2">
            <div className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full">
              <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            </div>
            <p className="button text-gray5">홈페이지 지원</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full">
              <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            </div>
            <p className="button text-gray5">전화/문자 지원</p>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full">
              <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            </div>
            <p className="button text-gray5">이메일 지원</p>
          </div>
        </div>

        <div className="flex w-full items-center gap-x-3">
          <p className="subtitle-sm text-gray5 whitespace-nowrap">링크</p>
          <Input placeholder={'직접입력'} inputBoxStyle={'default'} customClassName={'w-full'}></Input>
        </div>
      </section>
    </div>
  )
}
