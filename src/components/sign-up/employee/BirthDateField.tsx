import { useAuthStore } from '@/store/authStore'
import Input from '@/components/common/Input'

export default function BirthDateField() {
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)

  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        생년월일<span className="text-main">*</span>
      </p>
      <Input
        type={'date'}
        inputBoxStyle={'default'}
        value={employeeSignUp?.birthDate ?? ''}
        setValue={(e) =>
          setAuthStoreState({ ...employeeSignUp, employeeSignUp: { ...employeeSignUp, birthDate: e.target.value } })
        }
      />
    </div>
  )
}
