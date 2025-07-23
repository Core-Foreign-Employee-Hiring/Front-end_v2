import { ReactNode } from 'react'
import Button from '@/components/common/Button'

interface FilterProps {
  children: ReactNode
}
export default function Filter({ children }: FilterProps) {
  return (
    <div className="border-gray2 absolute top-10 z-20 w-[335px] rounded-[24px] border bg-white p-5">{children}</div>
  )
}

function FilterBottomButton({
  selectedListLength,
  resetHandler,
  applyHandler,
}: {
  selectedListLength: number | null
  resetHandler: () => void
  applyHandler: () => void
}) {
  return (
    <div className="flex w-full justify-end gap-x-2">
      <Button customClassName={'w-[120px]'} size="sm" type="outline" onClick={resetHandler}>
        초기화
      </Button>
      <Button
        customClassName={'w-[120px]'}
        size="sm"
        type="active"
        onClick={applyHandler}
        leftIcon={
          <div className="text-main badge-sm flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white">
            {selectedListLength}
          </div>
        }
      >
        적용
      </Button>
    </div>
  )
}

function FilterSelectedList({ children }: { children: ReactNode }) {
  return <>{children}</>
}

function FilterContentList({ children }: { children: ReactNode }) {
  return <>{children}</>
}

Filter.BottomButton = FilterBottomButton
Filter.SelectedList = FilterSelectedList
Filter.ContentList = FilterContentList
