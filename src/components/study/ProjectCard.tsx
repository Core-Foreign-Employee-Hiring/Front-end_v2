'use client'
import { PersonIcon } from '@/assets/svgComponents'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProjectCardProps {
  projectImageUrl: string
  projectName: string
  description: string
  teamName: string
  id: number
}

export default function ProjectCard({ projectImageUrl, projectName, description, teamName, id }: ProjectCardProps) {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push(`/study/1/${id}`)
      }}
      className="flex flex-col gap-y-3"
    >
      <div className="relative h-[175px] w-full">
        <Image src={projectImageUrl} alt="스터디 카드" className="rounded-[16px] object-cover" fill />
        <div className="absolute z-10 h-[175px] w-full rounded-[12px] bg-gradient-to-t from-white to-black opacity-40" />
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="subtitle-md">{projectName}</p>
        <p className="body-md text-gray5">{description}</p>
        <div className="flex gap-x-1">
          <div className="flex h-[20px] w-[20px] items-center justify-center">
            <PersonIcon width={16} height={16} />
          </div>
          <p className="body-sm text-gray5">팀 {teamName}</p>
        </div>
      </div>
    </div>
  )
}
