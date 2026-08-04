import { useEffect } from "react"
import { Link } from "react-router-dom"
import Aos from "aos"


const PromoBanner = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true, easing: "ease-in-out" })
    }, [])

    return (
        <>
            <section
                data-aos="fade-up"
                style={{
                    background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
                    padding: "80px 0",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                {/* Background decorative circles */}
                <div style={{
                    position: "absolute", top: "-80px", right: "-80px",
                    width: "300px", height: "300px",
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.08)",
                    pointerEvents: "none"
                }} />
                <div style={{
                    position: "absolute", bottom: "-100px", left: "-60px",
                    width: "250px", height: "250px",
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.06)",
                    pointerEvents: "none"
                }} />

                <div className="container text-center position-relative">
                    {/* Promo badge */}
                    <span
                        className="badge px-4 py-2 mb-4 d-inline-block"
                        style={{
                            background: "rgba(34,197,94,0.15)",
                            color: "#22c55e",
                            border: "1px solid rgba(34,197,94,0.35)",
                            borderRadius: "50px",
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em"
                        }}
                    >
                        🎉 LIMITED TIME OFFER
                    </span>

                    <h2
                        className="fw-bold mb-3"
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            color: "#fff",
                            lineHeight: "1.2"
                        }}
                    >
                        Get{" "}
                        <span style={{
                            background: "linear-gradient(90deg, #22c55e, #86efac)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                        }}>
                            20% Off
                        </span>{" "}
                        Your First Order!
                    </h2>

                    <p className="mb-5" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
                        Sign up today and use code <strong style={{ color: "#22c55e" }}>SHOPMERN20</strong> at checkout.
                        Valid on orders above $30.
                    </p>

                    {/* Promo code pill */}
                    <div
                        className="d-inline-flex align-items-center gap-3 mb-5 px-4 py-3"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px dashed rgba(34,197,94,0.5)",
                            borderRadius: "14px",
                            backdropFilter: "blur(10px)"
                        }}
                    >
                        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>Promo Code:</span>
                        <span
                            style={{
                                fontFamily: "monospace",
                                fontWeight: 800,
                                fontSize: "1.2rem",
                                color: "#22c55e",
                                letterSpacing: "0.1em"
                            }}
                        >
                            SHOPMERN20
                        </span>
                    </div>

                    <br />

                    <div className="d-flex gap-3 justify-content-center flex-wrap mt-3">
                        <Link
                            to="/auth/register"
                            className="btn btn-lg px-5 py-3 fw-bold"
                            style={{
                                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "14px",
                                boxShadow: "0 6px 24px rgba(34,197,94,0.4)",
                                transition: "all 0.3s ease",
                                fontSize: "1rem"
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                        >
                            🛍️ Claim Your Discount
                        </Link>
                        <Link
                            to="/product"
                            className="btn btn-lg px-5 py-3 fw-semibold"
                            style={{
                                background: "transparent",
                                color: "#fff",
                                border: "1px solid rgba(255,255,255,0.3)",
                                borderRadius: "14px",
                                transition: "all 0.3s ease",
                                fontSize: "1rem"
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.1)"
                                e.currentTarget.style.transform = "translateY(-3px)"
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "transparent"
                                e.currentTarget.style.transform = "translateY(0)"
                            }}
                        >
                            Browse Products
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PromoBanner
