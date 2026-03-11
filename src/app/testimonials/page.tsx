import Testimonials from '@/components/Testimonials';
import EmergencyCTA from '@/components/EmergencyCTA';

export const metadata = {
    title: "North London Customer Reviews | Direct Heating Ltd",
    description: "Read why our customers rate us 5-stars for boiler installations and heating repairs in North London. Real experiences from local clients.",
};

export default function TestimonialsPage() {
    return (
        <div className="page-top">
            <Testimonials />
            <EmergencyCTA />
        </div>
    );
}
