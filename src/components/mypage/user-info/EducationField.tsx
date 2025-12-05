import DropBox from '@/components/common/DropBox'
import { useState } from 'react'
import { useMyPageStore } from '@/store/mypageStore'
import { useTranslation } from 'react-i18next'

export default function EducationField() {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const educationContents = [
    'signUp.education.content.highSchoolGraduate',
    'signUp.education.content.universityEnrolled',
    'signUp.education.content.universityGraduateOrExpected',
    'signUp.education.content.graduateSchoolEnrolled',
    'signUp.education.content.graduateSchoolGraduateOrExpected',
  ]
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">{t('mypage.userInfo.education.label')}</h3>
      <DropBox
        isDropBoxOpen={isDropBoxOpen}
        setIsDropBoxOpen={() => setIsDropBoxOpen(!isDropBoxOpen)}
        selectedValue={myPageInfo?.education ?? ''}
        initValue={t('mypage.userInfo.education.placeholder')}
      >
        <>
          {educationContents.map((education) => {
            return (
              <div
                key={education}
                onClick={() => {
                  if (myPageInfo) {
                    setState({ ...myPageInfo, myPageInfo: { ...myPageInfo, education: t(education) } })
                  }
                  setIsDropBoxOpen(false)
                }}
                className="border-gray2 body-sm hover:bg-gray1 flex h-[60px] w-full cursor-pointer items-center bg-white px-4"
              >
                {t(education)}
              </div>
            )
          })}
        </>
      </DropBox>
    </div>
  )
}
