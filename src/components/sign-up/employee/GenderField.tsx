import Button from '@/components/common/Button'
import { useAuthStore } from '@/store/authStore'
import { useTranslation } from 'react-i18next'

export default function GenderField() {
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        {t('signUp.gender.label')}
        <span className="text-main">*</span>
      </p>
      <div className="flex gap-x-2">
        <Button
          onClick={() => {
            setAuthStoreState({
              employeeSignUp: {
                ...employeeSignUp,
                gender: employeeSignUp?.gender === 'MALE' ? undefined : 'MALE',
              },
            })
          }}
          size={'lg'}
          customClassName={'w-full'}
          type={employeeSignUp?.gender === 'MALE' ? 'active' : 'outline'}
        >
          {t('signUp.gender.MALE')}
        </Button>
        <Button
          onClick={() => {
            setAuthStoreState({
              employeeSignUp: {
                ...employeeSignUp,
                gender: employeeSignUp?.gender === 'FEMALE' ? undefined : 'FEMALE',
              },
            })
          }}
          size={'lg'}
          customClassName={'w-full'}
          type={employeeSignUp?.gender === 'FEMALE' ? 'active' : 'outline'}
        >
          {t('signUp.gender.FEMALE')}
        </Button>
        <Button
          onClick={() => {
            setAuthStoreState({
              employeeSignUp: {
                ...employeeSignUp,
                gender: employeeSignUp?.gender === 'NULL' ? undefined : 'NULL',
              },
            })
          }}
          size={'lg'}
          customClassName={'w-full'}
          type={employeeSignUp?.gender === 'NULL' ? 'active' : 'outline'}
        >
          {t('signUp.gender.NOGENDER')}
        </Button>
      </div>
    </div>
  )
}
