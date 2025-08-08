import Button from '@/components/common/Button'
import { UploadIcon } from '@/assets/svgComponents'

export default function ThumbnailField() {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        썸네일 <span className="text-main">*</span>
      </p>
      <Button
        size={'sm'}
        onClick={() => {}}
        leftIcon={<UploadIcon width={20} height={20} />}
        type={'outline'}
        customClassName={'h-[36px] w-fit pl-3 pr-4'}
      >
        이미지 업로드
      </Button>
    </div>
  )
}
