'use client'

import Filter from '@/components/common/Filter'
import { CONTRACT_LIST } from '@/utils/filterList'
import { ContractEnumType } from '@/types/recruit'
import { useTranslation } from 'react-i18next'

interface ContractFilterProps {
  addContract: (contract: ContractEnumType) => void
  deleteContract: (contract: ContractEnumType) => void
  selectedContract: ContractEnumType | undefined
  onApply: () => void
  onReset: () => void
  onClose: () => void
}

export default function ContractFilter({
  onClose,
  addContract,
  selectedContract,
  onReset,
  onApply,
}: ContractFilterProps) {
  const { t } = useTranslation()
  return (
    <Filter onClose={onClose}>
      <Filter.Title onClose={onClose} title={t('filter.contractTypeFilter.title')} />
      <Filter.Content>
        <div className="flex flex-col gap-y-4">
          <section className="h-[400px] overflow-y-scroll">
            <div className="flex flex-wrap gap-2">
              {CONTRACT_LIST.map((contract) => (
                <button
                  key={contract.code}
                  type="button"
                  onClick={() => addContract(contract.code)}
                  className={`${selectedContract === contract.code ? 'border-main bg-main-light text-main' : 'border-gray2 text-gray5'} button flex h-[36px] items-center rounded-[12px] border px-4 py-3`}
                >
                  {t(contract.label)}
                </button>
              ))}
            </div>
          </section>
        </div>
      </Filter.Content>
      <Filter.BottomButton onApply={onApply} onReset={onReset} />
    </Filter>
  )
}
