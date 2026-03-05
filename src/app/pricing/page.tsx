import Pricing from '@/components/Pricing';
import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata = {
    title: "Transparent Pricing | Direct Heating Ltd",
    description: "Competitive and transparent pricing for boiler services, installations, and repairs in North London.",
};

export default function PricingPage() {
    return (
        <>
            <Pricing />
            <EmergencyCTA />
        </>
    );
}
