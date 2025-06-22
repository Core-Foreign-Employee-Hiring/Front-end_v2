import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

const PWField = () => {
  return (
    <>
      <section className="flex flex-col gap-y-2">
        <p className="subtitle-lg">
          비밀번호<span className="text-main">*</span>
        </p>
        <Input
          inputBoxStyle={'default'}
          type={'text'}
          placeholder={'대소문자, 숫자, 기호 포함 8~15자'}
          customClassName={'w-full'}
        />
      </section>
      <section className="flex flex-col gap-y-2">
        <p className="subtitle-lg">
          비밀번호 중복확인<span className="text-main">*</span>
        </p>
        <Input
          inputBoxStyle={'default'}
          type={'text'}
          placeholder={'대소문자, 숫자, 기호 포함 8~15자'}
          customClassName={'w-full'}
        />
      </section>
    </>
  )
}
export default PWField
