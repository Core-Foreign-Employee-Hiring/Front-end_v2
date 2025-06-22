import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

const IdField = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        아이디<span className="text-main">*</span>
      </p>
      <div className="flex items-center justify-center gap-x-2">
        <Input
          inputBoxStyle={'default'}
          type={'text'}
          placeholder={'아이디를 입력해주세요.'}
          customClassName={'w-full'}
        />
        <Button size={'lg'} type={'disabled'} onClick={() => {}} customClassName={'whitespace-nowrap'}>
          중복확인
        </Button>
      </div>
    </section>
  )
}
export default IdField
