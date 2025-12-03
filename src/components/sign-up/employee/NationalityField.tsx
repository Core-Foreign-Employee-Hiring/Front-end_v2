'use client'

import { useMemo, useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import { DropboxArrowDownIcon, DropboxArrowUpIcon, SearchIcon } from '@/assets/svgComponents'
import Input from '@/components/common/Input'
import { NATIONALITY_LIST } from '@/utils/filterList'
import { useTranslation } from 'react-i18next'

export default function NationalityField() {
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const { t } = useTranslation()

  // 검색어에 따라 필터링된 국적 리스트
  const filteredList = useMemo(() => {
    if (!searchValue) return NATIONALITY_LIST
    return NATIONALITY_LIST.filter((item) => item.label.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue])

  // 현재 선택된 국적의 라벨을 찾는 함수
  const getSelectedLabel = () => {
    if (!employeeSignUp?.nationality) return t('signUp.nationality.placeholder')
    const found = NATIONALITY_LIST.find((item) => item.code === employeeSignUp.nationality)
    return found?.label || employeeSignUp.nationality
  }

  return (
    <div className="flex flex-col gap-y-2">
      <p className="subtitle-lg">
        국적<span className="text-main">*</span>
      </p>
      <div className="relative">
        {isDropBoxOpen ? (
          <Input
            leftIcon={<SearchIcon width={24} height={24} />}
            value={searchValue}
            inputBoxStyle={'default'}
            setValue={(e) => {
              setSearchValue(e.target.value)
            }}
          />
        ) : (
          <section
            onClick={() => setIsDropBoxOpen(true)}
            className={`border-gray2 flex h-[52px] w-full items-center justify-between rounded-[16px] border px-4 py-3`}
          >
            <p className={`${employeeSignUp?.nationality ? 'text-black' : 'text-gray4'} button`}>
              {t(getSelectedLabel())}
            </p>
            {isDropBoxOpen ? (
              <DropboxArrowUpIcon width={20} height={20} />
            ) : (
              <DropboxArrowDownIcon width={20} height={20} />
            )}
          </section>
        )}

        {isDropBoxOpen ? (
          <section className="border-gray2 absolute top-15 z-10 flex max-h-[420px] w-full flex-col overflow-y-scroll rounded-[16px] border bg-white">
            {filteredList.map((nationality) => (
              <div
                key={nationality.code}
                onClick={() => {
                  setAuthStoreState({
                    employeeSignUp: {
                      ...employeeSignUp,
                      nationality: nationality.code,
                    },
                  })
                  setIsDropBoxOpen(false)
                  setSearchValue('')
                }}
                className="hover:bg-gray1 cursor-pointer px-4 py-2"
              >
                {t(nationality.label)}
              </div>
            ))}
          </section>
        ) : null}
      </div>
    </div>
  )
}
