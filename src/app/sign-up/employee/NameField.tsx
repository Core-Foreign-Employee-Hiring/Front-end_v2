import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

const NameField = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        이름<span className="text-main">*</span>
      </p>
      <Input inputBoxStyle={'default'} type={'text'} placeholder={'이름을 작성해주세요.'} customClassName={'w-full'} />
    </section>
  )
}
export default NameField
