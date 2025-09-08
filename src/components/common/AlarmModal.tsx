import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Button from '@/components/common/Button'
import { getAlarmArchiveInquiry, patchAlarmArchiveInquiry } from '@/lib/alarm'
import { ArchiveInquiryNotificationType } from '@/types/alarm'
import Modal from '@/components/common/Modal'
import { StarIcon } from '@/assets/svgComponents'
interface AlarmModalProps {
  setIsAlarmModalOpen: Dispatch<SetStateAction<boolean>>
  isAlarmModalOpen: boolean
}

export default function AlarmModal({ setIsAlarmModalOpen, isAlarmModalOpen }: AlarmModalProps) {
  const [alarmList, setAlarmList] = useState<ArchiveInquiryNotificationType[] | undefined>([])
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false)
  const [selectedInquiry, setSelectedInquiry] = useState<{
    selectedArchiveInquiryId: number
    inquiryType: 'ANSWER' | 'INQUIRY'
  }>()
  const [answerContent, setAnswerContent] = useState<string>('')

  useEffect(() => {
    getAlarmArchiveInquiry().then((response) => {
      if (response.success) {
        setAlarmList(response.data)
      }
    })
  }, [])

  return isInquiryModalOpen ? (
    <Modal
      buttonType={'active'}
      onClick={() => {}}
      buttonContent={selectedInquiry?.inquiryType === 'ANSWER' ? undefined : '답변 전송하기'}
      onClose={() => {
        setIsInquiryModalOpen(!isInquiryModalOpen)
      }}
      title={selectedInquiry?.inquiryType === 'ANSWER' ? '답변 보기' : '답변 남기기'}
    >
      {selectedInquiry?.inquiryType === 'ANSWER' ? (
        <div className="flex flex-col gap-y-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-1">
              <StarIcon width={16} height={15} />
              <div className="badge-md">5.0</div>
            </div>
            <p className="small text-gray4">4분 전 작성</p>
          </div>
          <p className="body-md">sdf</p>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          <section className="bg-gray1 flex flex-col gap-y-1 rounded-[20px] p-5">
            <div className="flex items-center gap-x-3">
              <div className="bg-gray2 h-[48px] w-[48px] rounded-full" />
              <div className="subtitle-md">유저명</div>
            </div>
            <div className="flex justify-between">
              <p className="title-md">title</p>
              <p className="subtitle-lg">129,550원</p>
            </div>
            <div className="body-md text-gray5">설명한줄</div>
          </section>
          <section className="border-gray2 rounded-[20px] border p-5">
            <div className="border-gray2 flex flex-col gap-y-1 border-b pb-3">
              <p className="title-md">문의내용</p>
              <p className="body-md text-gray5">문의문의문의문의 이문의</p>
            </div>
            <textarea
              value={answerContent}
              onChange={(e) => {
                setAnswerContent(e.target.value)
              }}
              className="h-[100px] w-full pt-3 outline-none"
              placeholder="답변을 입력해주세요."
            />
          </section>
        </div>
      )}
    </Modal>
  ) : (
    <div
      onClick={() => {
        setIsAlarmModalOpen(!isAlarmModalOpen)
      }}
      className="fixed inset-0 z-60 flex items-center justify-center bg-[rgba(0,0,0,0.3)]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-5 flex w-full flex-col gap-y-[24px] rounded-[32px] bg-white p-6"
      >
        <h3 className="title-lg">알람</h3>

        <div className="flex h-[216px] flex-col gap-y-4 overflow-y-scroll">
          {alarmList?.map((alarm, index) => {
            return (
              <div key={alarm.archiveInquiryNotificationId}>
                <AlarmItem
                  {...alarm}
                  setAlarmList={setAlarmList}
                  setIsInquiryModalOpen={setIsInquiryModalOpen}
                  setSelectedInquiry={setSelectedInquiry}
                />
                {index === alarmList.length - 1 ? null : <div className="border-gray2 border-b" />}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function AlarmItem({
  title,
  archiveInquiryNotificationId,
  archiveInquiryId,
  setSelectedInquiry,
  type,
  read,
  name,
  setAlarmList,
  setIsInquiryModalOpen,
}: {
  setSelectedInquiry: Dispatch<
    SetStateAction<{ selectedArchiveInquiryId: number; inquiryType: 'ANSWER' | 'INQUIRY' } | undefined>
  >
  setIsInquiryModalOpen: Dispatch<SetStateAction<boolean>>
  setAlarmList: Dispatch<SetStateAction<ArchiveInquiryNotificationType[] | undefined>>
  title: string
  archiveInquiryNotificationId: number
  archiveInquiryId: number
  type: 'ANSWER' | 'INQUIRY'
  read: boolean
  name: string
}) {
  return (
    <div className="flex flex-col gap-y-2 pb-4">
      <p className={`${read ? 'text-gray5' : 'text-black'} body-md`}>
        <span className="subtitle-md">{name}</span>님이 <span className="subtitle-md">‘{title}’</span> 아카이브에
        {type === 'ANSWER' ? ' 답변을 남겼어요.' : ' 문의를 보냈어요.'}
      </p>
      {type === 'ANSWER' ? (
        <Button
          onClick={() => {
            setIsInquiryModalOpen(true)
            setSelectedInquiry({ selectedArchiveInquiryId: archiveInquiryId, inquiryType: 'ANSWER' })
            patchAlarmArchiveInquiry(archiveInquiryNotificationId).then(() => {
              getAlarmArchiveInquiry().then((response) => {
                if (response.success) {
                  setAlarmList(response.data)
                }
              })
            })
          }}
          type={'outline'}
          size={'sm'}
          customClassName={'w-fit'}
        >
          답변보기
        </Button>
      ) : (
        <Button
          onClick={() => {
            setIsInquiryModalOpen(true)
            setSelectedInquiry({ selectedArchiveInquiryId: archiveInquiryId, inquiryType: 'INQUIRY' })
            patchAlarmArchiveInquiry(archiveInquiryNotificationId).then(() => {
              getAlarmArchiveInquiry().then((response) => {
                if (response.success) {
                  setAlarmList(response.data)
                }
              })
            })
          }}
          type={'outline'}
          size={'sm'}
          customClassName={'w-fit'}
        >
          답변남기기
        </Button>
      )}
    </div>
  )
}
