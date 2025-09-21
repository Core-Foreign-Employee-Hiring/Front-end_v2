'use client'

import Header from '@/components/common/Header'
import { useEffect, useState } from 'react'
import Menu from '@/components/common/Menu'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { GraySearchIcon, PlusIcon } from '@/assets/svgComponents'
import ArchiveCard from '@/components/archive/ArchiveCard'
import Pagination from '@/components/common/Pagination'
import { getArchiveData } from '@/lib/archive'
import { PassArchiveCardDataType } from '@/types/archive'
import ArchiveRegisterForm from '@/components/archive/ArchiveRegisterForm'
import AlarmModal from '@/components/modal/AlarmModal'
import LanguageSelectModal from '@/components/modal/LanguageSelectModal'

const ReviewPage = () => {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [totalElements, setTotalElements] = useState<number>(0)
  const [searchKeyword, setSearchKeyword] = useState('') // 실제 검색에 사용할 키워드
  const [archiveList, setArchiveList] = useState<PassArchiveCardDataType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const [isArchiveRegisterFormOpen, setIsArchiveRegisterFormOpen] = useState(false)
  const [isAlarmModalOpen, setIsAlarmModalOpen] = useState(false)

  //언어 선택 모달창 제어
  const [isLanguageSelectModalOpen, setIsLanguageSelectModalOpen] = useState(false)

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1) // Pagination은 1부터 시작하지만 API는 0부터 시작
    console.log(`페이지 ${page}로 이동`)
  }

  // 검색 핸들러
  const handleSearch = () => {
    setCurrentPage(0) // 검색 시 첫 페이지로 이동
  }

  // Enter 키 검색
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  // 데이터 로드
  useEffect(() => {
    const loadArchiveData = async () => {
      try {
        setIsLoading(true)
        console.log(`페이지 ${currentPage}, 키워드: "${searchKeyword}"로 데이터 요청`)

        const response = await getArchiveData(searchKeyword, currentPage, 6)

        console.log('API 전체 응답:', response)

        if (response && response.data && Array.isArray(response.data.content)) {
          const archiveList = response.data.content
          setArchiveList(archiveList)
          setTotalPages(response.data.totalPages)
          setTotalElements(response.data.totalElements || 0)
        } else {
          console.warn('예상하지 못한 응답 구조:', response)
          setArchiveList([])
          setTotalPages(0)
          setTotalElements(0)
        }
      } catch (error: unknown) {
        console.error('아카이브 데이터 불러오기 실패:', error)
        setArchiveList([])
        setTotalPages(0)
        setTotalElements(0)
      } finally {
        setIsLoading(false)
      }
    }

    loadArchiveData()
  }, [searchKeyword, currentPage]) // searchKeyword와 currentPage 변경 시 실행

  return isArchiveRegisterFormOpen ? (
    <ArchiveRegisterForm setIsArchiveRegisterFormOpen={setIsArchiveRegisterFormOpen} />
  ) : (
    <main>
      {isLanguageSelectModalOpen ? (
        <LanguageSelectModal
          isLanguageSelectModalOpen={isLanguageSelectModalOpen}
          setIsLanguageSelectModalOpen={setIsLanguageSelectModalOpen}
        />
      ) : null}
      {isAlarmModalOpen ? (
        <AlarmModal setIsAlarmModalOpen={setIsAlarmModalOpen} isAlarmModalOpen={isAlarmModalOpen} />
      ) : null}
      <Header
        isLanguageSelectModalOpen={isLanguageSelectModalOpen}
        setIsLanguageSelectModalOpen={setIsLanguageSelectModalOpen}
        setIsAlarmModalOpen={setIsAlarmModalOpen}
        isAlarmModalOpen={isAlarmModalOpen}
        isHomeMenuOpen={isHomeMenuOpen}
        setIsHomeMenuOpen={setIsHomeMenuOpen}
      />

      {isHomeMenuOpen ? (
        <div>
          <div className="h-[100px]" />
          <Menu setIsHomeMenuOpen={setIsHomeMenuOpen} />
        </div>
      ) : (
        <div>
          <div className="h-[112px]" />
          <div className="px-5">
            <section className="flex flex-col gap-y-3 whitespace-nowrap">
              <h1 className="title-lg">합격 아카이브</h1>
              <div className="subtitle-lg flex gap-x-[5px]">
                <p className="text-main">{totalElements.toLocaleString()}</p>
                <p>건</p>
              </div>
              <div className="flex gap-x-3">
                <Input
                  leftIcon={<GraySearchIcon width={24} height={24} />}
                  inputBoxStyle={'default'}
                  placeholder={'궁금한 아카이브를 검색해보세요.'}
                  value={searchKeyword}
                  setValue={(e) => setSearchKeyword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  customClassName={'w-full'}
                />
                <Button
                  onClick={handleSearch}
                  type={'active'}
                  size={'lg'}
                  customClassName={'whitespace-nowrap w-[80px]'}
                >
                  검색
                </Button>
              </div>
            </section>

            {/* 로딩 상태 */}
            {isLoading ? (
              <div className="mt-5 flex h-40 items-center justify-center">
                <p>로딩 중...</p>
              </div>
            ) : (
              <section className="mt-5 grid grid-cols-2 gap-4">
                {archiveList.length > 0 ? (
                  archiveList.map((archive) => <ArchiveCard key={archive.passArchiveId} {...archive} />)
                ) : (
                  <div className="col-span-2 flex h-40 items-center justify-center">
                    <p className="text-gray4">검색 결과가 없습니다.</p>
                  </div>
                )}
              </section>
            )}

            {/* 페이지네이션 - 데이터가 있을 때만 표시 */}
            {totalPages > 0 && (
              <div className="mt-[24px] mb-[40px] w-full">
                <Pagination
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  currentPage={currentPage + 1} // API는 0부터, UI는 1부터
                  showPages={5}
                />
              </div>
            )}
          </div>
          <button
            onClick={() => {
              setIsArchiveRegisterFormOpen(!isArchiveRegisterFormOpen)
            }}
            className={
              'button bg-main fixed right-5 bottom-20 z-10 flex h-[48px] items-center justify-center rounded-full px-4 text-white'
            }
          >
            <PlusIcon width={24} height={24} />
            아카이브 등록하기
          </button>
        </div>
      )}
    </main>
  )
}

export default ReviewPage
