import Input from '@/components/common/Input'
import { useAuthStore } from '@/store/authStore'
import { ChangeEvent } from 'react'

const NameField = () => {
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  return (
    <section className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        이름<span className="text-main">*</span>
      </p>
      <Input
        value={employeeSignUp?.name ?? ''}
        setValue={(e: ChangeEvent<HTMLInputElement>) => {
          setAuthStoreState({ ...employeeSignUp, employeeSignUp: { ...employeeSignUp, name: e.target.value } })
        }}
        inputBoxStyle={'default'}
        type={'text'}
        placeholder={'이름을 작성해주세요.'}
        customClassName={'w-full'}
      />
    </section>
  )
}
export default NameField
