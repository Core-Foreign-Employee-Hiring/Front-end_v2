import Image from 'next/image'
import { CalenderIcon, PersonIcon } from '@/assets/svgComponents'
import { useRouter } from 'next/navigation'

interface StudyCardProps {
  title: string
  description: string
  period: string
  teamCount: number
  memberCount: number
}

export default function StudyCard({ title, description, period, teamCount, memberCount }: StudyCardProps) {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push('/study/1')
      }}
      className="flex flex-col gap-y-3"
    >
      <div className="relative h-[175px] w-full">
        <Image
          priority
          src={'/study/git/group_photo.jpeg'}
          alt="스터디 카드"
          className="rounded-[16px] object-cover"
          fill
        ></Image>
        <div className="absolute z-10 h-[175px] w-full rounded-[12px] bg-gradient-to-t from-white to-black opacity-40" />
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="subtitle-md">{title}</p>
        <p className="body-md text-gray5">{description}</p>
        <div className="body-sm text-gray5 flex items-center gap-x-1">
          <div className="flex h-[20px] w-[20px] items-center justify-center">
            <CalenderIcon width={20} height={20} />
          </div>
          <p>{period}</p>
        </div>
        <div className="body-sm text-gray5 flex items-center gap-x-1">
          <div className="flex h-[20px] w-[20px] items-center justify-center">
            <PersonIcon width={16} height={16} />
          </div>
          <p>
            {teamCount}팀, {memberCount}명
          </p>
        </div>
      </div>
    </div>
  )
}
