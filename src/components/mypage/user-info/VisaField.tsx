import { useState } from 'react'
import DropBox from '@/components/common/DropBox'
import { useMyPageStore } from '@/store/mypageStore'
import { VISA_LIST } from '@/utils/filterList'
import { useTranslation } from 'react-i18next'

export default function VisaField() {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">{t('mypage.userInfo.visa.label')}</h3>
      <DropBox
        isDropBoxOpen={isDropBoxOpen}
        setIsDropBoxOpen={() => setIsDropBoxOpen(!isDropBoxOpen)}
        selectedValue={myPageInfo?.visa ?? ''}
        initValue={t('mypage.userInfo.visa.placeholder')}
      >
        <>
          {VISA_LIST.map((visa) => {
            return (
              <div
                key={visa.code}
                onClick={() => {
                  if (myPageInfo) {
                    setState({ ...myPageInfo, myPageInfo: { ...myPageInfo, visa: visa.code } })
                  }
                  setIsDropBoxOpen(false)
                }}
                className="border-gray2 body-sm hover:bg-gray1 flex h-[60px] w-full cursor-pointer items-center bg-white px-4"
              >
                {t(visa.i18nKey)}
              </div>
            )
          })}
        </>
      </DropBox>
    </div>
  )
}
