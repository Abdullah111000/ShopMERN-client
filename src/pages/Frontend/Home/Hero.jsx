import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'


const Hero = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        })
    }, [])

    return (
        <>
            <section
                className="py-5"
                data-aos="fade-up"
                style={{
                    background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
                    minHeight: "88vh",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <span
                                className="badge mb-3 px-3 py-2"
                                style={{
                                    background: "rgba(34,197,94,0.15)",
                                    color: "#22c55e",
                                    border: "1px solid rgba(34,197,94,0.3)",
                                    borderRadius: "50px",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.05em"
                                }}
                            >
                                🛒 New Arrivals Every Week
                            </span>
                            <h1
                                className="fw-bold mb-4"
                                style={{
                                    fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                                    lineHeight: "1.15",
                                    color: "#ffffff"
                                }}
                            >
                                Shop the Future,{" "}
                                <span style={{
                                    background: "linear-gradient(90deg, #22c55e, #16a34a)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text"
                                }}>
                                    Today
                                </span>
                            </h1>
                            <p
                                className="mb-5"
                                style={{
                                    fontSize: "1.15rem",
                                    color: "rgba(255,255,255,0.7)",
                                    maxWidth: "480px",
                                    lineHeight: "1.7"
                                }}
                            >
                                Discover thousands of premium products with lightning-fast delivery,
                                unbeatable prices, and a seamless shopping experience.
                            </p>
                            <div className="d-flex gap-3 flex-wrap">
                                <Link
                                    to="/product"
                                    className="btn btn-lg px-4 py-3 fw-semibold"
                                    style={{
                                        background: "linear-gradient(135deg, #22c55e, #16a34a)",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "12px",
                                        boxShadow: "0 4px 20px rgba(34,197,94,0.4)",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                                >
                                    🛍️ Shop Now
                                </Link>
                                <Link
                                    to="/auth/register"
                                    className="btn btn-lg px-4 py-3 fw-semibold"
                                    style={{
                                        background: "transparent",
                                        color: "#ffffff",
                                        border: "1px solid rgba(255,255,255,0.3)",
                                        borderRadius: "12px",
                                        backdropFilter: "blur(10px)",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = "rgba(255,255,255,0.1)"
                                        e.currentTarget.style.transform = "translateY(-2px)"
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = "transparent"
                                        e.currentTarget.style.transform = "translateY(0)"
                                    }}
                                >
                                    Get Started Free
                                </Link>
                            </div>

                            {/* Trust badges */}
                            <div className="d-flex gap-4 mt-5 flex-wrap">
                                {[
                                    { icon: "🚚", text: "Free Shipping" },
                                    { icon: "🔒", text: "Secure Checkout" },
                                    { icon: "↩️", text: "Easy Returns" }
                                ].map((badge, i) => (
                                    <div key={i} className="d-flex align-items-center gap-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
                                        <span style={{ fontSize: "1.1rem" }}>{badge.icon}</span>
                                        <span>{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                            <div style={{ position: "relative" }}>
                                {/* Decorative glow */}
                                <div style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "80%",
                                    height: "80%",
                                    background: "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)",
                                    borderRadius: "50%",
                                    filter: "blur(40px)",
                                    pointerEvents: "none"
                                }} />
                                <img
                                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=870&auto=format&fit=crop"
                                    alt="E-commerce Shopping"
                                    style={{
                                        width: "100%",
                                        height: "clamp(280px, 45vw, 520px)",
                                        objectFit: "cover",
                                        borderRadius: "24px",
                                        boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
                                        border: "1px solid rgba(255,255,255,0.1)"
                                    }}
                                />

                                {/* Floating badge */}
                                <div style={{
                                    position: "absolute",
                                    bottom: "24px",
                                    left: "-20px",
                                    background: "#fff",
                                    borderRadius: "16px",
                                    padding: "12px 18px",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    minWidth: "180px"
                                }}>
                                    <span style={{ fontSize: "2rem" }}>📦</span>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1a1a1a" }}>75K+ Orders</div>
                                        <div style={{ fontSize: "0.78rem", color: "#6b7280" }}>Delivered Successfully</div>
                                    </div>
                                </div>

                                {/* Floating badge 2 */}
                                <div style={{
                                    position: "absolute",
                                    top: "24px",
                                    right: "-10px",
                                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                                    borderRadius: "14px",
                                    padding: "10px 16px",
                                    boxShadow: "0 8px 25px rgba(34,197,94,0.4)",
                                    color: "#fff",
                                    textAlign: "center"
                                }}>
                                    <div style={{ fontWeight: 800, fontSize: "1.3rem" }}>⭐ 4.9</div>
                                    <div style={{ fontSize: "0.75rem", opacity: 0.9 }}>Customer Rating</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero