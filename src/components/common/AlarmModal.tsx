import Modal from '@/components/common/Modal'
import { Dispatch, SetStateAction } from 'react'
import Button from '@/components/common/Button'
interface AlarmModalProps {
  setIsAlarmModalOpen: Dispatch<SetStateAction<boolean>>
  isAlarmModalOpen: boolean
}

export default function AlarmModal({ setIsAlarmModalOpen, isAlarmModalOpen }: AlarmModalProps) {
  return (
    <div
      onClick={() => {
        setIsAlarmModalOpen(!isAlarmModalOpen)
      }}
      className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-5 flex w-full flex-col gap-y-[24px] rounded-[32px] bg-white p-6"
      >
        <h3 className="title-lg">알람</h3>

        <div className="flex h-[216px] flex-col gap-y-4 overflow-y-scroll">
          <AlarmItem />
          <div className="border-gray2 border-b" />
          <AlarmItem />
        </div>
      </div>
    </div>
  )
}

function AlarmItem() {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="body-md">
        <span className="subtitle-md">황**</span>님이 <span className="subtitle-md">‘제목이 들어가요’</span> 아카이브에
        문의를 보냈어요.
      </p>
      <Button onClick={() => {}} type={'outline'} size={'sm'} customClassName={'w-fit'}>
        답변남기기
      </Button>
    </div>
  )
}
