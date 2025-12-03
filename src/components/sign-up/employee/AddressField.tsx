import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useAuthStore } from '@/store/authStore'
import { useModalStore } from '@/store/modalStore'
import { useTranslation } from 'react-i18next'

export default function AddressField() {
  const setModalState = useModalStore((state) => state.setState)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        {t('signUp.address.label')}
        <span className="text-main">*</span>
      </p>
      <div className="flex items-center justify-center gap-x-2">
        <Input
          onClick={() => {
            setModalState({ isSearchAddressModalOpen: true })
          }}
          value={employeeSignUp?.zipcode ?? ''}
          inputBoxStyle={'default'}
          type={'text'}
          placeholder={t('signUp.address.zipcodePlaceholder')}
          customClassName={'w-full'}
        />
        <Button
          onClick={() => {
            setModalState({ isSearchAddressModalOpen: true })
          }}
          size={'lg'}
          type={'active'}
          customClassName={'whitespace-nowrap'}
        >
          {t('signUp.address.searchAddressButton')}
        </Button>
      </div>
      <Input
        value={employeeSignUp?.address1 ?? ''}
        onClick={() => {
          setModalState({ isSearchAddressModalOpen: true })
        }}
        placeholder={t('signUp.address.address1Placeholder')}
        inputBoxStyle={'default'}
      />
      <Input
        value={employeeSignUp?.address2 ?? ''}
        setValue={(e) => {
          setAuthStoreState({ ...employeeSignUp, employeeSignUp: { ...employeeSignUp, address2: e.target.value } })
        }}
        placeholder={t('signUp.address.address2Placeholder')}
        inputBoxStyle={'default'}
      />
    </div>
  )
}
