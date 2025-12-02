'use client'

import Filter from '@/components/common/Filter'
import { getRegionLabel, WORK_REGIONS } from '@/utils/filterList'
import { RegionType } from '@/types/recruit'
import { XIcon } from '@/assets/svgComponents'
import { useTranslation } from 'react-i18next'

interface RegionFilterProps {
  addRegions: (selectedRegion: RegionType) => void
  deleteRegions: (selectedRegion: RegionType) => void
  selectedRegions: RegionType[] | undefined
  onApply: () => void
  onReset: () => void
  onClose: () => void
}

export default function RegionFilter({
  onClose,
  addRegions,
  selectedRegions,
  deleteRegions,
  onReset,
  onApply,
}: RegionFilterProps) {
  const { t } = useTranslation()
  return (
    <Filter onClose={onClose}>
      <Filter.Title onClose={onClose} title={t('filter.regionFilter.title')} />
      <Filter.Content>
        <div className="flex flex-col gap-y-4">
          <section className="h-[300px] overflow-y-scroll">
            <div className="flex flex-wrap gap-2">
              {WORK_REGIONS.map((region) => (
                <button
                  key={region.code}
                  type="button"
                  onClick={() => addRegions(region.code)}
                  className={`${selectedRegions?.includes(region.code) ? 'border-main bg-main-light text-main' : 'border-gray2 text-gray5'} button flex h-[32px] items-center justify-center rounded-[12px] border px-4 py-3`}
                >
                  {t(region.label)}
                </button>
              ))}
            </div>
          </section>
          <section className="flex gap-x-2 overflow-x-scroll">
            {selectedRegions?.map((selectedRegion) => (
              <button
                type="button"
                key={selectedRegion}
                className="border-gray3 bg-gray1 badge-sm text-gray5 flex items-center rounded-full border px-3 py-2 whitespace-nowrap"
              >
                {t(getRegionLabel(selectedRegion))}
                <XIcon
                  onClick={() => {
                    deleteRegions(selectedRegion)
                  }}
                  width={20}
                  height={20}
                />
              </button>
            ))}
          </section>
        </div>
      </Filter.Content>
      <Filter.BottomButton onApply={onApply} onReset={onReset} />
    </Filter>
  )
}
