import Input from '@/components/common/Input'
import DropBox from '@/components/common/DropBox'
import { useRecruitStore } from '@/store/recruitStore'
import { useState } from 'react'

export default function WorkTime() {
  const [isWorkStartTimeDropBoxOpen, setIsWorkStartTimeDropBoxOpen] = useState(false)
  const [isWorkEndTimeDropBoxOpen, setIsWorkEndTimeDropBoxOpen] = useState(false)

  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const workStartTime = useRecruitStore((state) => state.recruitPostData.workStartTime)
  const workEndTime = useRecruitStore((state) => state.recruitPostData.workEndTime)
  const directInputWorkTime = useRecruitStore((state) => state.recruitPostData.directInputWorkTime)

  const timeContents = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
  ]

  return (
    <div className="flex flex-col gap-y-[12px]">
      <p className="subtitle-lg">
        근무시간 <span className="text-main">*</span>
      </p>
      <section className="flex flex-col gap-y-3">
        <div className="flex w-full gap-x-3">
          <DropBox
            selectedValue={workStartTime}
            isDropBoxOpen={isWorkStartTimeDropBoxOpen}
            setIsDropBoxOpen={() => setIsWorkStartTimeDropBoxOpen(!isWorkStartTimeDropBoxOpen)}
            customClassName={'w-full'}
            initValue={'시작시간'}
          >
            {timeContents.map((time) => {
              return (
                <button
                  type={'button'}
                  key={time}
                  onClick={() => {
                    setState({ ...recruitPostData, recruitPostData: { ...recruitPostData, workStartTime: time } })
                    setIsWorkStartTimeDropBoxOpen(false)
                  }}
                  className="body-sm hover:bg-gray1 flex h-[60px] cursor-pointer items-center px-4"
                >
                  {time}
                </button>
              )
            })}
          </DropBox>
          <DropBox
            selectedValue={workEndTime}
            isDropBoxOpen={isWorkEndTimeDropBoxOpen}
            setIsDropBoxOpen={() => setIsWorkEndTimeDropBoxOpen(!isWorkEndTimeDropBoxOpen)}
            customClassName={'w-full'}
            initValue={'종료시간'}
          >
            {timeContents.map((time) => {
              return (
                <button
                  type={'button'}
                  key={time}
                  onClick={() => {
                    setState({ ...recruitPostData, recruitPostData: { ...recruitPostData, workEndTime: time } })
                    setIsWorkEndTimeDropBoxOpen(false)
                  }}
                  className="body-sm hover:bg-gray1 flex h-[60px] cursor-pointer items-center px-4"
                >
                  {time}
                </button>
              )
            })}
          </DropBox>
        </div>
      </section>
      <div className="flex w-full items-center gap-x-3">
        <p className="subtitle-sm text-gray5 whitespace-nowrap">기타사항</p>
        <Input
          value={directInputWorkTime ?? ''}
          placeholder={'직접입력'}
          inputBoxStyle={'default'}
          customClassName={'w-full'}
          setValue={(e) => {
            setState({
              ...recruitPostData,
              recruitPostData: { ...recruitPostData, directInputWorkTime: e.target.value },
            })
          }}
        ></Input>
      </div>
    </div>
  )
}
