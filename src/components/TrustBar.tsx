export default function TrustBar() {
    return (
        <div className="trust-bar">
            <div className="trust-container">
                <div className="trust-item">
                    <span style={{ fontSize: '2rem' }}>🏆</span>
                    <div>
                        <strong>Gas Safe Registered</strong>
                        <small style={{ display: 'block', color: 'var(--text-gray)' }}>Engineer #XXXXXX</small>
                    </div>
                </div>
                <div className="trust-item">
                    <span style={{ fontSize: '2rem' }}>⭐</span>
                    <div>
                        <strong>5 Star Rated</strong>
                        <small style={{ display: 'block', color: 'var(--text-gray)' }}>On Google Reviews</small>
                    </div>
                </div>
                <div className="trust-item">
                    <span style={{ fontSize: '2rem' }}>🛡️</span>
                    <div>
                        <strong>Fully Insured</strong>
                        <small style={{ display: 'block', color: 'var(--text-gray)' }}>Public Liability</small>
                    </div>
                </div>
                <div className="trust-item">
                    <span style={{ fontSize: '2rem' }}>⚡</span>
                    <div>
                        <strong>24/7 Response</strong>
                        <small style={{ display: 'block', color: 'var(--text-gray)' }}>Emergency Callouts</small>
                    </div>
                </div>
            </div>
        </div>
    );
}
