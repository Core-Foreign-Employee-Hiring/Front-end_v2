import Button from '@/components/common/Button'
import { UploadIcon } from '@/assets/svgComponents'

export default function DetailField() {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg">
        상세 정보 <span className="text-main">*</span>
      </p>
      <div className="flex items-center gap-x-3">
        <p className="subtitle-lg text-gray5">채용 포스터 업로드</p>
        <Button
          size={'sm'}
          type={'outline'}
          customClassName={'gap-x-2'}
          leftIcon={<UploadIcon width={20} height={20} />}
        >
          파일 업로드
        </Button>
      </div>
    </div>
  )
}
