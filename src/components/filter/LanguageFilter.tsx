import Filter from '@/components/common/Filter'
import Input from '@/components/common/Input'
import { getLanguageLabel, LANGUAGE_LIST } from '@/utils/filterList'
import { XIcon } from '@/assets/svgComponents'
import { LanguageType } from '@/types/recruit'
import { useMemo, useState } from 'react'

interface LanguageFilterProps {
  selectedLanguages: LanguageType[] | undefined
  addLanguages: (selectedLanguage: LanguageType) => void
  deleteLanguages: (selectedLanguage: LanguageType) => void
  onClose: () => void
  onApply: () => void
  onReset: () => void
}

export default function LanguageFilter({
  onClose,
  onApply,
  onReset,
  addLanguages,
  deleteLanguages,
  selectedLanguages,
}: LanguageFilterProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLanguages = useMemo(() => {
    if (!searchQuery.trim()) return LANGUAGE_LIST

    return LANGUAGE_LIST.filter((language) => language.label.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery])

  return (
    <Filter onClose={onClose}>
      <Filter.Title onClose={onClose} title={'언어선택'} />
      <Filter.Content>
        <div className="flex flex-col gap-y-4">
          <Input
            value={searchQuery}
            setValue={(e) => setSearchQuery(e.target.value)}
            inputBoxStyle={'default'}
            placeholder="관련 언어를 검색하세요."
          />
          <section className="flex flex-wrap gap-2">
            {filteredLanguages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => addLanguages(language.code)}
                className={`${selectedLanguages?.includes(language.code) ? 'border-main bg-main-light text-main cursor-pointer transition hover:opacity-[80%] hover:duration-75' : 'hover:border-gray3 border-gray2 text-gray5 cursor-pointer transition hover:duration-75'} button rounded-[12px] border px-4 py-3`}
              >
                {language.label}
              </button>
            ))}
          </section>
          <section className="flex gap-x-2 overflow-x-scroll">
            {selectedLanguages?.map((selectedLanguage) => (
              <button
                onClick={() => {
                  deleteLanguages(selectedLanguage)
                }}
                type="button"
                key={selectedLanguage}
                className="border-gray3 bg-gray1 badge-sm text-gray5 flex cursor-pointer items-center rounded-full border px-3 py-2 whitespace-nowrap transition hover:opacity-[80%] hover:duration-75"
              >
                {getLanguageLabel(selectedLanguage)}
                <XIcon width={20} height={20} />
              </button>
            ))}
          </section>
        </div>
      </Filter.Content>
      <Filter.BottomButton onApply={onApply} onReset={onReset} />
    </Filter>
  )
}
