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
          <RecruitCard recruitId={1} />
          <RecruitCard recruitId={2} />
          <RecruitCard recruitId={3} />
          <RecruitCard recruitId={4} />
          <RecruitCard recruitId={5} />
          <RecruitCard recruitId={6} />
          <RecruitCard recruitId={7} />
          <RecruitCard recruitId={8} />
          <RecruitCard recruitId={9} />
        </div>
      </div>
    </div>
  )
}
