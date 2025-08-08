import { UnCheckIcon } from '@/assets/svgComponents'
import Input from '@/components/common/Input'

export default function PriceField() {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        가격 <span className="text-main">*</span>
      </p>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-3">
          <Input
            value={''}
            placeholder={'숫자만 입력해주세요.'}
            inputBoxStyle={'default'}
            customClassName={'w-[240px]'}
          ></Input>
          <p className="subtitle-md">원</p>
        </div>
        <div className="subtitle-md text-gray5 flex gap-x-2">
          <div>
            <UnCheckIcon width={24} height={24} />
          </div>
          <p>무료</p>
        </div>
      </div>
    </div>
  )
}
