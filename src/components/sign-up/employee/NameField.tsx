import Input from '@/components/common/Input'
import { useAuthStore } from '@/store/authStore'
import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'

const NameField = () => {
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)

  const { t } = useTranslation()

  return (
    <section className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        {t('signUp.name.label')}
        <span className="text-main">*</span>
      </p>
      <Input
        value={employeeSignUp?.name ?? ''}
        setValue={(e: ChangeEvent<HTMLInputElement>) => {
          setAuthStoreState({ ...employeeSignUp, employeeSignUp: { ...employeeSignUp, name: e.target.value } })
        }}
        inputBoxStyle={'default'}
        type={'text'}
        placeholder={t('signUp.name.placeholder')}
        customClassName={'w-full'}
      />
    </section>
  )
}
export default NameField
