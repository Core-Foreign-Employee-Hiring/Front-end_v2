import Header from '@/components/common/Header'
import Image from 'next/image'
import { EZIPData, KODICData, KORIData, KuuidData, ROOMIOData, StudyDataType } from '@/utils/study'
import InfoRow from '@/components/study/InfoRow'

const PROJECT_DATA_MAP: Record<string, StudyDataType> = {
  '1': ROOMIOData,
  '2': EZIPData,
  '3': KuuidData,
  '4': KORIData,
  default: KODICData,
}

export async function generateStaticParams({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  return [
    { lang, 'study-id': '1', 'project-id': '1' },
    { lang, 'study-id': '1', 'project-id': '2' },
    { lang, 'study-id': '1', 'project-id': '3' },
    { lang, 'study-id': '1', 'project-id': '4' },
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; 'study-id': string; 'project-id': string }>
}) {
  const { 'project-id': projectId } = await params

  const data = PROJECT_DATA_MAP[projectId] || PROJECT_DATA_MAP['default']
  return {
    title: data.projectTitle,
    description: data.description,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; 'study-id': string; 'project-id': string }>
}) {
  const { lang, 'study-id': studyId, 'project-id': projectId } = await params

  const data = PROJECT_DATA_MAP[projectId] || PROJECT_DATA_MAP['default']

  return (
    <main className="relative mx-auto min-h-screen w-[375px] bg-white">
      <div>
        <div className="h-[40px]" />
        <div className="mt-[32px] flex flex-col gap-y-[20px] px-5">
          <section className="flex justify-between">
            <div className="relative h-[50px] w-[50px]">
              <Image
                src={data.logoImage ?? '/logo.svg'}
                alt={`${data.projectTitle} 로고`}
                className="object-cover"
                fill
                priority
                quality={80}
                fetchPriority="high"
                sizes="50px"
              />
            </div>
          </section>

          <p className="body-md">{data.description}</p>

          <section className="border-gray2 flex flex-col gap-y-3 rounded-[20px] border p-5">
            <InfoRow label="프로젝트 설명" value="GIT 해커톤" />
            <InfoRow label="프로젝트 형태" value="웹/앱" />
            <InfoRow label="프로젝트 기간" value="2025. 09. 13 - 2025. 09. 14" />
            <InfoRow label="팀원" value={data.team} />

            <div className="relative h-[188px] w-full overflow-hidden rounded-[16px]">
              <Image
                src={data.teamImage ?? '/logo.svg'}
                alt="팀 사진"
                fill
                priority
                quality={75}
                sizes="335px"
                fetchPriority="high"
                className="object-cover"
              />
            </div>
          </section>
        </div>

        <div className="mt-[24px]">
          {data.pptImageUrls.map((pptImageUrl, index) => (
            <Image
              key={pptImageUrl}
              alt="프로젝트 장표"
              src={pptImageUrl}
              width={375}
              height={210}
              loading={index === 0 ? 'eager' : 'lazy'}
              quality={70}
              sizes="(max-width: 375px) 375px, (max-width: 768px) 600px, 800px"
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
