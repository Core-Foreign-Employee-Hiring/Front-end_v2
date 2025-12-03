'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/authStore'
import { CheckIcon, UnCheckIcon } from '@/assets/svgComponents'
import { useTranslation } from 'react-i18next'

export default function TermsOfServiceField() {
  const allOptions = useAuthStore((state) => state.allOptions)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)

  const setState = useAuthStore((state) => state.setState)
  const termsOfServiceAgreement = useAuthStore((state) => state.employeeSignUp?.termsOfServiceAgreement)
  const personalInfoAgreement = useAuthStore((state) => state.employeeSignUp?.personalInfoAgreement)
  const over15 = useAuthStore((state) => state.employeeSignUp?.over15)
  const adInfoAgreementSmsMms = useAuthStore((state) => state.employeeSignUp?.adInfoAgreementSmsMms)
  const adInfoAgreementEmail = useAuthStore((state) => state.employeeSignUp?.adInfoAgreementEmail)

  const { t } = useTranslation()

  const termsOfUseContents = [
    {
      content: t('signUp.terms.termsOfServiceAgreement'),
      // component: TermsOfService,
      state: termsOfServiceAgreement,
      key: 'termsOfServiceAgreement',
    },
    {
      content: t('signUp.terms.personalInfoAgreement'),
      // component: PersonalInformation,
      state: personalInfoAgreement,
      key: 'personalInfoAgreement',
    },
    {
      content: t('signUp.terms.over15'),
      // component: MarketingInformation,
      state: over15,
      key: 'over15',
    },
    {
      content: t('signUp.terms.adInfoAgreementSmsMms'),
      // component: MarketingInformation,
      state: adInfoAgreementSmsMms,
      key: 'adInfoAgreementSmsMms',
    },
    {
      content: t('signUp.terms.adInfoAgreementEmail'),
      // component: MarketingInformation,
      state: adInfoAgreementEmail,
      key: 'adInfoAgreementEmail',
    },
  ]

  /**
   * 개별 상태가 하나라도 false이면 allOptions를 false로 설정
   */
  useEffect(() => {
    if (termsOfServiceAgreement && personalInfoAgreement && over15 && adInfoAgreementSmsMms && adInfoAgreementEmail) {
      setState({ allOptions: true }) // 모두 true일 경우 allOptions도 true
    } else {
      setState({ allOptions: false }) // 하나라도 false면 allOptions는 false
    }
  }, [termsOfServiceAgreement, personalInfoAgreement, over15, adInfoAgreementSmsMms, adInfoAgreementEmail])

  const handleAllOptionsClick = () => {
    const newAllOptions = !allOptions
    setState({
      employeeSignUp: {
        ...employeeSignUp,
        termsOfServiceAgreement: newAllOptions,
        personalInfoAgreement: newAllOptions,
        over15: newAllOptions,
        adInfoAgreementSmsMms: newAllOptions,
        adInfoAgreementEmail: newAllOptions,
      },
    })
  }

  const handleIndividualOptionClick = (key: string, currentState: boolean | undefined) => {
    setState({
      employeeSignUp: {
        ...employeeSignUp,
        [key]: !currentState,
      },
    })
  }

  return (
    <div className={'flex flex-col gap-y-3'}>
      <div
        onClick={() => {
          handleAllOptionsClick()
        }}
        className={'subtitle-md text-gray5 flex items-center gap-x-2'}
      >
        {allOptions ? <CheckIcon width={24} height={24} /> : <UnCheckIcon width={24} height={24} />}
        {t('signUp.terms.allOptions')}
      </div>
      <div className="border-gray2 w-full border-b" />
      {termsOfUseContents.map((termsOfUseContent) => {
        return (
          <div
            key={termsOfUseContent.content}
            onClick={() => {
              handleIndividualOptionClick(termsOfUseContent.key, termsOfUseContent.state)
            }}
            className={'subtitle-md text-gray5 flex items-center gap-x-2'}
          >
            {termsOfUseContent.state ? <CheckIcon width={24} height={24} /> : <UnCheckIcon width={24} height={24} />}
            {termsOfUseContent.content}
          </div>
        )
      })}
    </div>
  )
}
