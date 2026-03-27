'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, XCircle, AlertCircle, Loader2, CalendarX } from 'lucide-react';

const API = 'https://direct-heating.duckdns.org/api';

type BookingInfo = {
    fullName: string;
    date: string;
    timeSlot: string;
    jobType: string;
    address: string;
    status: string;
};

function formatAmPm(time: string) {
    const [hStr, mStr] = time.split(':');
    const h = parseInt(hStr, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    return `${h % 12 || 12}:${mStr} ${ampm}`;
}

export default function CancelPage() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token') ?? '';

    const [booking, setBooking] = useState<BookingInfo | null>(null);
    const [phase, setPhase] = useState<'loading' | 'ready' | 'confirming' | 'done' | 'error'>('loading');
    const [errorMsg, setErrorMsg] = useState('');

    const loadBooking = useCallback(async () => {
        if (!token) {
            setPhase('error');
            setErrorMsg('No cancellation token provided. Please use the link from your confirmation email.');
            return;
        }
        try {
            const res = await fetch(`${API}/bookings/cancel/${encodeURIComponent(token)}`);
            const data = await res.json();
            if (!res.ok) {
                setPhase('error');
                setErrorMsg(data.error || 'Could not find your booking.');
                return;
            }
            setBooking(data as BookingInfo);
            setPhase(data.status === 'cancelled' ? 'done' : 'ready');
        } catch {
            setPhase('error');
            setErrorMsg('Could not connect to the server. Please try again later.');
        }
    }, [token]);

    useEffect(() => { void loadBooking(); }, [loadBooking]);

    const handleCancel = async () => {
        setPhase('confirming');
        try {
            const res = await fetch(`${API}/bookings/cancel/${encodeURIComponent(token)}`, { method: 'POST' });
            const data = await res.json();
            if (!res.ok) {
                setPhase('ready');
                setErrorMsg(data.error || 'Cancellation failed. Please try again.');
                return;
            }
            setPhase('done');
        } catch {
            setPhase('ready');
            setErrorMsg('Could not connect to the server. Please try again later.');
        }
    };

    return (
        <div style={{ minHeight: '100vh', background: '#fcfcfc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
            <div style={{ background: 'white', borderRadius: '24px', padding: '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.08)', width: '100%', maxWidth: '480px' }}>

                {/* Loading */}
                {phase === 'loading' && (
                    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <Loader2 size={48} style={{ color: 'var(--accent)', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }} />
                        <p style={{ color: 'var(--text-gray)' }}>Loading your booking…</p>
                    </div>
                )}

                {/* Error */}
                {phase === 'error' && (
                    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                        <XCircle size={56} style={{ color: '#e53e3e', margin: '0 auto 1.25rem' }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Link Invalid</h2>
                        <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, marginBottom: '2rem' }}>{errorMsg}</p>
                        <Link href="/" className="btn btn-primary" style={{ display: 'inline-block' }}>Back to Home</Link>
                    </div>
                )}

                {/* Ready to cancel */}
                {(phase === 'ready' || phase === 'confirming') && booking && (
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                            <div style={{ background: '#fff3cd', padding: '0.6rem', borderRadius: '12px' }}>
                                <CalendarX size={24} style={{ color: '#856404' }} />
                            </div>
                            <div>
                                <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>Cancel Booking</h2>
                                <p style={{ margin: 0, color: 'var(--text-gray)', fontSize: '0.9rem' }}>Review your booking details before cancelling</p>
                            </div>
                        </div>

                        <div style={{ background: '#f8f8f8', borderRadius: '14px', padding: '1.25rem', marginBottom: '1.5rem' }}>
                            {[
                                ['Name', booking.fullName],
                                ['Date', new Date(booking.date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })],
                                ['Time', formatAmPm(booking.timeSlot)],
                                ['Job Type', booking.jobType],
                                ['Address', booking.address],
                                ['Status', booking.status.charAt(0).toUpperCase() + booking.status.slice(1)],
                            ].map(([label, value]) => (
                                <div key={label} style={{ display: 'flex', gap: '0.75rem', padding: '0.5rem 0', borderBottom: '1px solid #eeeeee' }}>
                                    <span style={{ fontWeight: 600, color: 'var(--primary)', minWidth: '90px', flexShrink: 0, fontSize: '0.9rem' }}>{label}</span>
                                    <span style={{ color: 'var(--text-gray)', fontSize: '0.9rem', wordBreak: 'break-word' }}>{value}</span>
                                </div>
                            ))}
                        </div>

                        {errorMsg && (
                            <div style={{ background: '#fff5f5', color: '#e53e3e', padding: '0.875rem 1rem', borderRadius: '10px', marginBottom: '1.25rem', fontSize: '0.9rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                                {errorMsg}
                            </div>
                        )}

                        <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                            Are you sure you want to cancel this booking? This action cannot be undone.
                        </p>

                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <Link href="/" className="btn btn-secondary" style={{ flex: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                Keep Booking
                            </Link>
                            <button
                                className="btn btn-primary"
                                style={{ flex: 1, justifyContent: 'center', background: '#e53e3e', borderColor: '#e53e3e' }}
                                onClick={() => void handleCancel()}
                                disabled={phase === 'confirming'}
                            >
                                {phase === 'confirming' ? 'Cancelling…' : 'Yes, Cancel'}
                            </button>
                        </div>
                    </div>
                )}

                {/* Already cancelled or just cancelled */}
                {phase === 'done' && (
                    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                        <CheckCircle2 size={64} style={{ color: 'var(--success)', margin: '0 auto 1.25rem' }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>Booking Cancelled</h2>
                        <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Your booking has been cancelled. If you&apos;d like to rebook, we&apos;re happy to help.
                        </p>
                        <Link href="/#booking" className="btn btn-primary" style={{ display: 'inline-block' }}>Book Again</Link>
                    </div>
                )}
            </div>

            <style jsx global>{`
                @keyframes spin { to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
}
