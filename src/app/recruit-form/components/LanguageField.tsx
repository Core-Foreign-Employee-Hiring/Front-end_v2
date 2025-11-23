import Button from '@/components/common/Button'
import { XIcon } from '@/assets/svgComponents'
import { useState } from 'react'
import { useRecruitStore } from '@/store/recruitStore'
import { LanguageType } from '@/types/recruit'
import LanguageFilter from '@/components/filter/LanguageFilter'
import { getLanguageLabel } from '@/utils/filterList'

export default function LanguageField() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const setState = useRecruitStore((state) => state.setState)
  const [selectedLanguages, setSelectedLanguages] = useState<LanguageType[] | undefined>(undefined)

  const deleteLanguages = (selectedLanguage: LanguageType) => {
    setSelectedLanguages((prev) => prev?.filter((language) => language !== selectedLanguage))
  }

  const addLanguages = (selectedLanguage: LanguageType) => {
    setSelectedLanguages((prev) => {
      const current = prev || []

      if (current.includes(selectedLanguage)) return prev

      if (current.length >= 5) return prev

      return [...current, selectedLanguage]
    })
  }

  const onApply = () => {
    setState({
      ...recruitPostData,
      recruitPostData: {
        ...recruitPostData,
        languageTypes: selectedLanguages,
      },
    })
    onClose()
  }

  const onReset = () => {
    setSelectedLanguages(undefined)
    setState({
      ...recruitPostData,
      recruitPostData: {
        ...recruitPostData,
        languageTypes: undefined,
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
        <LanguageFilter
          addLanguages={addLanguages}
          deleteLanguages={deleteLanguages}
          selectedLanguages={selectedLanguages}
          onApply={onApply}
          onReset={onReset}
          onClose={onClose}
        />
      )}
      <section className="flex w-full items-center justify-between">
        <p className="subtitle-lg">
          관련 언어 <span className="text-main">*</span>
        </p>
        <Button
          type={'outline'}
          onClick={() => {
            setIsFilterOpen(true)
          }}
          size={'sm'}
        >
          언어 선택
        </Button>
      </section>
      <section className="flex gap-x-2 overflow-x-scroll">
        {recruitPostData.languageTypes?.map((selectedLanguage) => (
          <div
            key={selectedLanguage}
            className="border-gray3 bg-gray1 badge-sm text-gray5 flex items-center rounded-full border px-3 py-2 whitespace-nowrap"
          >
            {getLanguageLabel(selectedLanguage)}
            <XIcon
              onClick={() => {
                deleteLanguages(selectedLanguage)
              }}
              width={20}
              height={20}
            />
          </div>
        ))}
      </section>
    </div>
  )
}
