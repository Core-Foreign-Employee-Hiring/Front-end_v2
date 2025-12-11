import { ReactNode } from 'react'

interface InfoProps {
  label?: string
  children: ReactNode
  className?: string
}
export default function Info({ className, children, label }: InfoProps) {
  if (!children) return null

  return (
    <div className={`${className} flex flex-col gap-y-3`}>
      {label ? <h2 className="title-md">{label}</h2> : null}
      <div>{children}</div>
    </div>
  )
}

function InfoCard({ children }: { children: ReactNode }) {
  if (!children) return null

  return <div className="border-gray2 rounded-[20px] border bg-white p-5">{children}</div>
}

function DetailRow({
  label,
  content,
  children,
  className,
}: {
  label: string
  content?: string | number | null | undefined
  children?: ReactNode
  className?: string
}) {
  if (!children && !content) return null

  return (
    <div className={`flex ${className}`}>
      <div className="subtitle-md text-gray4 w-[80px] whitespace-nowrap">{label}</div>
      {children ? (
        children
      ) : (
        <p className="body-md text-gray5 flex-1" style={{ whiteSpace: 'pre-wrap' }}>
          {content}
        </p>
      )}
    </div>
  )
}

Info.InfoCard = InfoCard
Info.DetailRow = DetailRow
