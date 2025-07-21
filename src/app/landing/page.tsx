import Footer from '@/components/common/Footer'
import TenStepSystemIntroSection from '@/components/landing/TenStepSystemIntroSection'
import AICareerNavigationSection from '@/components/landing/AICareerNavigationSection'
import PortfolioSupportSection from '@/components/landing/PortfolioSupportSection'
import KorfitStudySection from '@/components/landing/KorfitStudySection'

export default function LandingPage() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center">
        <TenStepSystemIntroSection />
        <AICareerNavigationSection />
        <PortfolioSupportSection />
        <KorfitStudySection />
        <div className="absolute top-1200 w-full">
          <Footer></Footer>
        </div>
      </div>
    </main>
  )
}
