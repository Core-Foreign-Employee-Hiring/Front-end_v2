import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

const PhoneNumberField = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        전화번호<span className="text-main">*</span>
      </p>
      <Input
        inputBoxStyle={'default'}
        type={'text'}
        placeholder={'‘-’ 제외하고 번호 입력'}
        customClassName={'w-full'}
      />
      <div className="flex items-center gap-x-2">
        <Input inputBoxStyle={'default'} type={'text'} placeholder={'인증번호 입력'} customClassName={'w-full'} />
        <Button
          size={'lg'}
          type={'disabled'}
          onClick={() => {}}
          customClassName={'w-[96px] h-[46px] whitespace-nowrap'}
        >
          인증하기
        </Button>
      </div>
    </section>
  )
}
export default PhoneNumberField
