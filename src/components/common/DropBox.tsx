import { DropboxArrowDownIcon, DropboxArrowUpIcon } from '@/assets/svgComponents'
import { ReactNode } from 'react'

interface DropBoxProps {
  initValue: string
  selectedValue: string | undefined | null
  isDropBoxOpen: boolean
  setIsDropBoxOpen: () => void
  children: ReactNode
  customClassName?: string
}
export default function DropBox({
  initValue,
  selectedValue,
  isDropBoxOpen,
  setIsDropBoxOpen,
  children,
  customClassName,
}: DropBoxProps) {
  return (
    <div className={`${customClassName} relative`}>
      <section
        onClick={setIsDropBoxOpen}
        className={`border-gray2 hover:border-gray3 flex h-[52px] w-full cursor-pointer items-center justify-between rounded-[16px] border px-4 py-3`}
      >
        <p className={`${selectedValue ? 'text-black' : 'text-gray4'} button`}>
          {selectedValue ? selectedValue : initValue}
        </p>
        {isDropBoxOpen ? (
          <DropboxArrowUpIcon width={20} height={20} />
        ) : (
          <DropboxArrowDownIcon width={20} height={20} />
        )}
      </section>
      {isDropBoxOpen ? (
        <section className="border-gray2 absolute top-12 z-10 flex max-h-[420px] w-full flex-col overflow-auto rounded-[16px] border bg-white">
          <div className="flex flex-col">{children}</div>
        </section>
      ) : null}
    </div>
  )
}
