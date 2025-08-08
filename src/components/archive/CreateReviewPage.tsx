import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { Dispatch, SetStateAction } from 'react'

interface CreateReviewPageProps {
  setIsCreateReviewPageOpen: Dispatch<SetStateAction<boolean>>
}

const CreateReviewPage = ({ setIsCreateReviewPageOpen }: CreateReviewPageProps) => {
  return (
    <div className="flex w-[1200px] flex-col gap-y-[67px]">
      <div className="mt-[40px] flex flex-col gap-y-[32px]">
        <h1 className="title-lg">채용 이야기 작성</h1>
        <div className="flex items-center gap-x-[158px]">
          <h2 className="title-md w-[84px]">
            제목<span className="text-main">*</span>
          </h2>
          <Input inputBoxStyle={'default'} placeholder={'제목을 입력해주세요.'} customClassName={'w-full'}></Input>
        </div>

        <div className="flex items-start gap-x-[158px]">
          <h2 className="title-md w-[84px]">
            설명<span className="text-main">*</span>
          </h2>
          <textarea
            className="border-gray2 h-[420px] w-full rounded-[24px] border p-6 outline-none focus:outline-none"
            placeholder={'설명을 입력해주세요.'}
          />
        </div>

        <div className="flex items-center gap-x-[158px]">
          <h2 className="title-md w-[84px]">포스터</h2>
          <div className="w-full">
            <Button type={'outline'} customClassName="w-[120px]" onClick={() => {}} size={'lg'}>
              업로드
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-x-[158px]">
          <h2 className="title-md w-[84px]">판매할 상품</h2>
          <div className="w-full">
            <Button type={'outline'} customClassName="w-[120px]" onClick={() => {}} size={'lg'}>
              업로드
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-x-[158px]">
          <h2 className="title-md w-[84px]">
            가격<span className="text-main">*</span>
          </h2>
          <Input inputBoxStyle={'default'} placeholder={'판매할 가격을 입력해주세요.'} customClassName={'w-full'} />
        </div>
      </div>
      <div className="flex w-full justify-end gap-x-3">
        <Button
          onClick={() => {
            setIsCreateReviewPageOpen(false)
          }}
          type={'outline'}
          size={'lg'}
          customClassName={'w-[200px]'}
        >
          취소
        </Button>
        <Button onClick={() => {}} type={'disabled'} size={'lg'} customClassName={'w-[200px]'}>
          작성
        </Button>
      </div>
    </div>
  )
}
export default CreateReviewPage
