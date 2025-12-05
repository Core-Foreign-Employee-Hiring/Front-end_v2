import { useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import DropBox from '@/components/common/DropBox'
import { useTranslation } from 'react-i18next'

export default function EducationField() {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const educationContents = [
    'signUp.education.content.highSchoolGraduate',
    'signUp.education.content.universityEnrolled',
    'signUp.education.content.universityGraduateOrExpected',
    'signUp.education.content.graduateSchoolEnrolled',
    'signUp.education.content.graduateSchoolGraduateOrExpected',
  ]

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        {t('signUp.education.label')}
        <span className="text-main">*</span>
      </p>
      <DropBox
        isDropBoxOpen={isDropBoxOpen}
        setIsDropBoxOpen={() => setIsDropBoxOpen(!isDropBoxOpen)}
        selectedValue={employeeSignUp?.education}
        initValue={t('signUp.education.placeholder')}
      >
        <>
          {educationContents.map((education) => {
            return (
              <div
                key={education}
                onClick={() => {
                  setAuthStoreState({
                    employeeSignUp: {
                      ...employeeSignUp,
                      education: t(education),
                    },
                  })
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
