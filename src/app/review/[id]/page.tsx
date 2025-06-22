'use client'

import Header from '@/components/common/Header'
import { GrayCommentIcon, OptionIcon } from '@/assets/svgComponents'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { useState } from 'react'
import Footer from '@/components/common/Footer'

export default function ReviewDetailPage() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center pt-[40px]">
        <div className="flex gap-x-[32px] pt-[160px]">
          <div className="flex flex-col gap-y-[32px]">
            <div className="border-gray2 w-[1200px] rounded-[32px] border p-8">
              <section className="flex w-full justify-between">
                <h1 className="title-md">삼성 합격 포트폴리오 공개합니다.</h1>
                <OptionIcon width={32} height={32} />
              </section>
              <section className="border-gray2 flex h-[32px] items-center justify-between border-b">
                <div className="flex gap-x-2">
                  <p className="badge-sm text-main mx-1">albanoye**</p>
                  <p className="badge-sm text-gray4 mx-1">2025.01.15</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <GrayCommentIcon width={16} height={16} />
                  <p className="badge-sm text-gray4 mx-1">5</p>
                </div>
              </section>
              <section className="mt-[28px] flex flex-col gap-y-[32px]">
                <p className="body-md">
                  오전 11시부터 오후 8시까지 종일알바를 하고있습니다! 지금 이틀째인데 하는 업무가 음식점에서 하는
                  알바라서 여러 일들을 하고 최저시급을 받고있는데 제가 하는 일에 비해 적당하게 받고 있는지 모르겠어서 글
                  남겨요ㅠㅠ 우선 서빙, 상 치우기, 단무지/물 전달, 각 식탁에 숫가락 젓가락 개수 맞춰서 세팅, 설거지,
                  음식 고명하기, 화장실청소, 대걸레질, 청소기, 셀프바 음식 채우기, 음식 나갈때 주방에 들어가서 받기
                  입니다. 이 일을 다 혼자 해요. 이 정도로 최저시급인 10030원 적당한 건가요?
                </p>
                <div className="border-gray2 relative h-[1000px] w-full border">
                  <Image alt={'피자'} src={'/pizza.png'} fill className="object-cover" />
                </div>
              </section>
            </div>

            <div className="border-gray2 w-[1200px] rounded-[32px] border p-8">
              <div>
                <h2 className="title-md">리뷰</h2>
                <p className="body-sm">4.5점</p>
              </div>
              <section className="py-[20px]">
                <div className="flex h-[32px] items-center gap-x-1">
                  <p className="badge-md text-main">albago**</p>
                  <p className="badge-md text-black">4.0</p>
                  <p className="text-gray4 badge-sm">2025.01.15</p>
                </div>
                <p className="body-md">남의 돈 받는 일이라는게 쉬울 리가 없죠... 아쉽게도ㅠ</p>
              </section>
              <section className="py-[20px]">
                <div className="flex h-[32px] items-center gap-x-1">
                  <p className="badge-md text-main">albago**</p>
                  <p className="badge-md text-black">4.0</p>
                  <p className="text-gray4 badge-sm">2025.01.15</p>
                </div>
                <p className="body-md">남의 돈 받는 일이라는게 쉬울 리가 없죠... 아쉽게도ㅠ</p>
              </section>
              <section className="py-[20px]">
                <div className="flex h-[32px] items-center gap-x-1">
                  <p className="badge-md text-main">albago**</p>
                  <p className="badge-md text-black">4.0</p>
                  <p className="text-gray4 badge-sm">2025.01.15</p>
                </div>
                <p className="body-md">남의 돈 받는 일이라는게 쉬울 리가 없죠... 아쉽게도ㅠ</p>
              </section>
            </div>
          </div>

          <div className="border-gray2 flex h-fit w-[400px] flex-col gap-y-4 rounded-[32px] border p-8">
            <h2 className="title-md">30,000원</h2>
            <div className="flex flex-col gap-y-3">
              <Button
                onClick={() => {
                  setIsInquiryModalOpen(true)
                }}
                type="outline"
                size={'lg'}
                customClassName={'w-full'}
              >
                판매자에게 문의하기
              </Button>
              <Button
                onClick={() => {
                  setIsPaymentModalOpen(true)
                }}
                type={'active'}
                size={'lg'}
                customClassName={'w-full'}
              >
                구매하기
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
