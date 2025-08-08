import Input from '@/components/common/Input'

export default function SummaryField() {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        한줄 설명 <span className="text-main">*</span>
      </p>
      <Input
        inputBoxStyle={'default'}
        value={''}
        placeholder={'상품에 대한 한줄 설명을 작성해주세요.'}
        customClassName={'h-[52px] body-md'}
      />
    </div>
  )
}
