'use client'

import Header from '@/components/common/Header'
import ReviewPost from '@/components/review/ReviewPost'
import Input from '@/components/common/Input'
import { GraySearchIcon } from '@/assets/svgComponents'
import Button from '@/components/common/Button'
import { useState } from 'react'
import CreateReviewPage from '@/components/review/CreateReviewPage'
import Footer from '@/components/common/Footer'

const ReviewPage = () => {
  const [isCreateReviewPageOpen, setIsCreateReviewPageOpen] = useState(false)
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center pt-[160px]">
        {isCreateReviewPageOpen ? (
          <CreateReviewPage setIsCreateReviewPageOpen={setIsCreateReviewPageOpen} />
        ) : (
          <div className="mt-[40px] flex w-[1200px] flex-col items-center justify-center gap-y-4">
            <section className="flex w-full items-center justify-between">
              <h1 className="title-lg text-black">채용 이야기</h1>
              <p className="subtitle-lg">
                총 <span className="text-main">34,231</span>건
              </p>
            </section>
            <section className="flex w-full items-center justify-between">
              <Input
                customClassName={'w-[460px]'}
                inputBoxStyle={'default'}
                leftIcon={<GraySearchIcon width={24} height={24} />}
                placeholder="본문 / 제목을 입력해주세요"
              />
              <Button
                type={'active'}
                onClick={() => setIsCreateReviewPageOpen(!isCreateReviewPageOpen)}
                size={'lg'}
                customClassName="w-[120px] h-fit"
              >
                글쓰기
              </Button>
            </section>
            <section className="grid grid-cols-2 gap-6">
              <ReviewPost title="자소서 뿌림" />
              <ReviewPost title="자소서 뿌림" />
              <ReviewPost title="자소서 뿌림" />
              <ReviewPost title="자소서 뿌림" />
              <ReviewPost title="자소서 뿌림" />
              <ReviewPost title="자소서 뿌림" />
              <ReviewPost title="자소서 뿌림" />
              <ReviewPost title="자소서 뿌림" />
            </section>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
export default ReviewPage
