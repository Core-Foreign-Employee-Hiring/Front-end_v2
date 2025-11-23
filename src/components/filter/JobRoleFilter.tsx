import Filter from '@/components/common/Filter'
import { getJobRoleList, JOB_CATEGORY_LIST, switchJobRoleCodeToLabel } from '@/utils/filterList'
import { JobCategoryType, JobRoleType } from '@/types/recruit'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CheckIcon, UnCheckIcon, XIcon } from '@/assets/svgComponents'
import Input from '@/components/common/Input'

interface JobRoleFilterProps {
  onClose: () => void
  selectedCategory: JobCategoryType | undefined
  setSelectedJobCategory: Dispatch<SetStateAction<JobCategoryType | undefined>>
  selectedJobRoles: JobRoleType[] | undefined
  deleteJobRoles: (selectedJobRole: JobRoleType) => void
  addJobRoles: (selectedJobRole: JobRoleType) => void
  onApply: () => void
  onReset: () => void
}

export default function JobRoleFilter({
  onClose,
  selectedCategory,
  setSelectedJobCategory,
  selectedJobRoles,
  deleteJobRoles,
  addJobRoles,
  onApply,
  onReset,
}: JobRoleFilterProps) {
  const [jobRoleList, setJobRoleList] = useState<{ code: JobRoleType; label: string }[]>([])

  useEffect(() => {
    const list = getJobRoleList(selectedCategory)
    setJobRoleList(list)
  }, [selectedCategory])

  return (
    <Filter onClose={onClose}>
      <Filter.Title onClose={onClose} title={'직무선택'} />
      <Filter.Content>
        <div className="flex flex-col gap-y-4">
          <Input value={''} inputBoxStyle={'default'} placeholder="원하는 직무를 검색해보세요."></Input>
          <section className="border-gray2 flex h-[500px] gap-x-3 rounded-[12px] border p-3">
            <div className="flex w-full flex-col gap-y-2 overflow-y-scroll">
              {JOB_CATEGORY_LIST.map((jobCategory) => (
                <div
                  onClick={() => setSelectedJobCategory(jobCategory.code)}
                  className={`${jobCategory.code === selectedCategory ? 'border-main bg-main-light text-main rounded-[12px] border' : ''} button text-gray5 flex h-[36px] w-full flex-shrink items-center justify-center py-3 whitespace-nowrap`}
                  key={jobCategory.code}
                >
                  {jobCategory.label}
                </div>
              ))}
            </div>
            <div className="border-gray2 border-r" />
            <div className="flex w-full flex-col gap-y-2 overflow-y-scroll">
              {jobRoleList
                ? jobRoleList.map((jobRole) => (
                    <div
                      onClick={() => {
                        addJobRoles(jobRole.code)
                      }}
                      className="button text-gray5 flex h-[36px] w-full items-center justify-between py-3"
                      key={jobRole.code}
                    >
                      <p>{jobRole.label}</p>
                      {selectedJobRoles?.includes(jobRole.code) ? (
                        <CheckIcon width={20} height={20} />
                      ) : (
                        <UnCheckIcon width={20} height={20} />
                      )}
                    </div>
                  ))
                : null}
            </div>
          </section>
          <section className="flex gap-x-2 overflow-x-scroll">
            {selectedJobRoles?.map((selectedJobRole) => (
              <div
                key={selectedJobRole}
                className="border-gray3 bg-gray1 badge-sm text-gray5 flex items-center rounded-full border px-3 py-2 whitespace-nowrap"
              >
                {switchJobRoleCodeToLabel(selectedJobRole)}
                <XIcon onClick={() => deleteJobRoles(selectedJobRole)} width={20} height={20} />
              </div>
            ))}
          </section>
        </div>
      </Filter.Content>
      <Filter.BottomButton onApply={onApply} onReset={onReset} />
    </Filter>
  )
}
