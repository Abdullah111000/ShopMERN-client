import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const PageNotFound = () => {
    const floatRef = useRef(null)

    useEffect(() => {
        Aos.init({ duration: 800, once: true, easing: 'ease-out-cubic' })

        // Floating animation for 404 number
        let start = null
        const animate = (timestamp) => {
            if (!start) start = timestamp
            const elapsed = timestamp - start
            if (floatRef.current) {
                floatRef.current.style.transform = `translateY(${Math.sin(elapsed / 1200) * 14}px)`
            }
            requestAnimationFrame(animate)
        }
        const id = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(id)
    }, [])

    return (
        <div
            style={{
                minHeight: '75vh',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #1a1a2e 100%)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '60px 20px',
            }}
        >
            {/* Animated background orbs */}
            <div style={{
                position: 'absolute', top: '10%', left: '8%',
                width: '280px', height: '280px',
                background: 'radial-gradient(circle, rgba(29,53,87,0.55) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
                animation: 'pulse-orb 4s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute', bottom: '15%', right: '10%',
                width: '220px', height: '220px',
                background: 'radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none',
                animation: 'pulse-orb 5s ease-in-out infinite reverse'
            }} />
            <div style={{
                position: 'absolute', top: '50%', right: '5%',
                width: '160px', height: '160px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
            }} />

            {/* Dotted grid pattern */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                pointerEvents: 'none',
            }} />

            <style>{`
                @keyframes pulse-orb {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.15); }
                }
                .pnf-btn-primary {
                    background: linear-gradient(135deg, #1d3557, #457b9d);
                    color: #fff;
                    border: none;
                    border-radius: 14px;
                    padding: 13px 30px;
                    font-weight: 600;
                    font-size: 1rem;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 6px 24px rgba(29,53,87,0.5);
                    transition: all 0.3s ease;
                }
                .pnf-btn-primary:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 32px rgba(29,53,87,0.7);
                    color: #fff;
                }
                .pnf-btn-secondary {
                    background: transparent;
                    color: #fff;
                    border: 1.5px solid rgba(255,255,255,0.25);
                    border-radius: 14px;
                    padding: 13px 30px;
                    font-weight: 600;
                    font-size: 1rem;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }
                .pnf-btn-secondary:hover {
                    background: rgba(255,255,255,0.08);
                    border-color: rgba(255,255,255,0.5);
                    transform: translateY(-4px);
                    color: #fff;
                }
                .pnf-quick-link {
                    color: rgba(255,255,255,0.55);
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: color 0.2s;
                }
                .pnf-quick-link:hover { color: #fff; }
            `}</style>

            <div className="text-center position-relative" style={{ zIndex: 1 }}>

                {/* Floating 404 */}
                <div ref={floatRef} data-aos="fade-down" style={{ display: 'inline-block', marginBottom: '8px' }}>
                    <span style={{
                        fontSize: 'clamp(7rem, 18vw, 12rem)',
                        fontWeight: 900,
                        lineHeight: 0.85,
                        letterSpacing: '-0.05em',
                        background: 'linear-gradient(180deg, #ffffff 20%, rgba(255,255,255,0.08) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        display: 'block',
                        filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.08))',
                        userSelect: 'none',
                    }}>
                        404
                    </span>
                </div>

                {/* Status badge */}
                <div data-aos="fade-up" data-aos-delay="100" style={{ marginBottom: '20px' }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(239,68,68,0.15)',
                        border: '1px solid rgba(239,68,68,0.35)',
                        color: '#f87171',
                        borderRadius: '50px',
                        padding: '5px 16px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f87171', display: 'inline-block' }} />
                        Page Not Found
                    </span>
                </div>

                {/* Heading */}
                <h1
                    data-aos="fade-up"
                    data-aos-delay="150"
                    style={{
                        fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '14px',
                        lineHeight: 1.2,
                    }}
                >
                    Oops! Lost in the void
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    style={{
                        maxWidth: '480px',
                        margin: '0 auto 36px',
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
                        lineHeight: 1.7,
                    }}
                >
                    The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>

                {/* CTA Buttons */}
                <div data-aos="fade-up" data-aos-delay="250" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
                    <Link to="/" className="pnf-btn-primary">
                        <i className="bi bi-house-door-fill" />
                        Back to Home
                    </Link>
                    <Link to="/product" className="pnf-btn-secondary">
                        <i className="bi bi-bag-fill" />
                        Explore Products
                    </Link>
                </div>

                {/* Quick Links */}
                <div data-aos="fade-up" data-aos-delay="300">
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>
                        Quick Links
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <Link to="/about" className="pnf-quick-link">About Us</Link>
                        <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                        <Link to="/services" className="pnf-quick-link">Services</Link>
                        <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                        <Link to="/contact" className="pnf-quick-link">Contact</Link>
                        <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                        <Link to="/auth/login" className="pnf-quick-link">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
