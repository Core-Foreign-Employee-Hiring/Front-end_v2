import Input from '@/components/common/Input'
import { useState } from 'react'
import { useRecruitStore } from '@/store/recruitStore'
import { WorkDaysType } from '@/types/recruit'

export default function WorkDaysField() {
  const [workDaysType, setWorkDaysType] = useState<'list' | 'direct' | undefined>(undefined)

  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const workDayType = useRecruitStore((state) => state.recruitPostData.workDayType)
  const directInputWorkDayType = useRecruitStore((state) => state.recruitPostData.directInputWorkDayType)

  const workDaysListContents: { kor: string; eng: WorkDaysType }[] = [
    { kor: '평일 (월, 화, 수, 목, 금)', eng: 'WEEKDAYS' },
    { kor: '주말 (토, 일)', eng: 'WEEKENDS' },
    { kor: '주7일 (월~일)', eng: 'FULL_WEEK' },
    { kor: '주6일', eng: 'SIX_DAYS' },
  ]

  const workDaysDirectContents: { kor: string; eng: WorkDaysType }[] = [
    { kor: '월요일', eng: 'MONDAY' },
    { kor: '화요일', eng: 'TUESDAY' },
    { kor: '수요일', eng: 'WEDNESDAY' },
    { kor: '목요일', eng: 'THURSDAY' },
    { kor: '금요일', eng: 'FRIDAY' },
    { kor: '토요일', eng: 'SATURDAY' },
    { kor: '일요일', eng: 'SUNDAY' },
  ]

  return (
    <div className="flex flex-col gap-y-[12px]">
      <p className="subtitle-lg">
        근무요일 <span className="text-main">*</span>
      </p>
      <section className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          {workDaysType === 'list' ? (
            <button
              onClick={() => {
                setWorkDaysType(undefined)
              }}
              className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full"
            >
              <div className="h-[10px] w-[10px] rounded-full bg-white" />
            </button>
          ) : (
            <button
              onClick={() => {
                setWorkDaysType('list')
              }}
              className="border-gray3 h-[20px] w-[20px] rounded-full border-[1.6px]"
            />
          )}
          <p className="button text-gray5">목록에서 선택</p>
        </div>
        {workDaysType === 'list' && (
          <div className="flex flex-col gap-y-2">
            {workDaysListContents.map((type) => {
              return (
                <button
                  onClick={() => {
                    setState({
                      recruitPostData: {
                        ...recruitPostData,
                        workDayType: type.eng,
                      },
                    })
                  }}
                  key={type.eng}
                  className={`${workDayType === type.eng ? 'border-main button text-main bg-main-light flex h-[40px] items-center rounded-[12px] border px-4' : 'border-gray2 button text-gray5 flex h-[40px] items-center rounded-[12px] border px-4'}`}
                >
                  {type.kor}
                </button>
              )
            })}
          </div>
        )}
      </section>

      <section className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          {workDaysType === 'direct' ? (
            <button
              onClick={() => {
                setWorkDaysType(undefined)
              }}
              className="bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full"
            >
              <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            </button>
          ) : (
            <button
              onClick={() => {
                setWorkDaysType('direct')
              }}
              className="border-gray3 h-[20px] w-[20px] rounded-full border-[1.6px]"
            />
          )}
          <p className="button text-gray5">직접 선택</p>
        </div>
        {workDaysType === 'direct' && (
          <div className="grid grid-cols-4 flex-col gap-2">
            {workDaysDirectContents.map((type) => {
              return (
                <button
                  onClick={() => {
                    setState({
                      recruitPostData: {
                        ...recruitPostData,
                        workDayType: type.eng,
                      },
                    })
                  }}
                  key={type.eng}
                  className={`${workDayType === type.eng ? 'border-main bg-main-light button text-main flex h-[40px] w-[78px] items-center justify-center rounded-[12px] border' : 'border-gray2 button text-gray5 flex h-[40px] w-[78px] items-center justify-center rounded-[12px] border'}`}
                >
                  {type.kor}
                </button>
              )
            })}
          </div>
        )}
      </section>
      <div className="flex w-full items-center gap-x-3">
        <p className="subtitle-sm text-gray5 whitespace-nowrap">기타사항</p>
        <Input
          value={directInputWorkDayType ?? ''}
          setValue={(e) => {
            setState({
              recruitPostData: {
                ...recruitPostData,
                directInputWorkDayType: e.target.value,
              },
            })
          }}
          placeholder={'직접입력'}
          inputBoxStyle={'default'}
          customClassName={'w-full'}
        />
      </div>
    </div>
  )
}
