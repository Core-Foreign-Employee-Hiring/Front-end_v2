'use client'

import { ChangeEvent, useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import { getMemberVerifyUserId } from '@/lib/login'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useTranslation } from 'react-i18next'

const IdField = () => {
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const isEmployeeIdVerified = useAuthStore((state) => state.isEmployeeIdVerified)

  const { t } = useTranslation()

  return (
    <section className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        {t('signUp.id.label')}
        <span className="text-main">*</span>
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
          placeholder={t('signUp.id.placeholder')}
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
          {t('signUp.id.duplication')}
        </Button>
      </div>
      {isEmployeeIdVerified !== undefined && (
        <div className="badge-md">
          {isEmployeeIdVerified ? (
            <p className="text-main">{t('signUp.id.successMessage')}</p>
          ) : (
            <p className="text-error">{t('signUp.id.errorMessage')}</p>
          )}
        </div>
      )}
    </section>
  )
}
export default IdField
