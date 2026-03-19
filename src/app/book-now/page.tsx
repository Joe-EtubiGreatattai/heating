import BookingCalendar from '@/components/BookingCalendar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BookNowPage() {
    return (
        <main>
            <Navbar />
            <div className="page-top" style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--light-gray)' }}>
                <BookingCalendar />
            </div>
            <Footer />
        </main>
    );
}
