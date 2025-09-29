'use client'

import Header from '@/components/common/Header'
import Image from 'next/image'
import { EZIPData, KODICData, KORIData, KuuidData, ROOMIOData, StudyDataType } from '@/utils/study'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProjectDetailPage() {
  const pathName = usePathname()
  const [data, setData] = useState<StudyDataType>()

  useEffect(() => {
    switch (pathName.split('/')[3]) {
      case '1':
        return setData(ROOMIOData)
      case '2':
        return setData(EZIPData)
      case '3':
        return setData(KuuidData)
      case '4':
        return setData(KORIData)
      default:
        return setData(KODICData)
    }
  }, [pathName])

  return (
    <main className="relative mx-auto min-h-screen w-[375px] bg-white">
      <div className="">
        <Header headerType={'dynamic'} title={data?.projectTitle} />
        <div className="h-[40px]" />
        <div className="mt-[32px] flex flex-col gap-y-[20px] px-5">
          <section className="flex justify-between">
            <div className="relative h-[50px] w-[50px]">
              <Image src={data?.logoImage ?? '/logo.svg'} alt={'로고'} className="object-cover" fill />
            </div>
          </section>
          <p className="body-md">{data?.description}</p>
          <section className="border-gray2 flex flex-col gap-y-3 rounded-[20px] border p-5">
            <div className="flex items-center">
              <div className="badge-sm text-gray4 w-[80px]">프로젝트 설명</div>
              <p className="body-sm text-gray5">GIT 해커톤</p>
            </div>
            <div className="flex items-center">
              <div className="badge-sm text-gray4 w-[80px]">프로젝트 형태</div>
              <p className="body-sm text-gray5">웹/앱</p>
            </div>
            <div className="flex items-center">
              <div className="badge-sm text-gray4 w-[80px]">프로젝트 기간</div>
              <p className="body-sm text-gray5">2025. 09. 13 - 2025. 09. 14</p>
            </div>
            <div className="flex items-center">
              <div className="badge-sm text-gray4 w-[80px]">팀원</div>
              <div className="body-sm text-gray5">{data?.team}</div>
            </div>
            <div className="relative h-[188px] w-full rounded-[16px]">
              <Image
                src={data?.teamImage ?? '/logo.svg'}
                alt="사진"
                className="rounded-[16px] object-cover"
                fill
              ></Image>
            </div>
          </section>
        </div>
        <div className="mt-[24px]">
          {data?.pptImageUrls.map((pptImageUrl) => {
            return <Image alt="최종 장표 사진" src={pptImageUrl} key={pptImageUrl} width={375} height={210}></Image>
          })}
        </div>
      </div>
    </main>
  )
}
