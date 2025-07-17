import Input from '@/components/common/Input'
import { useRecruitStore } from '@/store/recruitStore'

export default function RecruitPeriodField() {
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const recruitStartDate = useRecruitStore((state) => state.recruitPostData.recruitStartDate)
  const recruitEndDate = useRecruitStore((state) => state.recruitPostData.recruitEndDate)

  return (
    <div className="flex flex-col gap-y-[12px]">
      <p className="subtitle-lg">
        모집기간 <span className="text-main">*</span>
      </p>
      <div className="flex items-center gap-x-3">
        <Input
          value={recruitStartDate ?? ''}
          setValue={(e) =>
            setState({
              recruitPostData: {
                ...recruitPostData,
                recruitStartDate: e.target.value,
              },
            })
          }
          customClassName={'w-full'}
          inputBoxStyle={'default'}
          onClick={() => {}}
          placeholder={'모집 시작일'}
          type={'date'}
        />
        <p className="body-md text-gray4">~</p>
        <Input
          value={recruitEndDate ?? ''}
          setValue={(e) =>
            setState({
              recruitPostData: {
                ...recruitPostData,
                recruitEndDate: e.target.value,
              },
            })
          }
          customClassName={'w-full'}
          inputBoxStyle={'default'}
          onClick={() => {}}
          placeholder={'모집 종료일'}
          type={'date'}
        />
      </div>
    </div>
  )
}
