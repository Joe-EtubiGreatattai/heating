import Pricing from '@/components/Pricing';
import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata = {
    title: "Boiler Service & Installation Prices | Direct Heating Ltd",
    description: "Transparent heating and plumbing rates in North London. Competitive fixed prices for boiler servicing, safety checks, and repairs.",
};

export default function PricingPage() {
    return (
        <>
            <Pricing />
            <EmergencyCTA />
        </>
    );
}
