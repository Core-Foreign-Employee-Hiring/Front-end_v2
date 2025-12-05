import Input from '@/components/common/Input'
import { DropboxArrowDownIcon, DropboxArrowUpIcon, SearchIcon } from '@/assets/svgComponents'
import { useEffect, useMemo, useState } from 'react'
import { CountryType } from '@/types/common'
import { nationalityInfoData } from '@/lib/common'
import { useMyPageStore } from '@/store/mypageStore'
import { NATIONALITY_LIST } from '@/utils/filterList'
import { useTranslation } from 'react-i18next'

export default function NationalityField() {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const myPageInfo = useMyPageStore((state) => state.myPageInfo)
  const setState = useMyPageStore((state) => state.setState)

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="subtitle-md">{t('mypage.userInfo.nationality.label')}</h3>
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
              {myPageInfo?.nationality ? myPageInfo?.nationality : t('mypage.userInfo.nationality.placeholder')}
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
            {NATIONALITY_LIST.map((nationalityInfo) => (
              <div
                key={nationalityInfo.code}
                onClick={() => {
                  if (myPageInfo) {
                    setState({ ...myPageInfo, myPageInfo: { ...myPageInfo, nationality: nationalityInfo.code } })
                  }
                  setIsDropBoxOpen(false)
                  setSearchValue('')
                }}
                className="hover:bg-gray1 cursor-pointer px-4 py-2"
              >
                {t(nationalityInfo.label)}
              </div>
            ))}
          </section>
        ) : null}
      </div>
    </div>
  )
}
