'use client';
import { useState, useEffect, useMemo } from 'react';
import { CheckCircle2, AlertCircle, X, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';

export default function BookingCalendar() {
    // Calendar State
    const [viewDate, setViewDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [bookedSlots, setBookedSlots] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [bookingStatus, setBookingStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [settings, setSettings] = useState({ openingTime: '08:00', closingTime: '18:00', slotDuration: 60 });

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        note: ''
    });

    useEffect(() => {
        fetchSettings();
    }, []);

    useEffect(() => {
        if (selectedDate) {
            fetchBookings();
        }
    }, [selectedDate]);

    const fetchSettings = async () => {
        try {
            const res = await fetch('https://direct-heating.duckdns.org/api/settings');
            const data = await res.json();
            setSettings(data);
        } catch (error) {
            console.error('Error fetching settings:', error);
        }
    };

    const fetchBookings = async () => {
        if (!selectedDate) return;
        setLoading(true);
        try {
            const res = await fetch(`https://direct-heating.duckdns.org/api/bookings?date=${selectedDate}`);
            const data = await res.json();
            setBookedSlots(data.filter((b: any) => b.status !== 'rejected').map((b: any) => b.timeSlot));
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
        setLoading(false);
    };

    const generatedSlots = useMemo(() => {
        const { openingTime, closingTime, slotDuration } = settings;
        const start = parseInt(openingTime.split(':')[0]) * 60 + parseInt(openingTime.split(':')[1]);
        const end = parseInt(closingTime.split(':')[0]) * 60 + parseInt(closingTime.split(':')[1]);
        const newSlots = [];
        for (let time = start; time < end; time += slotDuration) {
            const h = Math.floor(time / 60).toString().padStart(2, '0');
            const m = (time % 60).toString().padStart(2, '0');
            newSlots.push(`${h}:${m}`);
        }
        return newSlots;
    }, [settings]);

    const handleBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        try {
            const res = await fetch('https://direct-heating.duckdns.org/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    date: selectedDate,
                    timeSlot: selectedSlot
                })
            });
            if (res.ok) {
                setBookingStatus('success');
                setFormData({ fullName: '', email: '', note: '' });
                setSelectedSlot('');
                fetchBookings(); // Refresh slots
            } else {
                const err = await res.json();
                setBookingStatus('error');
                setErrorMessage(err.error || 'Booking failed');
            }
        } catch (error) {
            setBookingStatus('error');
            setErrorMessage('Could not connect to server. Please try again later.');
        }
        setLoading(false);
    };

    const closeForm = () => {
        setShowForm(false);
        setBookingStatus('idle');
        setErrorMessage('');
    };

    // Calendar Logic
    const calendarDays = useMemo(() => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];
        // Pad start (Monday is 1, Sunday is 0 in JS, but we want Monday to be first day)
        const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
        for (let i = 0; i < adjustedFirstDay; i++) days.push(null);

        // Month days
        for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));

        return days;
    }, [viewDate]);

    const handlePrevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    const handleNextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));

    const isToday = (date: Date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const isPast = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const formatToISOValue = (date: Date) => {
        const d = new Date(date);
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
        return d.toISOString().split('T')[0];
    };

    return (
        <section id="booking" className="booking-section" style={{ padding: '6rem 0', background: '#fcfcfc' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div className="booking-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-1.5px' }}>Book Your Service</h2>
                    <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Professional heating solutions at your fingertips. Guaranteed slots with transparent pricing.
                    </p>
                </div>

                <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                    {/* Calendar Column */}
                    <div className="calendar-card" style={{ background: 'white', padding: '2rem', borderRadius: '35px', boxShadow: '0 30px 60px rgba(0,0,0,0.06)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                                {viewDate.toLocaleString('default', { month: 'long' })} {viewDate.getFullYear()}
                            </h3>
                            <div style={{ display: 'flex', gap: '0.6rem' }}>
                                <button onClick={handlePrevMonth} className="cal-btn"><ChevronLeft size={18} /></button>
                                <button onClick={handleNextMonth} className="cal-btn"><ChevronRight size={18} /></button>
                            </div>
                        </div>

                        <div className="calendar-month-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.3rem', marginBottom: '1rem' }}>
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                                <div key={`${day}-${i}`} style={{ textAlign: 'center', fontWeight: 800, fontSize: '0.75rem', color: 'var(--accent)', opacity: 0.6, marginBottom: '0.8rem' }}>{day}</div>
                            ))}
                            {calendarDays.map((date, idx) => {
                                if (!date) return <div key={`empty-${idx}`} />;
                                const isoDate = formatToISOValue(date);
                                const isSelected = selectedDate === isoDate;
                                const past = isPast(date);

                                return (
                                    <button
                                        key={isoDate}
                                        disabled={past}
                                        onClick={() => setSelectedDate(isoDate)}
                                        className={`day-btn ${isSelected ? 'selected' : ''} ${past ? 'past' : ''} ${isToday(date) ? 'today' : ''}`}
                                    >
                                        {date.getDate()}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Slots Column */}
                    <div className="slots-wrapper" style={{ minHeight: '300px' }}>
                        {!selectedDate ? (
                            <div className="no-selection" style={{ height: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', border: '3px dashed #f0f0f0', borderRadius: '35px' }}>
                                <CalendarIcon size={56} style={{ color: '#e0e0e0', marginBottom: '1.5rem' }} />
                                <h4 style={{ fontSize: '1.2rem', color: '#bbb', fontWeight: 600 }}>Please select a date on the calendar to view available slots.</h4>
                            </div>
                        ) : (
                            <div style={{ animation: 'slideIn 0.4s ease-out' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ background: 'var(--accent)', color: 'white', padding: '0.7rem', borderRadius: '12px' }}>
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>Available Times</h3>
                                        <p style={{ color: 'var(--text-gray)', margin: 0, fontSize: '0.9rem' }}>{new Date(selectedDate).toLocaleDateString(undefined, { dateStyle: 'full' })}</p>
                                    </div>
                                </div>

                                {loading ? (
                                    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--accent)' }}>Searching slots...</div>
                                ) : (
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.8rem' }}>
                                        {generatedSlots.map(slot => {
                                            const isBooked = bookedSlots.includes(slot);
                                            return (
                                                <button
                                                    key={slot}
                                                    disabled={isBooked}
                                                    onClick={() => {
                                                        setSelectedSlot(slot);
                                                        setShowForm(true);
                                                    }}
                                                    className={`slot-btn ${isBooked ? 'booked' : ''}`}
                                                >
                                                    {slot}
                                                </button>
                                            );
                                        })}
                                        {generatedSlots.length === 0 && <p style={{ color: 'var(--text-gray)' }}>No slots available for this day.</p>}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {showForm && (
                    <div className="modal-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 4000, padding: '1rem', animation: 'fadeIn 0.3s ease-out' }}>
                        <div className="modal-content" style={{ background: 'white', padding: '2.5rem', borderRadius: '35px', width: '100%', maxWidth: '500px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
                            <button onClick={closeForm} style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: '#f5f5f5', border: 'none', cursor: 'pointer', color: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}><X size={20} /></button>

                            {bookingStatus === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                                    <div style={{ color: 'var(--success)', marginBottom: '1.5rem', animation: 'scaleUp 0.5s ease-out' }}>
                                        <CheckCircle2 size={72} strokeWidth={1.5} />
                                    </div>
                                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Booking Sent!</h2>
                                    <p style={{ color: 'var(--text-gray)', fontSize: '1rem', lineHeight: '1.6' }}>
                                        Request received for <strong>{selectedDate}</strong> at <strong>{selectedSlot}</strong>.
                                        We'll email you once confirmed.
                                    </p>
                                    <button onClick={closeForm} className="btn btn-primary" style={{ marginTop: '2.5rem', width: '100%', justifyContent: 'center' }}>Great!</button>
                                </div>
                            ) : (
                                <>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Complete Booking</h3>
                                    {selectedDate && <p style={{ marginBottom: '2rem', color: 'var(--text-gray)', fontSize: '0.9rem' }}>{new Date(selectedDate).toLocaleDateString()} @ {selectedSlot}</p>}

                                    {bookingStatus === 'error' && (
                                        <div style={{ background: '#fff5f5', color: '#e53e3e', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                                            <AlertCircle size={16} style={{ marginBottom: '-3px', marginRight: '5px' }} /> {errorMessage}
                                        </div>
                                    )}

                                    <form onSubmit={handleBooking}>
                                        <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>Full Name *</label>
                                            <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} style={{ width: '100%', padding: '0.9rem', borderRadius: '12px', border: '2px solid #f0f0f0' }} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>Email Address *</label>
                                            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '0.9rem', borderRadius: '12px', border: '2px solid #f0f0f0' }} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '2rem' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>Note</label>
                                            <textarea value={formData.note} onChange={(e) => setFormData({ ...formData, note: e.target.value })} style={{ width: '100%', padding: '0.9rem', borderRadius: '12px', border: '2px solid #f0f0f0', minHeight: '100px' }}></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', height: '55px' }} disabled={loading}>
                                            {loading ? 'Processing...' : 'Request Booking'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .booking-section { padding: 4rem 0 !important; }
                    .booking-header h2 { fontSize: 2.2rem !important; }
                    .booking-grid { gridTemplateColumns: 1fr !important; }
                    .calendar-card { padding: 1.5rem !important; border-radius: 25px !important; }
                    .no-selection { height: 250px !important; border-radius: 25px !important; }
                }

                .cal-btn {
                    padding: 0.5rem;
                    border: 2px solid #f5f5f5;
                    background: white;
                    border-radius: 12px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .day-btn {
                    aspect-ratio: 1;
                    border-radius: 50%;
                    border: none;
                    background: transparent;
                    font-weight: 700;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .day-btn:hover:not(.past) {
                    background: #f8f8f8;
                    color: var(--accent);
                }
                .day-btn.selected {
                    background: var(--accent) !important;
                    color: white !important;
                    box-shadow: 0 10px 20px rgba(201, 169, 98, 0.3);
                }
                .day-btn.today {
                    color: var(--accent);
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
                .day-btn.past {
                    opacity: 0.2;
                    cursor: not-allowed;
                }
                .slot-btn {
                    padding: 1.2rem 1rem;
                    border-radius: 18px;
                    border: 2px solid #f0f0f0;
                    background: white;
                    font-weight: 800;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.25s;
                }
                .slot-btn:hover:not(.booked) {
                    border-color: var(--accent);
                    background: #fffdf8;
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                }
                .slot-btn.booked {
                    opacity: 0.3;
                    cursor: not-allowed;
                }
                @keyframes slideIn {
                    from { transform: translateY(15px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleUp {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </section>
    );
}
