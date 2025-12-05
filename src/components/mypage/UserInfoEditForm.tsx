import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Button from '@/components/common/Button'
import NameField from '@/components/mypage/user-info/NameField'
import EmailField from '@/components/mypage/user-info/EmailField'
import PhoneNumberField from '@/components/mypage/user-info/PhoneNumberField'
import AddressField from '@/components/mypage/user-info/AddressField'
import BirthDateField from '@/components/mypage/user-info/BirthDateField'
import NationalityField from '@/components/mypage/user-info/NationalityField'
import VisaField from '@/components/mypage/user-info/VisaField'
import EducationField from '@/components/mypage/user-info/EducationField'
import GenderField from '@/components/mypage/user-info/GenderField'
import TermsOfServiceField from '@/components/mypage/user-info/TermsOfServiceField'
import { getMyProfileInfo, patchModifyProfile } from '@/lib/mypage'
import { useMyPageStore } from '@/store/mypageStore'
import { useTranslation } from 'react-i18next'

interface UserInfoEditFormProps {
  setIsChangeAccountFormOpen: Dispatch<SetStateAction<boolean>>
}

export default function UserInfoEditForm({ setIsChangeAccountFormOpen }: UserInfoEditFormProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)
  const isEmailRegisteredError = useMyPageStore((state) => state.isEmailRegisteredError)
  const isEmailCodeVerified = useMyPageStore((state) => state.isEmailCodeVerified)
  const isPhoneRegisteredError = useMyPageStore((state) => state.isPhoneRegisteredError)
  const isPhoneVerified = useMyPageStore((state) => state.isPhoneVerified)

  const { t } = useTranslation()

  // 수정완료 버튼 활성화 조건 검사
  const canComplete = () => {
    // 이메일 에러가 발생한 경우 (undefined가 아닌 경우), 이메일 인증이 완료되어야 함
    if (isEmailRegisteredError !== undefined && isEmailCodeVerified !== true) {
      return false
    }

    // 전화번호 에러가 발생한 경우 (undefined가 아닌 경우), 전화번호 인증이 완료되어야 함
    if (isPhoneRegisteredError !== undefined && isPhoneVerified !== true) {
      return false
    }

    return true
  }

  useEffect(() => {
    getMyProfileInfo().then((result) => {
      setState({
        ...myPageInfo,
        myPageInfo: result.data,
      })
    })
  }, [])

  useEffect(() => {
    console.log('myPageInfo', myPageInfo)
  }, [myPageInfo])

  return (
    <section className="px-5">
      <section className="flex items-center justify-between">
        <p className="title-md">{t('mypage.userInfo.modifyUserInfo')}</p>
        <Button
          size={'lg'}
          onClick={() => {
            setIsChangeAccountFormOpen(true)
          }}
          type={'outline'}
          customClassName={'h-[46px] px-6'}
        >
          {t('mypage.userInfo.modifyIDAndPW')}
        </Button>
      </section>
      {step === 1 ? (
        <section className="mt-8 flex flex-col gap-y-[32px]">
          <NameField />
          <EmailField />
          <PhoneNumberField />
          <AddressField />
        </section>
      ) : (
        <section className="mt-8 flex flex-col gap-y-[32px]">
          <BirthDateField />
          <NationalityField />
          <VisaField />
          <EducationField />
          <GenderField />
          <TermsOfServiceField />
        </section>
      )}

      {step === 1 ? (
        <Button
          size={'lg'}
          onClick={() => {
            setStep(2)
          }}
          type={'active'}
          customClassName={'w-full mt-[80px] mb-[40px]'}
        >
          {t('mypage.button.next')}
        </Button>
      ) : (
        <div className="flex gap-x-2">
          <Button
            size={'lg'}
            onClick={() => {
              setStep(1)
            }}
            type={'outline'}
            customClassName={'w-full mt-[80px] mb-[40px]'}
          >
            {t('mypage.button.back')}
          </Button>
          <Button
            size={'lg'}
            onClick={async () => {
              setStep(2)
              const result = await patchModifyProfile(myPageInfo)
              if (result.success) {
                setStep(1)
              }
              console.log('수정완료', result)
            }}
            type={canComplete() ? 'active' : 'disabled'}
            disabled={!canComplete()}
            customClassName={'w-full mt-[80px] mb-[40px]'}
          >
            {t('mypage.button.done')}
          </Button>
        </div>
      )}
    </section>
  )
}
