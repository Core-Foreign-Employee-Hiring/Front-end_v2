import DropBox from '@/components/common/DropBox'
import { useState } from 'react'
import { useAuthStore } from '@/store/authStore'

export default function VisaField() {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const visaContents = ['D-2', 'D-4', 'C-3']
  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        비자<span className="text-main">*</span>
      </p>
      <DropBox
        isDropBoxOpen={isDropBoxOpen}
        setIsDropBoxOpen={() => setIsDropBoxOpen(!isDropBoxOpen)}
        selectedValue={employeeSignUp?.visa}
        initValue={'비자를 선택해주세요.'}
      >
        <>
          {visaContents.map((visa) => {
            return (
              <div
                key={visa}
                onClick={() => {
                  setAuthStoreState({
                    employeeSignUp: {
                      ...employeeSignUp,
                      visa: visa,
                    },
                  })
                  setIsDropBoxOpen(false)
                }}
                className="border-gray2 body-sm hover:bg-gray1 flex h-[60px] w-full cursor-pointer items-center bg-white px-4"
              >
                {visa}
              </div>
            )
          })}
        </>
      </DropBox>
    </div>
  )
}
