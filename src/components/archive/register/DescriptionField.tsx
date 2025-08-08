import Input from '@/components/common/Input'

export default function DescriptionField() {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        설명 <span className="text-main">*</span>
      </p>
      <textarea
        className="placeholder:body-md body-md border-gray2 h-[184px] rounded-[16px] border px-5 py-3"
        placeholder={'아카이브 상품에 대한 상세 설명을 작성해주세요.'}
      ></textarea>
    </div>
  )
}
