import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useAuthStore } from '@/store/authStore'
import { useModalStore } from '@/store/modalStore'

export default function AddressField() {
  const setModalState = useModalStore((state) => state.setState)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)

  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        주소<span className="text-main">*</span>
      </p>
      <div className="flex items-center justify-center gap-x-2">
        <Input
          onClick={() => {
            setModalState({ isSearchAddressModalOpen: true })
          }}
          value={employeeSignUp?.zipcode ?? ''}
          inputBoxStyle={'default'}
          type={'text'}
          placeholder={'우편번호'}
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
          주소찾기
        </Button>
      </div>
      <Input
        value={employeeSignUp?.address1 ?? ''}
        onClick={() => {
          setModalState({ isSearchAddressModalOpen: true })
        }}
        placeholder={'주소를 입력해주세요.'}
        inputBoxStyle={'default'}
      />
      <Input
        value={employeeSignUp?.address2 ?? ''}
        setValue={(e) => {
          setAuthStoreState({ ...employeeSignUp, employeeSignUp: { ...employeeSignUp, address2: e.target.value } })
        }}
        placeholder={'상세주소를 입력해주세요.'}
        inputBoxStyle={'default'}
      />
    </div>
  )
}
