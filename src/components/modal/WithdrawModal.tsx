import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import MiddleModal from '@/components/common/MiddleModal'
import Button from '@/components/common/Button'
import { getSettlementWithDrawer } from '@/lib/mypage'
import { SettlementWithDrawerInfoType } from '@/types/mypage'

interface WithdrawModalProps {
  isAccountRegisterModalOpen: boolean
  setIsAccountRegisterModalOpen: Dispatch<SetStateAction<boolean>>
  setIsWithdrawModalOpen: Dispatch<SetStateAction<boolean>>
  isWithdrawModalOpen: boolean
  isServicePreparingModalOpen: boolean
  setIsServicePreparingModalOpen: Dispatch<SetStateAction<boolean>>
}
export default function WithdrawModal({
  isAccountRegisterModalOpen,
  setIsAccountRegisterModalOpen,
  setIsWithdrawModalOpen,
  isWithdrawModalOpen,
  isServicePreparingModalOpen,
  setIsServicePreparingModalOpen,
}: WithdrawModalProps) {
  const [settleWithDrawerInfo, setSettleWithDrawerInfo] = useState<SettlementWithDrawerInfoType | undefined>()
  const [isNoAccountError, setIsNoAccountError] = useState(false)

  useEffect(() => {
    getSettlementWithDrawer().then((result) => {
      if (result.success) {
        setSettleWithDrawerInfo(result.data)
      } else if (result.status === 404) {
        setIsNoAccountError(true)
      }
    })
  }, [])

  return (
    <MiddleModal
      modalType={'TITLE'}
      title={'인출하시겠습니까?'}
      setIsModalOpen={setIsWithdrawModalOpen}
      isModalOpen={isWithdrawModalOpen}
    >
      <div className="flex flex-col gap-y-6">
        {isNoAccountError ? (
          <div className="flex items-center justify-between">
            <p>등록한 계좌가 없습니다.</p>
            <Button
              onClick={() => {
                setIsAccountRegisterModalOpen(!isAccountRegisterModalOpen)
                setIsWithdrawModalOpen(false)
              }}
              type={'outline'}
              size={'sm'}
            >
              계좌 등록하기
            </Button>
          </div>
        ) : (
          <section className="flex flex-col gap-y-2">
            <p className="subtitle-md">{settleWithDrawerInfo?.accountName}</p>
            <div className="flex flex-col gap-y-1">
              <div className="body-sm text-gray4 flex gap-x-1">
                <p>{settleWithDrawerInfo?.bankName}</p>
                <p>{settleWithDrawerInfo?.accountNumber}</p>
              </div>
              <p className="body-sm text-gray4">{settleWithDrawerInfo?.phoneNumber}</p>
              <p className="body-sm text-gray4">{settleWithDrawerInfo?.email}</p>
            </div>
          </section>
        )}

        <div className="border-gray2 border-b" />
        <p className="title-md">0 원</p>
        <Button
          type={isNoAccountError ? 'disabled' : 'active'}
          disabled={isNoAccountError}
          size={'lg'}
          customClassName={'w-full'}
          buttonType={'button'}
          onClick={() => {
            setIsServicePreparingModalOpen(!isServicePreparingModalOpen)
            setIsWithdrawModalOpen(!isWithdrawModalOpen)
          }}
        >
          인출하기
        </Button>
      </div>
    </MiddleModal>
  )
}
