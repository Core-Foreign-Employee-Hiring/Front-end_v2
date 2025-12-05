import { CheckIcon, UnCheckIcon } from '@/assets/svgComponents'
import { useMyPageStore } from '@/store/mypageStore'
import { useTranslation } from 'react-i18next'

export default function TermsOfServiceField() {
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)

  const setState = useMyPageStore((state) => state.setState)
  const adInfoAgreementSmsMms = useMyPageStore((state) => state.myPageInfo?.adInfoAgreementSmsMms)
  const adInfoAgreementEmail = useMyPageStore((state) => state.myPageInfo?.adInfoAgreementEmail)

  const { t } = useTranslation()

  const termsOfUseContents = [
    {
      content: t('mypage.userInfo.terms.adInfoAgreementSmsMms'),
      // component: MarketingInformation,
      state: adInfoAgreementSmsMms,
      key: 'adInfoAgreementSmsMms',
    },
    {
      content: t('mypage.userInfo.terms.adInfoAgreementEmail'),
      // component: MarketingInformation,
      state: adInfoAgreementEmail,
      key: 'adInfoAgreementEmail',
    },
  ]

  const handleIndividualOptionClick = (key: string, currentState: boolean | undefined) => {
    if (myPageInfo) {
      setState({
        myPageInfo: {
          ...myPageInfo,
          [key]: !currentState,
        },
      })
    }
  }

  return (
    <div className={'flex flex-col gap-y-3'}>
      <h3 className="subtitle-md">{t('mypage.userInfo.terms.label')}</h3>
      <div className="w-full" />
      {termsOfUseContents.map((termsOfUseContent) => {
        return (
          <div
            key={termsOfUseContent.content}
            onClick={() => {
              handleIndividualOptionClick(termsOfUseContent.key, termsOfUseContent.state)
            }}
            className={'bg-gray1 body-md text-gray5 flex h-[60px] items-center gap-x-2 rounded-[16px] px-4'}
          >
            {termsOfUseContent.state ? <CheckIcon width={24} height={24} /> : <UnCheckIcon width={24} height={24} />}
            {termsOfUseContent.content}
          </div>
        )
      })}
    </div>
  )
}
