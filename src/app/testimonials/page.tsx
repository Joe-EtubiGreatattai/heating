import Testimonials from '@/components/Testimonials';
import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata = {
    title: "Customer Reviews | Direct Heating Ltd",
    description: "What our customers in North London say about our professional heating and plumbing services.",
};

export default function TestimonialsPage() {
    return (
        <>
            <Testimonials />
            <EmergencyCTA />
        </>
    );
}
