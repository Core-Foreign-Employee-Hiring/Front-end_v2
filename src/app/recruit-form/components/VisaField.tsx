import Button from '@/components/common/Button'
import { getVisaLabel } from '@/utils/filterList'
import { XIcon } from '@/assets/svgComponents'
import { useState } from 'react'
import { useRecruitStore } from '@/store/recruitStore'
import { VisaType } from '@/types/recruit'
import VisaFilter from '@/components/filter/VisaFilter'

export default function VisaField() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const recruitPostData = useRecruitStore((state) => state.recruitPostData)
  const setState = useRecruitStore((state) => state.setState)
  const [selectedVisas, setSelectedVisas] = useState<VisaType[] | undefined>(undefined)

  const deleteVisas = (selectedVisa: VisaType) => {
    setSelectedVisas((prev) => prev?.filter((visa) => visa !== selectedVisa))
  }

  const addVisas = (selectedVisa: VisaType) => {
    setSelectedVisas((prev) => {
      const current = prev || []

      if (current.includes(selectedVisa)) {
        return current.filter((visa) => visa !== selectedVisa)
      }

      if (current.length >= 5) return prev

      return [...current, selectedVisa]
    })
  }

  const onApply = () => {
    setState({
      ...recruitPostData,
      recruitPostData: {
        ...recruitPostData,
        visas: selectedVisas,
      },
    })
    onClose()
  }

  const onReset = () => {
    setSelectedVisas(undefined)
    setState({
      ...recruitPostData,
      recruitPostData: {
        ...recruitPostData,
        visas: undefined,
      },
    })
    onClose()
  }

  const onClose = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <div className="flex flex-col gap-y-3">
      {isFilterOpen && (
        <VisaFilter
          addVisas={addVisas}
          deleteVisas={deleteVisas}
          selectedVisas={selectedVisas}
          onApply={onApply}
          onReset={onReset}
          onClose={onClose}
        />
      )}
      <section className="flex w-full items-center justify-between">
        <p className="subtitle-lg">
          비자 <span className="text-main">*</span>
        </p>
        <Button
          buttonType="button"
          type={'outline'}
          onClick={() => {
            setIsFilterOpen(true)
          }}
          size={'sm'}
        >
          언어 선택
        </Button>
      </section>
      <section className="flex gap-x-2 overflow-x-scroll">
        {recruitPostData.visas?.map((selectedVisa) => (
          <button
            type="button"
            key={selectedVisa}
            className="border-gray3 bg-gray1 badge-sm text-gray5 flex items-center rounded-full border px-3 py-2 whitespace-nowrap"
          >
            {getVisaLabel(selectedVisa)}
            <XIcon
              onClick={() => {
                deleteVisas(selectedVisa)
              }}
              width={20}
              height={20}
            />
          </button>
        ))}
      </section>
    </div>
  )
}
