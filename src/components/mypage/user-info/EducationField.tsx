import DropBox from '@/components/common/DropBox'
import { useState } from 'react'
import { useMyPageStore } from '@/store/mypageStore'

export default function EducationField() {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const educationContents = ['고졸', '대학 재학', '대졸 및 예정', '대학원 재학', '대학원졸 및 예정']
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)
  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">학력</h3>
      <DropBox
        isDropBoxOpen={isDropBoxOpen}
        setIsDropBoxOpen={() => setIsDropBoxOpen(!isDropBoxOpen)}
        selectedValue={myPageInfo?.education ?? ''}
        initValue={'학력을 선택해주세요.'}
      >
        <>
          {educationContents.map((education) => {
            return (
              <div
                key={education}
                onClick={() => {
                  if (myPageInfo) {
                    setState({ ...myPageInfo, myPageInfo: { ...myPageInfo, education: education } })
                  }
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
