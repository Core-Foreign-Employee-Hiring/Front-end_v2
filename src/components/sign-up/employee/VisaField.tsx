'use client'

import { useMemo, useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import { VISA_LIST } from '@/utils/filterList'
import { SearchIcon, DropboxArrowDownIcon, DropboxArrowUpIcon } from '@/assets/svgComponents'
import Input from '@/components/common/Input'
import { useTranslation } from 'react-i18next'

export default function VisaField() {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)

  const { t } = useTranslation()

  // 검색어에 따라 필터링된 비자 리스트
  const filteredList = useMemo(() => {
    if (!searchValue) return VISA_LIST
    return VISA_LIST.filter((visa) => visa.i18nKey.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue])

  // 현재 선택된 비자의 라벨을 찾는 함수
  const getSelectedLabel = () => {
    if (!employeeSignUp?.visa) return t('signUp.visa.placeholder')
    const found = VISA_LIST.find((visa) => visa.code === employeeSignUp.visa)
    return found?.i18nKey || employeeSignUp.visa
  }

  const handleSelectVisa = (visaCode: string) => {
    setAuthStoreState({
      employeeSignUp: {
        ...employeeSignUp,
        visa: visaCode,
      },
    })
    setIsDropBoxOpen(false)
    setSearchValue('')
  }

  // Input 컨테이너 클릭 시 드롭박스 토글
  const handleInputContainerClick = () => {
    setIsDropBoxOpen(!isDropBoxOpen)
  }

  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        {t('signUp.visa.label')}
        <span className="text-main">*</span>
      </p>

      <div onClick={handleInputContainerClick} className="relative">
        {isDropBoxOpen ? (
          // 드롭박스가 열렸을 때: 검색 입력창
          <Input
            leftIcon={<SearchIcon width={24} height={24} />}
            value={searchValue}
            inputBoxStyle={'default'}
            placeholder={t('signUp.visa.searchVisaPlaceholder')}
            setValue={(e) => {
              setSearchValue(e.target.value)
            }}
          />
        ) : (
          // 드롭박스가 닫혀있을 때: 선택된 값 표시
          <section
            onClick={() => setIsDropBoxOpen(true)}
            className="border-gray2 hover:bg-gray1 flex h-[52px] w-full cursor-pointer items-center justify-between rounded-[16px] border px-4 py-3"
          >
            <p className={`${employeeSignUp?.visa ? 'text-black' : 'text-gray4'} button`}>{t(getSelectedLabel())}</p>
            <DropboxArrowDownIcon width={20} height={20} />
          </section>
        )}

        {/* 드롭다운 리스트 */}
        {isDropBoxOpen && (
          <section className="border-gray2 absolute top-14 z-10 flex max-h-[420px] w-full flex-col overflow-y-auto rounded-[16px] border bg-white shadow-md">
            {filteredList.length > 0 ? (
              filteredList.map((visa) => (
                <div
                  key={visa.code}
                  onClick={() => handleSelectVisa(visa.code)}
                  className="border-gray2 body-sm hover:bg-gray1 flex w-full cursor-pointer items-center bg-white px-4 py-2 transition-colors"
                >
                  {t(visa.i18nKey)}
                </div>
              ))
            ) : (
              <div className="text-gray4 flex h-[60px] items-center justify-center px-4">
                {t('signUp.visa.noSearchResultMessage')}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  )
}
