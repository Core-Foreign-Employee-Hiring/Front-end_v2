import { useState } from 'react'
import DropBox from '@/components/common/DropBox'
import { useMyPageStore } from '@/store/mypageStore'

export default function VisaField() {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const visaContents = ['D-2', 'D-4', 'C-3']
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)
  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">비자</h3>
      <DropBox
        isDropBoxOpen={isDropBoxOpen}
        setIsDropBoxOpen={() => setIsDropBoxOpen(!isDropBoxOpen)}
        selectedValue={myPageInfo?.visa ?? ''}
        initValue={'비자를 선택해주세요.'}
      >
        <>
          {visaContents.map((visa) => {
            return (
              <div
                key={visa}
                onClick={() => {
                  if (myPageInfo) {
                    setState({ ...myPageInfo, myPageInfo: { ...myPageInfo, visa: visa } })
                  }
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
