interface InfoRowProps {
  label: string
  value: string
}

export default function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center">
      <div className="badge-sm text-gray4 w-[80px]">{label}</div>
      <p className="body-sm text-gray5">{value}</p>
    </div>
  )
}
