import TenStepSystemIntroSectionMobile from '@/components/landing/TenStepSystemIntroSectionMobile'
import AICareerNavigationSectionMobile from '@/components/landing/AICareerNavigationSectionMobile'
import PortfolioSupportSectionMobile from '@/components/landing/PortfolioSupportSectionMobile'
import KorfitStudySectionMobile from '@/components/landing/KorfitStudySectionMobile'
import Footer from '@/components/landing/Footer'

export default async function LandingPage() {
  return (
    <main>
      <TenStepSystemIntroSectionMobile />
      <AICareerNavigationSectionMobile />
      <PortfolioSupportSectionMobile />
      <KorfitStudySectionMobile />
      <Footer />
    </main>
  )
}
