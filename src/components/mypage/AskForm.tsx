import AskFormItem from '@/components/mypage/AskFormItem'
import { useEffect, useState } from 'react'
import { getReceivedInquiryList, getSentInquiryList } from '@/lib/archive'
import Pagination from '@/components/common/Pagination'
import { InquiryType } from '@/types/archive'

export default function AskForm() {
  const [type, setType] = useState<'Sent' | 'Received'>('Sent')
  const [sentInquiryList, setSentInquiryList] = useState<undefined | InquiryType[]>()
  const [receivedInquiryList, setReceivedInquiryList] = useState<undefined | InquiryType[]>()
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    if (type === 'Sent') {
      getSentInquiryList(currentPage, 6).then((res) => {
        console.log(res.data?.content)
        setSentInquiryList(res.data?.content)
        if (res.data?.totalPages) {
          setTotalPages(res.data?.totalPages)
        }
      })
    } else if (type === 'Received') {
      getReceivedInquiryList(currentPage, 6).then((res) => {
        console.log(res.data?.content)
        setReceivedInquiryList(res.data?.content)
        if (res.data?.totalPages) {
          setTotalPages(res.data?.totalPages)
        }
      })
    }
  }, [type])

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1) // Pagination은 1부터 시작하지만 API는 0부터 시작
    console.log(`페이지 ${page}로 이동`)
  }

  return (
    <div className="flex flex-col gap-y-[20px] px-5">
      <p className="title-md">문의하기</p>
      <div className="flex gap-x-4">
        <button
          onClick={() => {
            setCurrentPage(0)
            setType('Sent')
          }}
          className="title-sm"
        >
          보낸 문의
        </button>
        <button
          onClick={() => {
            setCurrentPage(0)
            setType('Received')
          }}
          className="title-sm"
        >
          받은 문의
        </button>
      </div>

      {/* 내가 보낸 문의 */}
      {type === 'Sent' ? (
        <section>
          {sentInquiryList?.map((sentInquiry) => {
            return (
              <AskFormItem
                type={'Sent'}
                key={sentInquiry.archiveInquiryId}
                isAnswered={!!sentInquiry.answer}
                {...sentInquiry}
              />
            )
          })}
        </section>
      ) : null}

      {/* 내가 받은 문의 */}
      {type === 'Received' ? (
        <section>
          {receivedInquiryList?.map((receivedInquiry) => {
            return (
              <AskFormItem
                type={'Received'}
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
