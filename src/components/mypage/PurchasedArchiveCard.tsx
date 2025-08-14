import Button from '@/components/common/Button'

export default function PurchasedArchiveCard() {
  return (
    <div className="flex flex-col gap-y-[16px]">
      <section className="flex gap-x-[13px]">
        <div className="bg-gray3 h-[84px] w-[80px] rounded-[12px]" />
        <div className="">
          <h1 className="subtitle-md">제목</h1>
          <p className="body-sm text-gray5">한줄 설명</p>
          <div className="flex items-center gap-x-[13px]">
            <p className="body-sm">129,550원</p>
            <p className="small text-gray4">2025.07.02 결제완료</p>
          </div>
          <p className="subtitle-sm text-gray5">아직 리뷰를 작성하지 않았습니다.</p>
        </div>
      </section>
      <section className="flex gap-x-3">
        <Button onClick={() => {}} type={'disabled'} size={'lg'} customClassName={'w-full'}>
          리뷰 작성
        </Button>
        <Button onClick={() => {}} type={'outline'} size={'lg'} customClassName={'w-[100px]  whitespace-nowrap'}>
          다운로드
        </Button>
      </section>
    </div>
  )
}
