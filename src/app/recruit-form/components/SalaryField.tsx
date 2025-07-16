import DropBox from '@/components/common/DropBox'
import Input from '@/components/common/Input'

export default function SalaryField() {
  return (
    <div className="flex flex-col gap-y-[12px]">
      <p className="subtitle-lg">
        급여 <span className="text-main">*</span>
      </p>
      <section className="flex gap-x-3">
        <DropBox customClassName={'w-[160px] whitespace-nowrap'} initValue={'급여 종류 선택'} />
        <div className="flex w-full items-center gap-x-3">
          <Input placeholder={'급여 입력'} inputBoxStyle={'default'} customClassName={'w-full'}></Input>
          <p className="subtitle-md text-gray4">원</p>
        </div>
      </section>
      <div className="flex w-full items-center gap-x-3">
        <p className="subtitle-sm text-gray5 whitespace-nowrap">기타사항</p>
        <Input placeholder={'직접입력'} inputBoxStyle={'default'} customClassName={'w-full'}></Input>
      </div>
    </div>
  )
}
