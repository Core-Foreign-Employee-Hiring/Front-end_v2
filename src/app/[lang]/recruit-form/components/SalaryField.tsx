import DropBox from '@/components/common/DropBox'
import Input from '@/components/common/Input'
import { useRecruitStore } from '@/store/recruitStore'
import { SalaryEnumType } from '@/types/recruit'
import { useState } from 'react'

export default function SalaryField() {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const salary = useRecruitStore((state) => state.recruitPostData.salary)
  const salaryType = useRecruitStore((state) => state.recruitPostData.salaryType)
  const directInputSalaryType = useRecruitStore((state) => state.recruitPostData.directInputSalaryType)

  const salaryContents: { kor: string; eng: SalaryEnumType }[] = [
    { kor: '연봉', eng: 'ANNUAL' },
    { kor: '월급', eng: 'MONTHLY' },
    { kor: '주급', eng: 'WEEKLY' },
    { kor: '일급', eng: 'DAILY' },
    { kor: '시급', eng: 'HOURLY' },
    { kor: '기타', eng: 'ETC' },
  ]

  const convertContent = (salaryType: SalaryEnumType | undefined | null) => {
    switch (salaryType) {
      case 'ANNUAL':
        return '연봉'
      case 'MONTHLY':
        return '월급'
      case 'WEEKLY':
        return '주급'
      case 'DAILY':
        return '일급'
      case 'HOURLY':
        return '시급'
      case 'ETC':
        return '기타'
      default:
        return undefined
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-y-[12px]">
        <p className="subtitle-lg">급여</p>
        <div className="flex flex-col gap-y-[20px]">
          <section className="flex flex-col gap-y-2">
            <DropBox
              selectedValue={convertContent(salaryType)}
              setIsDropBoxOpen={() => setIsDropBoxOpen(!isDropBoxOpen)}
              isDropBoxOpen={isDropBoxOpen}
              customClassName={'w-full'}
              initValue={'급여 종류 선택'}
            >
              {salaryContents.map((salaryType) => {
                return (
                  <button
                    type={'button'}
                    key={salaryType.eng}
                    onClick={() => {
                      setState({
                        ...recruitPostData,
                        recruitPostData: { ...recruitPostData, salaryType: salaryType.eng },
                      })
                      setIsDropBoxOpen(false)
                    }}
                    className="hover:bg-gray1 body-sm flex h-[60px] cursor-pointer items-center px-4 transition hover:duration-75"
                  >
                    {salaryType.kor}
                  </button>
                )
              })}
            </DropBox>
            <div className="flex w-full items-center gap-x-3">
              <Input
                type="number"
                value={salary !== undefined ? String(salary) : ''}
                setValue={(e) => {
                  setState({
                    ...recruitPostData,
                    recruitPostData: { ...recruitPostData, salary: parseInt(e.target.value) },
                  })
                }}
                placeholder={'급여 입력'}
                inputBoxStyle={'default'}
                customClassName={'w-full'}
              />
              <p className="subtitle-md text-gray4">원</p>
            </div>
          </section>
          <div className="flex w-full items-center gap-x-3">
            <p className="subtitle-sm text-gray5 whitespace-nowrap">기타사항</p>
            <Input
              value={directInputSalaryType ?? ''}
              setValue={(e) => {
                setState({
                  ...recruitPostData,
                  recruitPostData: { ...recruitPostData, directInputSalaryType: e.target.value },
                })
              }}
              placeholder={'직접입력'}
              inputBoxStyle={'default'}
              customClassName={'w-full'}
            />
          </div>
        </div>
      </div>
      {isDropBoxOpen && <div className="h-[100px]" />}
    </div>
  )
}
