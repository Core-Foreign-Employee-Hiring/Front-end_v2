import Input from '@/components/common/Input'

export default function TitleField() {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        제목 <span className="text-main">*</span>
      </p>
      <Input
        inputBoxStyle={'default'}
        value={''}
        placeholder={'상품에 대한 제목을 작성해주세요.'}
        customClassName={'h-[52px]'}
      />
    </div>
  )
}
