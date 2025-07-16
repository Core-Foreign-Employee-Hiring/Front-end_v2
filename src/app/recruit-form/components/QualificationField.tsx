interface QualificationFieldProps {}
export default function QualificationField({}: QualificationFieldProps) {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">
        자격 요건 <span className="text-main">*</span>
      </p>
      <textarea
        placeholder={'직접 입력'}
        className={'border-gray2 px- h-[240px] w-full rounded-[16px] border px-5 py-3'}
      />
    </div>
  )
}
