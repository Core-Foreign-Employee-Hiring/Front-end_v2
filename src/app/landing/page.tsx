import TenStepSystemIntroSectionDesktop from '@/components/landing/TenStepSystemIntroSectionDesktop'
import AICareerNavigationSectionDesktop from '@/components/landing/AICareerNavigationSectionDesktop'
import PortfolioSupportSectionDesktop from '@/components/landing/PortfolioSupportSectionDesktop'
import KorfitStudySectionDesktop from '@/components/landing/KorfitStudySectionDesktop'
import Header from '@/components/common/Header'
import TenStepSystemIntroSectionMobile from '@/components/landing/TenStepSystemIntroSectionMobile'
import AICareerNavigationSectionMobile from '@/components/landing/AICareerNavigationSectionMobile'
import PortfolioSupportSectionMobile from '@/components/landing/PortfolioSupportSectionMobile'
import KorfitStudySectionMobile from '@/components/landing/KorfitStudySectionMobile'
import Footer from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-[375px] flex-col items-center justify-center overflow-hidden pt-[80px]">
          <TenStepSystemIntroSectionMobile />
          <AICareerNavigationSectionMobile />
          <PortfolioSupportSectionMobile />
          <KorfitStudySectionMobile />
          <Footer />
        </div>
        {/*<div className="flex flex-col items-center justify-center">*/}
        {/*  <TenStepSystemIntroSectionDesktop />*/}
        {/*  <AICareerNavigationSectionDesktop />*/}
        {/*  <PortfolioSupportSectionDesktop />*/}
        {/*  <KorfitStudySectionDesktop />*/}
        {/*  <div className="absolute top-1200 w-full">*/}
        {/*    <Footer></Footer>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </main>
  )
}
