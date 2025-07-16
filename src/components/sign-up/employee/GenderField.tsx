import Button from '@/components/common/Button'
import { useAuthStore } from '@/store/authStore'

export default function GenderField() {
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)
  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        성별<span className="text-main">*</span>
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
          남자
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
          여자
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
          선택 안함
        </Button>
      </div>
    </div>
  )
}
