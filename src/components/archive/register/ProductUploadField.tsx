import Button from '@/components/common/Button'
import { UploadIcon } from '@/assets/svgComponents'

export default function ProductUploadField() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col">
        <p className="subtitle-lg flex gap-x-1">
          판매할 상품 <span className="text-main">*</span>
        </p>
        <p className="text-gray4 body-sm">구매자에게 전달되는 상품이에요.</p>
      </div>

      <Button
        size={'sm'}
        onClick={() => {}}
        leftIcon={<UploadIcon width={20} height={20} />}
        type={'outline'}
        customClassName={'h-[36px] w-fit pl-3 pr-4'}
      >
        업로드
      </Button>
    </div>
  )
}
