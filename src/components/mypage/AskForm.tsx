import AskFormItem from '@/components/mypage/AskFormItem'

export default function AskForm() {
  return (
    <div className="flex flex-col gap-y-[20px] px-5">
      <p className="title-md">문의하기</p>
      <p className="title-sm">내가 보낸 문의</p>
      <section>
        <AskFormItem isAnswered={false} />
        <AskFormItem isAnswered={true} />
      </section>
    </div>
  )
}
