import RecruitHomePage from '@/components/recruit/RecruitHomePage'
import GATracker from '@/components/common/GoogleAnalytics'

export default function Home() {
  return (
    <>
      <GATracker />
      <RecruitHomePage />
    </>
  )
}
