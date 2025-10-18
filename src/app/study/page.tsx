import StudyCard from '@/components/study/StudyCard'

export default async function StudyPage() {
  return (
    <div className="px-5">
      {/* 스터디 title */}
      <section className="title-md mt-[32px] flex">
        <h1>스터디</h1>
        <p className="text-main ml-3">1</p>
        <p className="ml-[5px]">건</p>
      </section>

      {/* 스터디 본문 */}
      <section className="mt-[20px] flex flex-col gap-y-[32px] px-[17.5px]">
        <StudyCard
          memberCount={26}
          title={'GIT 해커톤'}
          description={'Korfit과 충북 pro 메이커센터에서 주최하는 1박 2일 글로벌 IT 해커톤'}
          period={'2025. 09. 13 - 2025. 09. 14'}
          teamCount={5}
        />
      </section>
    </div>
  )
}
