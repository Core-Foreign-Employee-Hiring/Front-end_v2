import Input from '@/components/common/Input'
import DropBox from '@/components/common/DropBox'

export default function WorkTime() {
  return (
    <div className="flex flex-col gap-y-[12px]">
      <p className="subtitle-lg">
        근무시간 <span className="text-main">*</span>
      </p>
      <section className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          <div className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full">
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
          </div>
          <p className="button text-gray5">직접 선택</p>
        </div>
        <div className="flex w-full gap-x-3">
          <DropBox customClassName={'w-full'} initValue={'시작시간'} />
          <DropBox customClassName={'w-full'} initValue={'종료간시간'} />
        </div>
      </section>
      <div className="flex w-full items-center gap-x-3">
        <p className="subtitle-sm text-gray5 whitespace-nowrap">기타사항</p>
        <Input placeholder={'직접입력'} inputBoxStyle={'default'} customClassName={'w-full'}></Input>
      </div>
    </div>
  )
}
