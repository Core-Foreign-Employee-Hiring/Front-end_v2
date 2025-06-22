import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Button from '@/components/common/Button'
import { FillHeartIcon } from '@/assets/svgComponents'
import Image from 'next/image'

const RecruitDetailPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center pt-[60px]">
        <div className="flex gap-x-[40px] pt-[160px]">
          <section className="flex w-[770px] flex-col gap-y-[40px]">
            {/* 회사 정보 */}
            <section className="bg-gray1 flex flex-col gap-y-[24px] rounded-[32px] p-8">
              <div className="relative h-[100px] w-[100px]">
                <Image src={'/pizza.png'} fill className="object-cover" alt="logo" />
              </div>
            </section>

            {/* 근무지 정보 */}
            <section className="flex flex-col gap-y-[12px]">
              <h2 className="title-md">근무지 정보</h2>
              <div className="border-gray3 rounded-[32px] border p-[32px]"></div>
            </section>

            {/* 모집 포스터 */}
            <section className="flex flex-col gap-y-[12px]">
              <h2 className="title-md">모집 포스터</h2>
              <div className="border-gray3 rounded-[32px] border p-[32px]"></div>
            </section>
          </section>
          {/* sidebar */}
          <div className="flex w-[411px] flex-col gap-y-[24px]">
            <section className="border-gray3 flex flex-col gap-y-[24px] rounded-[32px] border p-7">
              <div>
                <h2 className="subtitle-lg">모집조건</h2>
                <div className="mt-[24px] flex flex-col gap-y-3">
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">모집기간</div>
                    <p className="body-sm">224.12.28(토) ~ 2025.01.01(수)</p>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">모집인원</div>
                    <p className="body-sm">1명</p>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">성별</div>
                    <p className="body-sm">여성</p>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">우대조건</div>
                    <p className="body-sm">유사업무 경험, 장기근무 가능, 인근거주자</p>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">학력</div>
                    <p className="body-sm">학력무관</p>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">기타조건</div>
                    <p className="body-sm">초보가능</p>
                  </div>
                </div>
              </div>
              <div className="border-gray3 border-t" />
              <div>
                <h2 className="subtitle-lg">근무조건</h2>
                <div className="mt-[24px] flex flex-col gap-y-3">
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">모집기간</div>
                    <p className="body-sm">224.12.28(토) ~ 2025.01.01(수)</p>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">모집인원</div>
                    <p className="body-sm">1명</p>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">성별</div>
                    <p className="body-sm">여성</p>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">우대조건</div>
                    <p className="body-sm">유사업무 경험, 장기근무 가능, 인근거주자</p>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">학력</div>
                    <p className="body-sm">학력무관</p>
                  </div>
                  <div className="flex gap-x-5">
                    <div className="subtitle-md text-gray5 w-[100px]">기타조건</div>
                    <p className="body-sm">초보가능</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex gap-x-2">
              <Button type="outline" customClassName={'flex gap-x-1 w-[85px]'}>
                <FillHeartIcon />찜
              </Button>
              <Button type="active" customClassName={'w-full'}>
                지원하기
              </Button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
export default RecruitDetailPage
