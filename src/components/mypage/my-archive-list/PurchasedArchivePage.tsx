import PurchasedArchiveCard from '@/components/mypage/PurchasedArchiveCard'
import Pagination from '@/components/common/Pagination'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getPurchasedArchives } from '@/lib/archive'
import { PurchasedArchiveType } from '@/types/archive'

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
  }, [])

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1) // Pagination은 1부터 시작하지만 API는 0부터 시작
    console.log(`페이지 ${page}로 이동`)
  }

  return (
    <div className="flex flex-col gap-y-5 px-5">
      <div className="flex justify-between">
        <h2 className="title-md">구매한 아카이브</h2>
        <button
          onClick={() => {
            setIsPurchasedArchivePageOpen(false)
          }}
          className="button text-gray5 px-4 py-3"
        >
          닫기
        </button>
      </div>

      {purchasedArchiveList?.map((purchasedArchive) => {
        return <PurchasedArchiveCard key={purchasedArchive.archiveReviewId} {...purchasedArchive} />
      })}

      <Pagination totalPages={totalPages} currentPage={currentPage + 1} onPageChange={handlePageChange} showPages={5} />
    </div>
  )
}
