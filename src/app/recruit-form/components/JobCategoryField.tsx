import DropBox from '@/components/common/DropBox'
import { JobCategoryKorType } from '@/types/recruit'
import { convertKorToEnumJobCategory, convertEnumToKorJobCategory, jobCategoryList } from '@/utils/recruit'
import { useState } from 'react'
import { useRecruitStore } from '@/store/recruitStore'

export default function JobCategoryField() {
  const [isDropBoxClicked, setIsDropBoxClicked] = useState<boolean>(false)
  const setState = useRecruitStore((state) => state.setState)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const jobCategories = useRecruitStore((state) => state.recruitPostData.jobCategories) || []

  // 직종 토글 함수 (추가/제거)
  const handleJobCategoryToggle = (content: JobCategoryKorType) => {
    const enumValue = convertKorToEnumJobCategory(content)
    const isSelected = jobCategories.includes(enumValue)

    const updatedJobCategories = isSelected
      ? jobCategories.filter((item) => item !== enumValue) // 제거
      : [...jobCategories, enumValue] // 추가

    setState({
      recruitPostData: {
        ...recruitPostData,
        jobCategories: updatedJobCategories,
      },
    })
  }

  // 선택된 직종들을 한국어로 변환하여 표시
  const getDisplayValue = () => {
    if (!jobCategories || jobCategories.length === 0) {
      return ''
    }

    return jobCategories.map((category) => convertEnumToKorJobCategory(category)).join('/')
  }

  // 선택된 직종인지 확인하는 함수
  const isJobCategorySelected = (content: JobCategoryKorType): boolean => {
    const enumValue = convertKorToEnumJobCategory(content)
    return jobCategories.includes(enumValue)
  }

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        직종<span className="text-main">*</span>
      </p>
      <DropBox
        selectedValue={getDisplayValue()}
        isDropBoxOpen={isDropBoxClicked}
        setIsDropBoxOpen={() => setIsDropBoxClicked(!isDropBoxClicked)}
        initValue={'직종을 선택해주세요.'}
      >
        {jobCategoryList.map((content) => {
          const isSelected = isJobCategorySelected(content)

          return (
            <button
              type={'button'}
              key={content}
              onClick={() => handleJobCategoryToggle(content)}
              className={`body-sm hover:bg-gray2 flex h-[60px] cursor-pointer items-center px-4 transition-colors ${
                isSelected ? 'bg-gray1' : 'bg-white'
              }`}
            >
              {content}
              {isSelected && <span className="text-main ml-auto text-sm">✓</span>}
            </button>
          )
        })}
      </DropBox>
    </div>
  )
}
