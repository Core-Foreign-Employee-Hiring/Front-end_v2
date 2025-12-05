import Input from '@/components/common/Input'
import { useMyPageStore } from '@/store/mypageStore'
import { useTranslation } from 'react-i18next'

export default function BirthDateField() {
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">{t('mypage.userInfo.birthDay.label')}</h3>
      <Input
        value={myPageInfo?.birthDate ?? ''}
        setValue={(e) => {
          if (myPageInfo) {
            setState({ ...myPageInfo, myPageInfo: { ...myPageInfo, birthDate: e.target.value } })
          }
        }}
        inputBoxStyle={'default'}
        type={'date'}
      />
    </div>
  )
}
