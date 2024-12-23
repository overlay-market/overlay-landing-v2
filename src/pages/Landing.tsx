import Hero from '../sections/Hero'
import OverlayLogoSection from '../sections/OverlayLogoSection'
import TrendingSection from '../sections/TrendingSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import GovernanceSection from '../sections/GovernanceSection'
import TradeEverythingSection from '../sections/TradeEverythingSection'
import AuditsSection from '../sections/AuditSection'
import WhitePaperSection from '../sections/WhitePaperSection'
import DynamicIndexesSection from '../sections/DynamicIndexesSection'
import VcSection from '../sections/VcSection'

const Landing: React.FC = () => {
    return (
        <>
            <Hero />
            <OverlayLogoSection />
            <VcSection />
            <DynamicIndexesSection />
            <TrendingSection />
            <HowItWorksSection />
            <GovernanceSection />
            <TradeEverythingSection />
            <AuditsSection />
            <WhitePaperSection />
        </>
    )
}

export default Landing;
