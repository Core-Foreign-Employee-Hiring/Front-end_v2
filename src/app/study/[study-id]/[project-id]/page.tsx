// app/projects/[id]/page.tsx
import Header from '@/components/common/Header'
import Image from 'next/image'
import { EZIPData, KODICData, KORIData, KuuidData, ROOMIOData, StudyDataType } from '@/utils/study'
import InfoRow from '@/components/study/InfoRow'

// 프로젝트 ID와 데이터를 매핑하는 객체
const PROJECT_DATA_MAP: Record<string, StudyDataType> = {
  '1': ROOMIOData,
  '2': EZIPData,
  '3': KuuidData,
  '4': KORIData,
  default: KODICData,
}

// 페이지에서 사용할 정적 파라미터 생성 (빌드 타임에 미리 생성)
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
}

// 페이지 메타데이터 (SEO 최적화)
export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = PROJECT_DATA_MAP[params.id] || PROJECT_DATA_MAP['default']
  return {
    title: data.projectTitle,
    description: data.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // 유효한 ID인지 확인, 없으면 404 페이지 표시
  const data = PROJECT_DATA_MAP[params.id] || PROJECT_DATA_MAP['default']

  return (
    <main className="relative mx-auto min-h-screen w-[375px] bg-white">
      <div>
        <Header headerType={'dynamic'} title={data.projectTitle} />
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
              <Image src={data.teamImage ?? '/logo.svg'} alt="팀 사진" className="object-cover" fill />
            </div>
          </section>
        </div>

        <div className="mt-[24px]">
          {data.pptImageUrls.map((pptImageUrl) => (
            <Image key={pptImageUrl} alt="프로젝트 장표" src={pptImageUrl} width={375} height={210} />
          ))}
        </div>
      </div>
    </main>
  )
}
