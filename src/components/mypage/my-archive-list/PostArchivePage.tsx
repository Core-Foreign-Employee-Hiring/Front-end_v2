import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import PostArchiveCard from '@/components/mypage/PostArchiveCard'
import { getPostArchives } from '@/lib/archive'
import { PostArchiveType } from '@/types/archive'
import Pagination from '@/components/common/Pagination'
import Header from '@/components/common/Header'

interface PostArchivePageProps {
  setIsPostArchivePageOpen: Dispatch<SetStateAction<boolean>>
}
export default function PostArchivePage({ setIsPostArchivePageOpen }: PostArchivePageProps) {
  const [postArchiveList, setPostArchiveList] = useState<PostArchiveType[]>()
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    getPostArchives(currentPage, 2).then((res) => {
      console.log('res', res.data)
      setPostArchiveList(res.data?.content)
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
    <div>
      <Header title={'작성한 아카이브'} headerType={'dynamic'} onBack={() => setIsPostArchivePageOpen(false)} />
      <div className="flex flex-col gap-y-5 px-5">
        <div className="flex items-center justify-between">
          <h3 className="title-md">작성한 아카이브</h3>
          <button
            onClick={() => {
              setIsPostArchivePageOpen(false)
            }}
            className="button text-gray5 px-4"
          >
            닫기
          </button>
        </div>
        {postArchiveList?.map((postArchive) => {
          return <PostArchiveCard {...postArchive} key={postArchive.archiveId} />
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
