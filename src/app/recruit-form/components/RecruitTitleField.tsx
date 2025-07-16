import Input from '@/components/common/Input'

export default function RecruitTitleField() {
  return (
    <div className="flex flex-col gap-y-[12px]">
      <p className="subtitle-lg">
        공고제목 <span className="text-main">*</span>
      </p>
      <Input inputBoxStyle={'default'} onClick={() => {}} placeholder={'공고 제목을 입력해주세요.'}></Input>
    </div>
  )
}
