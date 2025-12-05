import { useAuthStore } from '@/store/authStore'
import Input from '@/components/common/Input'
import { useTranslation } from 'react-i18next'

export default function BirthDateField() {
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        {t('signUp.birthDay.label')}
        <span className="text-main">*</span>
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
