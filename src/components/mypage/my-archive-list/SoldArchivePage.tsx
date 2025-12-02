import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Header from '@/components/common/Header'
import Pagination from '@/components/common/Pagination'
import { getSoldArchives, getSoldArchivesRevenue } from '@/lib/archive'
import { SoldArchiveType } from '@/types/archive'
import SoldArchiveCard from '@/components/mypage/SoldArchiveCard'
import Button from '@/components/common/Button'
import { GrayRightArrowIcon, IIcon } from '@/assets/svgComponents'
import { getSettlementAccount } from '@/lib/mypage'
import { SettlementAccountType } from '@/types/mypage'

interface SoldArchivePageProps {
  setIsSoldArchivePageOpen: Dispatch<SetStateAction<boolean>>
}
export default function SoldArchivePage({ setIsSoldArchivePageOpen }: SoldArchivePageProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [soldArchiveList, setSoldArchiveList] = useState<SoldArchiveType[]>()
  const [totalRevenue, setTotalRevenue] = useState<string>()
  const [clickInfo, setClickInfo] = useState(false)
  //계좌번호 정보 조회
  const [settlementAccount, setSettlementAccount] = useState<SettlementAccountType>()
  const [isAccountRegistered, setIsAccountRegistered] = useState(false)

  useEffect(() => {
    getSoldArchives(currentPage, 2).then((res) => {
      console.log('res', res.data)
      setSoldArchiveList(res.data?.content)
      if (res.data?.totalPages) {
        setTotalPages(res.data?.totalPages)
      }
    })
  }, [currentPage])

  useEffect(() => {
    getSoldArchivesRevenue().then((res) => {
      setTotalRevenue(res.data)
    })
    getSettlementAccount().then((result) => {
      if (result.success) {
        setSettlementAccount(result.data)
        setIsAccountRegistered(true)
      } else if (result.status === 404) {
        setIsAccountRegistered(false)
      }
    })
  }, [])

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1) // Pagination은 1부터 시작하지만 API는 0부터 시작
    console.log(`페이지 ${page}로 이동`)
  }
  return (
    <div>
      <Header title={'판매한 아카이브'} headerType={'dynamic'} onBack={() => setIsSoldArchivePageOpen(false)} />
      <div className="flex flex-col gap-y-5 px-5 pt-[60px]">
        {/*<section className="flex flex-col gap-y-[12px]">*/}
        {/*  <div className="flex items-center justify-between">*/}
        {/*    {isAccountRegistered ? (*/}
        {/*      <div className="flex gap-x-1">*/}
        {/*        <p className="subtitle-sm text-gray5">{settlementAccount?.accountName}</p>*/}
        {/*        <p className="body-sm text-gray5">*/}
        {/*          {settlementAccount?.bankName} {settlementAccount?.accountNumber}*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    ) : (*/}
        {/*      <p className="body-sm text-gray5">등록한 계좌번호가 없어요.</p>*/}
        {/*    )}*/}
        {/*    <Button onClick={() => {}} type={'outline'} size={'sm'}>*/}
        {/*      {isAccountRegistered ? '계좌번호 수정' : '계좌번호 등록'}*/}
        {/*    </Button>*/}
        {/*  </div>*/}
        {/*  <div className="border-gray2 flex flex-col justify-between rounded-[16px] border px-5 py-4">*/}
        {/*    <div className="flex w-full justify-between">*/}
        {/*      <div className="flex flex-col">*/}
        {/*        <p className="body-sm">총수익</p>*/}
        {/*        <div className="flex items-center gap-x-1">*/}
        {/*          <p className="subtitle-md">{totalRevenue}원</p>*/}
        {/*          <div*/}
        {/*            onClick={() => {*/}
        {/*              setClickInfo(!clickInfo)*/}
        {/*            }}*/}
        {/*            className="border-gray4 flex h-[16px] w-[16px] items-center justify-center rounded-full border"*/}
        {/*          >*/}
        {/*            <IIcon width={2} height={8} />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="button text-gray4 flex items-center">*/}
        {/*        인출하기*/}
        {/*        <div className="flex h-[24px] w-[24px] items-center justify-center">*/}
        {/*          <GrayRightArrowIcon width={5} height={9} />*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    {clickInfo ? (*/}
        {/*      <div className="text-gray4 bg-gray2 badge-sm mt-2 w-fit rounded-[8px] px-2 py-1">*/}
        {/*        인출하기를 누르면 2~3일 내 등록 계좌로 입금돼요.*/}
        {/*      </div>*/}
        {/*    ) : null}*/}
        {/*  </div>*/}
        {/*</section>*/}
        {soldArchiveList?.map((soldArchive) => {
          return <SoldArchiveCard key={soldArchive.archiveId} {...soldArchive} />
        })}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage + 1}
          onPageChange={handlePageChange}
          showPages={5}
        />
      </div>
    </div>
  )
}
