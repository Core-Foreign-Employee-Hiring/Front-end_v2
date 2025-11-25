'use client'

import Filter from '@/components/common/Filter'
import { getVisaLabel, VISA_LIST } from '@/utils/filterList'
import { VisaType } from '@/types/recruit'
import { XIcon } from '@/assets/svgComponents'

interface VisaFilterProps {
  addVisas: (selectedVisa: VisaType) => void
  deleteVisas: (selectedVisa: VisaType) => void
  selectedVisas: VisaType[] | undefined
  onApply: () => void
  onReset: () => void
  onClose: () => void
}

export default function VisaFilter({
  onClose,
  addVisas,
  selectedVisas,
  deleteVisas,
  onReset,
  onApply,
}: VisaFilterProps) {
  return (
    <Filter onClose={onClose}>
      <Filter.Title onClose={onClose} title={'비자선택'} />
      <Filter.Content>
        <div className="flex flex-col gap-y-4">
          <section className="flex h-[400px] flex-wrap gap-2 overflow-y-scroll">
            {VISA_LIST.map((visa) => (
              <button
                key={visa.code}
                type="button"
                onClick={() => addVisas(visa.code)}
                className={`${selectedVisas?.includes(visa.code) ? 'border-main bg-main-light text-main cursor-pointer transition hover:opacity-[80%] hover:duration-75' : 'hover:border-gray3 border-gray2 text-gray5 cursor-pointer transition hover:duration-75'} button rounded-[12px] border px-4 py-3`}
              >
                {visa.label}
              </button>
            ))}
          </section>
          <section className="flex gap-x-2 overflow-x-scroll">
            {selectedVisas?.map((selectedVisa) => (
              <button
                onClick={() => {
                  deleteVisas(selectedVisa)
                }}
                type="button"
                key={selectedVisa}
                className="border-gray3 bg-gray1 badge-sm text-gray5 flex cursor-pointer items-center rounded-full border px-3 py-2 whitespace-nowrap transition hover:opacity-[80%] hover:duration-75"
              >
                {getVisaLabel(selectedVisa)}
                <XIcon width={20} height={20} />
              </button>
            ))}
          </section>
        </div>
      </Filter.Content>
      <Filter.BottomButton onApply={onApply} onReset={onReset} />
    </Filter>
  )
}
