import { nationalityInfoData } from '@/lib/common'
import { useEffect, useMemo, useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import { CountryType } from '@/types/common'
import { DropboxArrowDownIcon, DropboxArrowUpIcon, SearchIcon } from '@/assets/svgComponents'
import Input from '@/components/common/Input'

export default function NationalityField() {
  const [nationalityInfoList, setNationalityInfoList] = useState<CountryType[]>([])
  const employeeSignUp = useAuthStore((state) => state.employeeSignUp)
  const setAuthStoreState = useAuthStore((state) => state.setState)
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  {
    /* 국적 데아터 가져오기 */
  }
  useEffect(() => {
    nationalityInfoData().then((r) => {
      if (r) {
        console.log('r', r)
        setNationalityInfoList(r)
      }
    })
  }, [])

  const filteredList = useMemo(() => {
    if (!searchValue) return nationalityInfoList
    return nationalityInfoList.filter((item) => item.name.common.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue, nationalityInfoList])

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
            onClick={() => setIsDropBoxOpen(!isDropBoxOpen)}
            className={`border-gray2 flex h-[52px] w-full items-center justify-between rounded-[16px] border px-4 py-3`}
          >
            <p className={`${employeeSignUp?.nationality ? 'text-black' : 'text-gray4'} button`}>
              {employeeSignUp?.nationality ? employeeSignUp?.nationality : '국적을 선택해주세요.'}
            </p>
            {isDropBoxOpen ? (
              <DropboxArrowUpIcon width={20} height={20} />
            ) : (
              <DropboxArrowDownIcon width={20} height={20} />
            )}
          </section>
        )}
        {isDropBoxOpen ? (
          <section className="border-gray2 h absolute top-15 z-10 flex max-h-[420px] w-full flex-col overflow-y-scroll rounded-[16px] border bg-white">
            {filteredList.map((nationalityInfo) => (
              <div
                key={nationalityInfo.cca2}
                onClick={() => {
                  setAuthStoreState({
                    employeeSignUp: {
                      ...employeeSignUp,
                      nationality: nationalityInfo.name.common,
                    },
                  })
                  setIsDropBoxOpen(false)
                  setSearchValue('')
                }}
                className="hover:bg-gray1 cursor-pointer px-4 py-2"
              >
                {nationalityInfo.name.common}
              </div>
            ))}
          </section>
        ) : null}
      </div>
    </div>
  )
}
