import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const DashboardNotFound = () => {
    const floatRef = useRef(null)

    useEffect(() => {
        let start = null
        const animate = (timestamp) => {
            if (!start) start = timestamp
            const elapsed = timestamp - start
            if (floatRef.current) {
                floatRef.current.style.transform = `translateY(${Math.sin(elapsed / 1400) * 10}px)`
            }
            requestAnimationFrame(animate)
        }
        const id = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(id)
    }, [])

    return (
        <div
            style={{
                minHeight: '78vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(145deg, #0d1b2a 0%, #1d3557 60%, #0d1b2a 100%)',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                padding: '48px 24px',
            }}
        >
            {/* Background orbs */}
            <div style={{
                position: 'absolute', top: '15%', left: '12%',
                width: '260px', height: '260px',
                background: 'radial-gradient(circle, rgba(69,123,157,0.35) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
                animation: 'dash-orb 5s ease-in-out infinite',
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', right: '10%',
                width: '200px', height: '200px',
                background: 'radial-gradient(circle, rgba(29,53,87,0.6) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none',
                animation: 'dash-orb 6s ease-in-out infinite reverse',
            }} />

            {/* Grid dots */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                pointerEvents: 'none',
            }} />

            <style>{`
                @keyframes dash-orb {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.9; transform: scale(1.2); }
                }
                .dash-pnf-back {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: linear-gradient(135deg, #457b9d, #1d3557);
                    color: #fff;
                    border: none;
                    border-radius: 12px;
                    padding: 12px 28px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    text-decoration: none;
                    box-shadow: 0 6px 24px rgba(69,123,157,0.45);
                    transition: all 0.3s ease;
                }
                .dash-pnf-back:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 30px rgba(69,123,157,0.65);
                    color: #fff;
                }
                .dash-pnf-home {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255,255,255,0.07);
                    color: rgba(255,255,255,0.85);
                    border: 1.5px solid rgba(255,255,255,0.18);
                    border-radius: 12px;
                    padding: 12px 28px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    text-decoration: none;
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                }
                .dash-pnf-home:hover {
                    background: rgba(255,255,255,0.13);
                    border-color: rgba(255,255,255,0.4);
                    transform: translateY(-3px);
                    color: #fff;
                }
            `}</style>

            <div className="text-center position-relative" style={{ zIndex: 1 }}>

                {/* Floating 404 */}
                <div ref={floatRef} style={{ display: 'inline-block', marginBottom: '4px' }}>
                    <span style={{
                        fontSize: 'clamp(6rem, 16vw, 10rem)',
                        fontWeight: 900,
                        lineHeight: 0.85,
                        letterSpacing: '-0.04em',
                        background: 'linear-gradient(180deg, #ffffff 25%, rgba(255,255,255,0.07) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        display: 'block',
                        userSelect: 'none',
                    }}>
                        404
                    </span>
                </div>

                {/* Status badge */}
                <div style={{ marginBottom: '18px' }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(239,68,68,0.12)',
                        border: '1px solid rgba(239,68,68,0.3)',
                        color: '#fca5a5',
                        borderRadius: '50px',
                        padding: '4px 14px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f87171', display: 'inline-block' }} />
                        Page Not Found
                    </span>
                </div>

                {/* Heading */}
                <h2 style={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
                    marginBottom: '12px',
                    lineHeight: 1.25,
                }}>
                    This page doesn't exist
                </h2>

                <p style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.98rem',
                    maxWidth: '400px',
                    margin: '0 auto 32px',
                    lineHeight: 1.7,
                }}>
                    The dashboard page you're looking for couldn't be found. It may have been removed or the URL might be wrong.
                </p>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/dashboard" className="dash-pnf-back">
                        <i className="bi bi-speedometer2" />
                        Go to Dashboard
                    </Link>
                    <Link to="/" className="dash-pnf-home">
                        <i className="bi bi-house-door" />
                        Main Website
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardNotFound
