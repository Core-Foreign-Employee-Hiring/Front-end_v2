'use client'

import Header from '@/components/common/Header'
import Image from 'next/image'
import Review from '@/components/archive/Review'
import Button from '@/components/common/Button'
import ArchiveRegisterForm from '@/components/archive/ArchiveRegisterForm'

export default function ReviewDetailPage() {
  return (
    <main>
      <Header />
      <div className="h-[120px]" />
      <div className="flex flex-col gap-y-6 px-5">
        {/* 요약본 카드 */}
        <section className="border-gray2 flex flex-col gap-y-6 rounded-[32px] border p-5">
          <div className="relative h-[223px] w-full rounded-[16px]">
            <div className="absolute z-10 h-[133px] w-full rounded-[12px] bg-gradient-to-t from-white to-black opacity-40"></div>
            <Image alt={''} src={'/pizza.png'} fill className={'rounded-[16px]'} />
          </div>
          <section className="flex flex-col gap-y-3">
            <div>
              <h1 className="subtitle-md">title</h1>
              <p className="body-sm text-gray5">한줄 설명</p>
            </div>
            <p className="subtitle-lg">129500원</p>
          </section>
        </section>

        {/* content */}
        <section className="flex flex-col gap-y-8">
          <section className="flex flex-col gap-y-3">
            <p className="subtitle-md">설명</p>
            <p className="body-md">
              이력서(경력기술서), 자소서 가이드와 합격 원본을 담았습니다. 실제 예시들이 포함되어 있습니다. 면접관이
              포트폴리오에서 확인하는 내용 합격하는 포트폴리오의 구성과 핵심 전략 탈락의 지름길, 꼭 피해야 할것
              포트폴리오 완성도를 높이는 체크리스트
            </p>
          </section>
          <section className="flex overflow-x-scroll">
            <div className="relative flex h-[250px] w-[286px] flex-shrink-0 whitespace-nowrap">
              <Image alt={''} src={'/pizza.png'} fill className="rounded-[16px] object-cover" />
            </div>
            <div className="relative flex h-[250px] w-[286px] flex-shrink-0 whitespace-nowrap">
              <Image alt={''} src={'/pizza.png'} fill className="rounded-[16px] object-cover" />
            </div>
          </section>
        </section>

        {/* review */}
        <section>
          <section>
            <p className="subtitle-md">리뷰</p>
          </section>
          <section>
            <Review />
            <Review />
            <Review />
            <Review />
          </section>
        </section>
      </div>

      <div className="h-[100px]" />
      <div className="fixed bottom-0 flex w-full gap-x-3 bg-white p-5">
        <Button
          onClick={() => {}}
          type={'outline'}
          size={'lg'}
          customClassName={'flex whitespace-nowrap ew-[72px] h-[52px]'}
        >
          문의
        </Button>
        <Button onClick={() => {}} type={'active'} size={'lg'} customClassName={'w-full h-[52px]'}>
          구매하기
        </Button>
      </div>
    </main>
  )
}
