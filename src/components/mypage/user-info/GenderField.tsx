import Button from '@/components/common/Button'
import { useMyPageStore } from '@/store/mypageStore'
import { useTranslation } from 'react-i18next'

export default function GenderField() {
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">{t('mypage.userInfo.gender.label')}</h3>
      <div className="flex gap-x-2">
        <Button
          onClick={() => {
            if (myPageInfo) {
              setState({
                ...myPageInfo,
                myPageInfo: {
                  ...myPageInfo,
                  gender: myPageInfo?.gender === 'MALE' ? undefined : 'MALE',
                },
              })
            }
          }}
          size={'lg'}
          customClassName={'w-full'}
          type={myPageInfo?.gender === 'MALE' ? 'active' : 'outline'}
        >
          {t('mypage.userInfo.gender.MALE')}
        </Button>
        <Button
          onClick={() => {
            if (myPageInfo) {
              setState({
                myPageInfo: {
                  ...myPageInfo,
                  gender: myPageInfo?.gender === 'FEMALE' ? undefined : 'FEMALE',
                },
              })
            }
          }}
          size={'lg'}
          customClassName={'w-full'}
          type={myPageInfo?.gender === 'FEMALE' ? 'active' : 'outline'}
        >
          {t('mypage.userInfo.gender.FEMALE')}
        </Button>
        <Button
          onClick={() => {
            if (myPageInfo) {
              setState({
                myPageInfo: {
                  ...myPageInfo,
                  gender: myPageInfo?.gender === 'NULL' ? undefined : 'NULL',
                },
              })
            }
          }}
          size={'lg'}
          customClassName={'w-full'}
          type={myPageInfo?.gender === 'NULL' ? 'active' : 'outline'}
        >
          {t('mypage.userInfo.gender.NOGENDER')}
        </Button>
      </div>
    </div>
  )
}
