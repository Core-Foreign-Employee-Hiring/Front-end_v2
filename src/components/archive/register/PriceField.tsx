import { CheckIcon, UnCheckIcon } from '@/assets/svgComponents'
import Input from '@/components/common/Input'
import { useArchiveStore } from '@/store/archiveStore'
import { useRef, useState } from 'react'
import { ApiResponse } from '@/types/common'
import { postS3File } from '@/lib/recruit-form'

export default function PriceField() {
  const archiveData = useArchiveStore((state) => state.archiveData)
  const setState = useArchiveStore((state) => state.setState)

  return (
    <div className="flex flex-col gap-y-3">
      <p className="subtitle-lg flex gap-x-1">
        가격 <span className="text-main">*</span>
      </p>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-3">
          <Input
            type="number"
            value={archiveData?.price ?? ''}
            setValue={(e) => {
              setState({ ...archiveData, archiveData: { ...archiveData, price: parseInt(e.target.value) } })
            }}
            placeholder={'숫자만 입력해주세요.'}
            inputBoxStyle={'default'}
            customClassName={'w-[240px]'}
          />
          <p className="subtitle-md">원</p>
        </div>
        <div className="subtitle-md text-gray5 flex gap-x-2">
          <div
            onClick={() => {
              setState({ ...archiveData, archiveData: { ...archiveData, price: 0 } })
            }}
          >
            {archiveData?.price === 0 ? <CheckIcon width={24} height={24} /> : <UnCheckIcon width={24} height={24} />}
          </div>
          <p>무료</p>
        </div>
      </div>
    </div>
  )
}
