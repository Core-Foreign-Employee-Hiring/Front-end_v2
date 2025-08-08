import { QnaArrowDownIcon } from '@/assets/svgComponents'

interface AskFormItemProps {
  isAnswered: boolean
}
export default function AskFormItem({ isAnswered }: AskFormItemProps) {
  return isAnswered ? (
    <div className="flex flex-col">
      <section className={'border-gray2 flex flex-col gap-y-2 border-b px-3 py-4'}>
        <p className="subtitle-lg">'제목이 여기에 들어가요'</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="bg-main subtitle-md flex h-[36px] w-[36px] items-center justify-center rounded-full text-white">
              Q
            </div>
            <p className="body-md">이것은 내가 보낸 문의</p>
          </div>
          <QnaArrowDownIcon width={18} height={24}></QnaArrowDownIcon>
        </div>
      </section>
      <section className="bg-gray1 border-gray2 border-b px-3 py-4">
        <div className="flex items-center gap-x-2">
          <div className="border-main subtitle-md text-main flex h-[36px] w-[36px] items-center justify-center rounded-full border bg-white">
            A
          </div>
          <p className="body-md text-gray5">이것은 내가 보낸 문의의 답변</p>
        </div>
      </section>
    </div>
  ) : (
    <div className="border-gray2 flex flex-col border-b">
      <section className={'flex flex-col gap-y-2 px-3 py-4'}>
        <p className="subtitle-lg">'제목이 여기에 들어가요'</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="bg-main-light subtitle-md flex h-[36px] w-[36px] items-center justify-center rounded-full text-white">
              Q
            </div>
            <p className="body-md text-gray5">이것은 내가 보낸 문의</p>
          </div>
          <button className="small border-gray2 text-gray5 rounded-[8px] border px-3 py-2">답변남기기</button>
        </div>
      </section>
    </div>
  )
}
