import { ChangeEvent, useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import { getMemberVerifyUserId } from '@/lib/auth'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

const IdField = () => {
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const isEmployeeIdVerified = useAuthStore((state) => state.isEmployeeIdVerified)

  return (
    <section className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        아이디<span className="text-main">*</span>
      </p>
      <div className="flex items-center justify-center gap-x-2">
        <Input
          value={employeeSignUp?.userId ?? ''}
          setValue={(e: ChangeEvent<HTMLInputElement>) => {
            setAuthStoreState({ ...employeeSignUp, employeeSignUp: { ...employeeSignUp, userId: e.target.value } })
            setAuthStoreState({ isEmployeeIdVerified: undefined })
          }}
          inputBoxStyle={isEmployeeIdVerified === undefined || true ? 'default' : 'error'}
          type={'text'}
          placeholder={'아이디를 입력해주세요.'}
          customClassName={'w-full'}
        />
        <Button
          size={'lg'}
          type={
            employeeSignUp?.userId === undefined
              ? 'disabled'
              : employeeSignUp?.userId.length === 0
                ? 'disabled'
                : 'active'
          }
          onClick={async () => {
            if (employeeSignUp?.userId) {
              const result = await getMemberVerifyUserId(employeeSignUp?.userId)
              if (result.status === 200) {
                setAuthStoreState({ isEmployeeIdVerified: true })
              } else if (result.status === 400) {
                setAuthStoreState({ isEmployeeIdVerified: false })
              }
            }
          }}
          customClassName={`${employeeSignUp?.userId?.length === 0 ? 'cursor-no-drop' : 'cursor-pointer'} whitespace-nowrap`}
        >
          중복확인
        </Button>
      </div>
      {isEmployeeIdVerified !== undefined && (
        <div className="badge-md">
          {isEmployeeIdVerified ? (
            <p className="text-main">사용 가능한 아이디입니다.</p>
          ) : (
            <p className="text-error">사용 불가능한 아이디입니다.</p>
          )}
        </div>
      )}
    </section>
  )
}
export default IdField
