'use client'

import Button from '@/components/common/Button'
import { GrayRightArrowIcon, IIcon } from '@/assets/svgComponents'
import SoldArchiveCard from '@/components/mypage/SoldArchiveCard'
import PostArchiveCard from '@/components/mypage/PostArchiveCard'
import PurchasedArchiveCard from '@/components/mypage/PurchasedArchiveCard'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getPostArchives, getPurchasedArchives, getSoldArchives, getSoldArchivesRevenue } from '@/lib/archive'
import { PostArchiveType, PurchasedArchiveType, SoldArchiveType } from '@/types/archive'
import { getSettlementAccount } from '@/lib/mypage'
import { SettlementAccountType } from '@/types/mypage'

interface MyArchiveListProps {
  isPostArchivePageOpen: false
  setIsPostArchivePageOpen: Dispatch<SetStateAction<boolean>>
  isPurchasedArchivePageOpen: false
  setIsPurchasedArchivePageOpen: Dispatch<SetStateAction<boolean>>
  isSoldArchivePageOpen: false
  setIsSoldArchivePageOpen: Dispatch<SetStateAction<boolean>>
}

export default function MyArchiveList({
  isPostArchivePageOpen,
  setIsPostArchivePageOpen,
  isPurchasedArchivePageOpen,
  setIsPurchasedArchivePageOpen,
  isSoldArchivePageOpen,
  setIsSoldArchivePageOpen,
}: MyArchiveListProps) {
  const [purchasedArchiveList, setPurchasedArchiveList] = useState<PurchasedArchiveType[]>()
  const [postArchiveList, setPostArchiveList] = useState<PostArchiveType[]>()
  const [soldArchiveList, setSoldArchiveList] = useState<SoldArchiveType[]>()
  const [totalRevenue, setTotalRevenue] = useState<string>()
  const [clickInfo, setClickInfo] = useState(false)
  //계좌번호 정보 조회
  const [settlementAccount, setSettlementAccount] = useState<SettlementAccountType>()
  const [isAccountRegistered, setIsAccountRegistered] = useState(false)

  useEffect(() => {
    getPurchasedArchives(0, 2).then((res) => {
      console.log('res', res.data)
      setPurchasedArchiveList(res.data?.content)
    })
  }, [])

  useEffect(() => {
    getPostArchives(0, 3).then((res) => {
      console.log('res', res.data)
      setPostArchiveList(res.data?.content)
    })
  }, [])

  useEffect(() => {
    getSoldArchives(0, 3).then((res) => {
      console.log('res', res.data)
      setSoldArchiveList(res.data?.content)
    })
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

  return (
    <>
      <div className="flex flex-col gap-y-[32px] px-5">
        {/* 판매한 아카이브 */}
        <section className="flex w-full flex-col gap-y-[20px]">
          <section className="flex items-center justify-between">
            <h1 className="title-md">판매한 아카이브</h1>
            <button
              onClick={() => {
                setIsSoldArchivePageOpen(!isSoldArchivePageOpen)
              }}
              className="button text-gray5 px-4"
            >
              더보기
            </button>
          </section>
          <section className="flex flex-col gap-y-[12px]">
            <div className="flex items-center justify-between">
              {isAccountRegistered ? (
                <div className="flex gap-x-1">
                  <p className="subtitle-sm text-gray5">{settlementAccount?.accountName}</p>
                  <p className="body-sm text-gray5">
                    {settlementAccount?.bankName} {settlementAccount?.accountNumber}
                  </p>
                </div>
              ) : (
                <p className="body-sm text-gray5">등록한 계좌번호가 없어요.</p>
              )}
              <Button onClick={() => {}} type={'outline'} size={'sm'}>
                {isAccountRegistered ? '계좌번호 수정' : '계좌번호 등록'}
              </Button>
            </div>
            <div className="border-gray2 flex flex-col justify-between rounded-[16px] border px-5 py-4">
              <div className="flex w-full justify-between">
                <div className="flex flex-col">
                  <p className="body-sm">총수익</p>
                  <div className="flex items-center gap-x-1">
                    <p className="subtitle-md">{totalRevenue}원</p>
                    <div
                      onClick={() => {
                        setClickInfo(!clickInfo)
                      }}
                      className="border-gray4 flex h-[16px] w-[16px] items-center justify-center rounded-full border"
                    >
                      <IIcon width={2} height={8} />
                    </div>
                  </div>
                </div>
                <div className="button text-gray4 flex items-center">
                  인출하기
                  <div className="flex h-[24px] w-[24px] items-center justify-center">
                    <GrayRightArrowIcon width={5} height={9} />
                  </div>
                </div>
              </div>
              {clickInfo ? (
                <div className="text-gray4 bg-gray2 badge-sm mt-2 w-fit rounded-[8px] px-2 py-1">
                  인출하기를 누르면 2~3일 내 등록 계좌로 입금돼요.
                </div>
              ) : null}
            </div>
          </section>
          <section className="flex flex-col">
            {soldArchiveList?.map((soldArchive) => {
              return <SoldArchiveCard key={soldArchive.archiveId} {...soldArchive} />
            })}
          </section>
        </section>

        {/* 작성한 아카이브 */}
        <section className="flex flex-col gap-y-[20px]">
          <section className="flex items-center justify-between">
            <h1 className="title-md">작성한 아카이브</h1>
            <button
              onClick={() => {
                setIsPostArchivePageOpen(!isPostArchivePageOpen)
              }}
              className="button text-gray5 px-4"
            >
              더보기
            </button>
          </section>
          <div className="flex gap-x-[20px] overflow-x-scroll">
            {postArchiveList?.map((postArchive) => {
              return <PostArchiveCard key={postArchive.archiveId} {...postArchive} />
            })}
          </div>
        </section>

        {/* 구매한 아카이브 */}
        <section className="flex flex-col gap-y-[20px] pb-[50px]">
          <section className="flex items-center justify-between">
            <h1 className="title-md">구매한 아카이브</h1>
            <button
              onClick={() => {
                setIsPurchasedArchivePageOpen(!isPurchasedArchivePageOpen)
              }}
              className="button text-gray5 px-4"
            >
              더보기
            </button>
          </section>
          {purchasedArchiveList?.map((purchasedArchive) => {
            return <PurchasedArchiveCard key={purchasedArchive.passArchiveId} {...purchasedArchive} />
          })}
        </section>
      </div>
    </>
  )
}
