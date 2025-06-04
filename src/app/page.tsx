import Header from '@/components/common/Header'
import RecruitCard from '@/components/recruit/RecruitCard'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-[160px]" />
      <div className="mt-[60px] md:px-5 lg:px-[200px] xl:px-[200px] 2xl:px-[200px]">
        <div className="title-lg">공고 전체</div>
        <div className="mt-[16px] grid grid-cols-4 gap-6">
          <RecruitCard />
          <RecruitCard />
          <RecruitCard />
          <RecruitCard />
          <RecruitCard />
          <RecruitCard />
          <RecruitCard />
          <RecruitCard />
          <RecruitCard />
        </div>
      </div>
    </div>
  )
}
