import Button from '@/components/common/Button'
import { useState } from 'react'
import { useRecruitStore } from '@/store/recruitStore'
import JobRoleFilter from '@/components/filter/JobRoleFilter'
import { JobCategoryType, JobRoleType } from '@/types/recruit'
import { switchJobRoleCodeToLabel } from '@/utils/filterList'
import { XIcon } from '@/assets/svgComponents'

export default function JobRoleField() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const setState = useRecruitStore((state) => state.setState)
  const [selectedJobCategory, setSelectedJobCategory] = useState<JobCategoryType | undefined>(undefined)
  const [selectedJobRoles, setSelectedJobRoles] = useState<JobRoleType[]>()

  const deleteJobRoles = (selectedJobRole: JobRoleType) => {
    setSelectedJobRoles((prev) => prev?.filter((role) => role !== selectedJobRole))
  }

  const addJobRoles = (selectedJobRole: JobRoleType) => {
    setSelectedJobRoles((prev) => {
      const current = prev || []

      // 이미 있으면 추가 안 함
      if (current.includes(selectedJobRole)) return prev

      // 최대 5개까지만 추가
      if (current.length >= 5) return prev

      return [...current, selectedJobRole]
    })
  }

  const onApply = () => {
    setState({ ...recruitPostData, ...recruitPostData, recruitPostData: { jobRoles: selectedJobRoles } })
    onClose()
  }

  const onReset = () => {
    setSelectedJobCategory(undefined)
    setSelectedJobRoles(undefined)
    setState({ ...recruitPostData, ...recruitPostData, recruitPostData: { jobRoles: undefined } })
    onClose()
  }

  const onClose = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <div className="flex flex-col gap-y-3">
      {isFilterOpen && (
        <JobRoleFilter
          onApply={onApply}
          onReset={onReset}
          selectedJobRoles={selectedJobRoles}
          deleteJobRoles={deleteJobRoles}
          addJobRoles={addJobRoles}
          onClose={onClose}
          selectedCategory={selectedJobCategory}
          setSelectedJobCategory={setSelectedJobCategory}
        />
      )}
      <section className="flex w-full justify-between">
        <p className="subtitle-lg">
          직무 <span className="text-main">*</span>
        </p>
        <Button
          type={'outline'}
          onClick={() => {
            setIsFilterOpen(true)
          }}
          size={'sm'}
        >
          직무 선택
        </Button>
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
  )
}
