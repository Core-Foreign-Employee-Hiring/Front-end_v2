import PurchasedArchiveCard from '@/components/mypage/PurchasedArchiveCard'
import Pagination from '@/components/common/Pagination'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getPurchasedArchives } from '@/lib/archive'
import { PurchasedArchiveType } from '@/types/archive'
import Header from '@/components/common/Header'

interface PurchasedArchivePageProps {
  setIsPurchasedArchivePageOpen: Dispatch<SetStateAction<boolean>>
}

export default function PurchasedArchivePage({ setIsPurchasedArchivePageOpen }: PurchasedArchivePageProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [purchasedArchiveList, setPurchasedArchiveList] = useState<PurchasedArchiveType[]>()

  useEffect(() => {
    getPurchasedArchives(currentPage, 3).then((res) => {
      console.log('res', res.data)
      setPurchasedArchiveList(res.data?.content)
      if (res.data?.totalPages) {
        setTotalPages(res.data?.totalPages)
      }
    })
  }, [currentPage])

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1) // Pagination은 1부터 시작하지만 API는 0부터 시작
    console.log(`페이지 ${page}로 이동`)
  }

  return (
    <div className="">
      <Header title={'구매한 아카이브'} headerType={'dynamic'} onBack={() => setIsPurchasedArchivePageOpen(false)} />
      <div className="flex flex-col gap-y-5 px-5 pt-[60px]">
        {purchasedArchiveList?.map((purchasedArchive) => {
          return <PurchasedArchiveCard key={purchasedArchive.passArchiveId} {...purchasedArchive} />
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
