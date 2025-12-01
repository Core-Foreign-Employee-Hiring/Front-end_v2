import RecruitHomePage from '@/components/recruit/RecruitHomePage'
import GATracker from '@/components/common/GoogleAnalytics'

export default async function Home() {
  return (
    <>
      <GATracker />
      <RecruitHomePage />
    </>
  )
}
