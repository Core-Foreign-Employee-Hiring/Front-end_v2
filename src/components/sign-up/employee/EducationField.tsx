import { useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import DropBox from '@/components/common/DropBox'

export default function EducationField() {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const educationContents = ['고졸', '대학 재학', '대졸 및 예정', '대학원 재학', '대학원졸 및 예정']

  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        학력<span className="text-main">*</span>
      </p>
      <DropBox
        isDropBoxOpen={isDropBoxOpen}
        setIsDropBoxOpen={() => setIsDropBoxOpen(!isDropBoxOpen)}
        selectedValue={employeeSignUp?.education}
        initValue={'학력을 선택해주세요.'}
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
                      education: education,
                    },
                  })
                  setIsDropBoxOpen(false)
                }}
                className="border-gray2 body-sm hover:bg-gray1 flex h-[60px] w-full cursor-pointer items-center bg-white px-4"
              >
                {education}
              </div>
            )
          })}
        </>
      </DropBox>
    </div>
  )
}
