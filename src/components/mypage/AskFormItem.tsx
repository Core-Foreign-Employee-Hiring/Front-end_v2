import { QnaArrowDownIcon, QnaArrowUpIcon } from '@/assets/svgComponents'
import { InquiryType } from '@/types/archive'
import { useState } from 'react'
import { useModalStore } from '@/store/modalStore'

interface AskFormItemProps extends InquiryType {
  type: '내가 보낸 문의' | '내가 받은 문의'
  isAnswered: boolean
}
export default function AskFormItem({ type, isAnswered, answer, archiveInquiryId, inquiry, title }: AskFormItemProps) {
  const [isQnADropDownOpen, setIsQnADropDownOpen] = useState(false)
  const setState = useModalStore((state) => state.setState)

  return isAnswered ? (
    <div className="flex flex-col">
      <section
        onClick={() => {
          setIsQnADropDownOpen(!isQnADropDownOpen)
        }}
        className={'border-gray2 flex flex-col gap-y-2 border-b px-3 py-4'}
      >
        <p className="subtitle-lg">{title}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="bg-main subtitle-md flex h-[36px] w-[36px] items-center justify-center rounded-full text-white">
              Q
            </div>
            <p className="body-md">{inquiry}</p>
          </div>
          {isQnADropDownOpen ? <QnaArrowUpIcon width={18} height={24} /> : <QnaArrowDownIcon width={18} height={24} />}
        </div>
      </section>
      {isQnADropDownOpen && (
        <section className="bg-gray1 border-gray2 border-b px-3 py-4">
          <div className="flex items-center gap-x-2">
            <div className="border-main subtitle-md text-main flex h-[36px] w-[36px] items-center justify-center rounded-full border bg-white">
              A
            </div>
            <p className="body-md text-gray5">{answer}</p>
          </div>
        </section>
      )}
    </div>
  ) : (
    <div className="border-gray2 flex flex-col border-b">
      <section className={'flex flex-col gap-y-2 px-3 py-4'}>
        <p className="subtitle-lg">{title}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="bg-main subtitle-md flex h-[36px] w-[36px] items-center justify-center rounded-full text-white">
              Q
            </div>
            <p className="body-md text-gray5">{inquiry}</p>
          </div>
          {type === '내가 받은 문의' && (
            <button
              onClick={() => {
                setState({ isAnswerModalOpen: true, selectedInquiryId: archiveInquiryId })
              }}
              className="small border-gray2 text-gray5 rounded-[8px] border px-3 py-2"
            >
              답변남기기
            </button>
          )}
        </div>
      </section>
    </div>
  )
}
