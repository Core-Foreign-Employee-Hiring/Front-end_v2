'use client'

import Button from '@/components/common/Button'
import { GrayRightArrowIcon } from '@/assets/svgComponents'
import SoldArchiveCard from '@/components/mypage/SoldArchiveCard'
import PostArchiveCard from '@/components/mypage/PostArchiveCard'
import PurchasedArchiveCard from '@/components/mypage/PurchasedArchiveCard'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getPostArchives, getPurchasedArchives } from '@/lib/archive'
import { PostArchiveType, PurchasedArchiveType } from '@/types/archive'

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

  return (
    <>
      <div className="flex flex-col gap-y-[32px] px-5">
        {/* 판매한 아카이브 */}
        <section className="flex w-full flex-col gap-y-[20px]">
          <section className="flex items-center justify-between">
            <h1 className="title-md">판매한 아카이브</h1>
            <button className="button text-gray5 px-4">더보기</button>
          </section>
          <section className="flex flex-col gap-y-[12px]">
            <div className="flex items-center justify-between">
              <p className="body-sm text-gray5">토스뱅크 1000-2185-1683</p>
              <Button onClick={() => {}} type={'outline'} size={'sm'}>
                계좌번호 수정
              </Button>
            </div>
            <div className="border-gray2 flex items-center justify-between rounded-[16px] border px-5 py-4">
              <div>
                <p className="body-sm">총수익</p>
                <p className="subtitle-md">40,000원</p>
              </div>
              <div className="button text-gray4 flex items-center">
                인출하기
                <div className="flex h-[24px] w-[24px] items-center justify-center">
                  <GrayRightArrowIcon width={5} height={9} />
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col">
            <SoldArchiveCard />
            <SoldArchiveCard />
            <SoldArchiveCard />
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
