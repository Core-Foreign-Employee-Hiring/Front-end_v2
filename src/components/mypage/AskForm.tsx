import AskFormItem from '@/components/mypage/AskFormItem'
import { useEffect, useState } from 'react'
import { getReceivedInquiryList, getSentInquiryList } from '@/lib/archive'
import Pagination from '@/components/common/Pagination'
import { InquiryType } from '@/types/archive'
import DropBox from '@/components/common/DropBox'

export default function AskForm() {
  const [type, setType] = useState<'내가 보낸 문의' | '내가 받은 문의'>('내가 보낸 문의')
  const [sentInquiryList, setSentInquiryList] = useState<undefined | InquiryType[]>()
  const [receivedInquiryList, setReceivedInquiryList] = useState<undefined | InquiryType[]>()
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState<number>(0)

  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false)

  useEffect(() => {
    if (type === '내가 보낸 문의') {
      getSentInquiryList(currentPage, 6).then((res) => {
        console.log(res.data?.content)
        setSentInquiryList(res.data?.content)
        if (res.data?.totalPages) {
          setTotalPages(res.data?.totalPages)
        }
      })
    } else if (type === '내가 받은 문의') {
      getReceivedInquiryList(currentPage, 6).then((res) => {
        console.log(res.data?.content)
        setReceivedInquiryList(res.data?.content)
        if (res.data?.totalPages) {
          setTotalPages(res.data?.totalPages)
        }
      })
    }
  }, [type, currentPage])

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1) // Pagination은 1부터 시작하지만 API는 0부터 시작
    console.log(`페이지 ${page}로 이동`)
  }

  return (
    <div className="flex flex-col gap-y-[20px] px-5 pb-[45px]">
      <p className="title-md">문의하기</p>
      <DropBox
        customClassName={'w-fit'}
        initValue={'내가 보낸 문의'}
        selectedValue={type}
        isDropBoxOpen={isDropBoxOpen}
        setIsDropBoxOpen={() => setIsDropBoxOpen(!isDropBoxOpen)}
      >
        <div className="flex flex-col">
          <button
            onClick={() => {
              setType('내가 보낸 문의')
              setIsDropBoxOpen(!isDropBoxOpen)
            }}
            className="subtitle-sm text-gray5 border-gray2 h-[36px] border-b"
          >
            내가 보낸 문의
          </button>
          <button
            onClick={() => {
              setType('내가 받은 문의')
              setIsDropBoxOpen(!isDropBoxOpen)
            }}
            className="subtitle-sm text-gray5 h-[36px]"
          >
            내가 받은 문의
          </button>
        </div>
      </DropBox>

      {/* 내가 보낸 문의 */}
      {type === '내가 보낸 문의' ? (
        <section>
          {sentInquiryList?.map((sentInquiry) => {
            return (
              <AskFormItem
                type={'내가 보낸 문의'}
                key={sentInquiry.archiveInquiryId}
                isAnswered={!!sentInquiry.answer}
                {...sentInquiry}
              />
            )
          })}
        </section>
      ) : null}

      {/* 내가 받은 문의 */}
      {type === '내가 받은 문의' ? (
        <section>
          {receivedInquiryList?.map((receivedInquiry) => {
            return (
              <AskFormItem
                type={'내가 받은 문의'}
                key={receivedInquiry.archiveInquiryId}
                isAnswered={!!receivedInquiry.answer}
                {...receivedInquiry}
              />
            )
          })}
        </section>
      ) : null}

      <Pagination totalPages={totalPages} currentPage={currentPage + 1} onPageChange={handlePageChange} showPages={5} />
    </div>
  )
}
