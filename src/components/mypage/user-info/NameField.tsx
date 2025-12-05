import Input from '@/components/common/Input'
import { useMyPageStore } from '@/store/mypageStore'
import { useTranslation } from 'react-i18next'

export default function NameField() {
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">{t('mypage.userInfo.name.label')}</h3>
      <Input
        inputBoxStyle={'default'}
        type={'text'}
        value={myPageInfo?.name ?? ''}
        setValue={(e) => {
          if (myPageInfo !== undefined) {
            setState({
              ...myPageInfo,
              myPageInfo: { ...myPageInfo, name: e.target.value },
            })
          }
        }}
      />
    </div>
  )
}
