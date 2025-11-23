import Button from '@/components/common/Button'
import { useState } from 'react'
import { useRecruitStore } from '@/store/recruitStore'
import JobRoleFilter from '@/components/filter/JobRoleFilter'
import { JobCategoryType, JobRoleType } from '@/types/recruit'
import { getJobRoleLabel, getSelectedCategoriesFromRoles, SUB_CATEGORY_MAP } from '@/utils/filterList'
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

      if (current.includes(selectedJobRole)) {
        return current.filter((role) => role !== selectedJobRole)
      }

      if (current.length >= 5) return prev

      return [...current, selectedJobRole]
    })
  }

  const onApply = () => {
    setState({
      ...recruitPostData,
      recruitPostData: {
        ...recruitPostData,
        jobRoles: selectedJobRoles,
        jobCategories: getSelectedCategoriesFromRoles(selectedJobRoles),
      },
    })
    onClose()
  }

  const onReset = () => {
    setSelectedJobCategory(undefined)
    setSelectedJobRoles(undefined)
    setState({
      ...recruitPostData,
      recruitPostData: {
        ...recruitPostData,
        jobRoles: undefined,
      },
    })
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
      <section className="flex w-full items-center justify-between">
        <p className="subtitle-lg">
          직무 <span className="text-main">*</span>
        </p>
        <Button
          buttonType="button"
          type={'outline'}
          onClick={() => {
            setIsFilterOpen(true)
          }}
          size={'sm'}
        >
          {selectedJobRoles && selectedJobRoles.length > 0 ? '직무 수정' : '직무 선택'}
        </Button>
      </section>
      <section className="flex gap-x-2 overflow-x-scroll">
        {recruitPostData.jobRoles?.map((selectedJobRole) => (
          <button
            type={'button'}
            key={selectedJobRole}
            className="border-gray3 bg-gray1 badge-sm text-gray5 flex items-center rounded-full border px-3 py-2 whitespace-nowrap"
          >
            {getJobRoleLabel(selectedJobRole)}
            <XIcon onClick={() => deleteJobRoles(selectedJobRole)} width={20} height={20} />
          </button>
        ))}
      </section>
    </div>
  )
}
