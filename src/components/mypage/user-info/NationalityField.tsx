import Input from '@/components/common/Input'
import { DropboxArrowDownIcon, DropboxArrowUpIcon, SearchIcon } from '@/assets/svgComponents'
import { useEffect, useMemo, useState } from 'react'
import { CountryType } from '@/types/common'
import { nationalityInfoData } from '@/lib/common'
import { useMyPageStore } from '@/store/mypageStore'

export default function NationalityField() {
  const [nationalityInfoList, setNationalityInfoList] = useState<CountryType[]>([])
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)
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
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">국적</h3>
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
            <p className={`${myPageInfo?.nationality ? 'text-black' : 'text-gray4'} button`}>
              {myPageInfo?.nationality ? myPageInfo?.nationality : '국적을 선택해주세요.'}
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
                  if (myPageInfo) {
                    setState({ ...myPageInfo, myPageInfo: { ...myPageInfo, nationality: nationalityInfo.name.common } })
                  }
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
