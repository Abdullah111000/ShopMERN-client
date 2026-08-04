import { useEffect } from "react"
import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"

const services = [
    {
        icon: "bi bi-mortarboard-fill",
        title: "E-Commerce Training",
        desc: "Comprehensive courses on Shopify, Amazon, eBay, and dropshipping. Learn from industry experts and launch your own online store.",
        color: "#22c55e",
        bg: "#f0fdf4"
    },
    {
        icon: "bi bi-shop-window",
        title: "Store Development",
        desc: "Custom web design, payment gateway integration, and user-friendly shopping platforms built to convert visitors into buyers.",
        color: "#3b82f6",
        bg: "#eff6ff"
    },
    {
        icon: "bi bi-box-seam-fill",
        title: "Product Sourcing",
        desc: "Global supplier networking, inventory management, and reliable supply chain logistics for your business.",
        color: "#f59e0b",
        bg: "#fffbeb"
    },
    {
        icon: "bi bi-megaphone-fill",
        title: "Digital Marketing",
        desc: "Targeted social media ads, SEO optimization, and data-driven strategies to maximize your sales conversion rates.",
        color: "#ef4444",
        bg: "#fef2f2"
    },
    {
        icon: "bi bi-headset",
        title: "Customer Support",
        desc: "24/7 order tracking, returns management, and seamless live-chat assistance ensuring your customers are always satisfied.",
        color: "#8b5cf6",
        bg: "#f5f3ff"
    },
    {
        icon: "bi bi-graph-up-arrow",
        title: "Marketplace Operations",
        desc: "Product listing optimization, account health management, and global scaling strategies to maximize revenue.",
        color: "#ec4899",
        bg: "#fdf2f8"
    },
]

const Serv = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true, easing: "ease-in-out" })
    }, [])

    return (
        <>
            {/* Hero */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
                    padding: "80px 0 70px"
                }}
                data-aos="fade-down"
            >
                <div className="container text-center">
                    <span
                        className="badge px-3 py-2 mb-3"
                        style={{
                            background: "rgba(34,197,94,0.15)",
                            color: "#22c55e",
                            border: "1px solid rgba(34,197,94,0.3)",
                            borderRadius: "50px",
                            fontSize: "0.82rem",
                            fontWeight: 600
                        }}
                    >
                        WHAT WE OFFER
                    </span>
                    <h1
                        className="fw-bold mb-3"
                        style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3rem)" }}
                    >
                        Our{" "}
                        <span style={{
                            background: "linear-gradient(90deg, #22c55e, #86efac)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                        }}>
                            Services
                        </span>
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
                        Everything you need to build, grow, and scale your e-commerce business — all under one roof.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-5" style={{ background: "#f8fafc" }}>
                <div className="container">
                    <div className="row g-4">
                        {services.map((s, i) => (
                            <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div
                                    className="h-100 p-4"
                                    style={{
                                        borderRadius: "20px",
                                        background: "#fff",
                                        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                                        border: "1px solid rgba(0,0,0,0.04)",
                                        transition: "all 0.3s ease",
                                        position: "relative",
                                        overflow: "hidden"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-8px)"
                                        e.currentTarget.style.boxShadow = `0 20px 50px ${s.color}22`
                                        e.currentTarget.style.borderColor = `${s.color}30`
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0)"
                                        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)"
                                        e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)"
                                    }}
                                >
                                    {/* Color accent bottom bar */}
                                    <div style={{
                                        position: "absolute",
                                        bottom: 0, left: 0, right: 0,
                                        height: "3px",
                                        background: s.color,
                                        borderRadius: "0 0 20px 20px",
                                        opacity: 0.7
                                    }} />

                                    <div
                                        className="d-flex align-items-center justify-content-center mb-4"
                                        style={{
                                            width: "72px", height: "72px",
                                            borderRadius: "18px",
                                            background: s.bg,
                                            border: `2px solid ${s.color}25`
                                        }}
                                    >
                                        <i className={s.icon} style={{ fontSize: "32px", color: s.color }} />
                                    </div>

                                    <h4 className="fw-bold mb-2" style={{ color: "#1a1a2e", fontSize: "1.1rem" }}>
                                        {s.title}
                                    </h4>
                                    <p className="text-muted mb-0" style={{ lineHeight: "1.75", fontSize: "0.92rem" }}>
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section
                data-aos="fade-up"
                style={{
                    background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
                    padding: "70px 0",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                {/* Decorative circles */}
                <div style={{
                    position: "absolute", top: "-60px", right: "-60px",
                    width: "220px", height: "220px", borderRadius: "50%",
                    background: "rgba(34,197,94,0.08)", pointerEvents: "none"
                }} />
                <div style={{
                    position: "absolute", bottom: "-80px", left: "-40px",
                    width: "200px", height: "200px", borderRadius: "50%",
                    background: "rgba(34,197,94,0.06)", pointerEvents: "none"
                }} />

                <div className="container text-center position-relative">
                    <h2 className="fw-bold mb-3" style={{ color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>
                        Ready to Grow Your{" "}
                        <span style={{
                            background: "linear-gradient(90deg, #22c55e, #86efac)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                        }}>
                            Business?
                        </span>
                    </h2>
                    <p className="mb-4" style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
                        Get in touch with our team today and let us help you build the e-commerce store of your dreams.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                        <Link
                            to="/contact"
                            className="btn btn-lg px-5 py-3 fw-bold"
                            style={{
                                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "14px",
                                boxShadow: "0 6px 24px rgba(34,197,94,0.4)",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                        >
                            Contact Us Now
                        </Link>
                        <Link
                            to="/product"
                            className="btn btn-lg px-5 py-3 fw-semibold"
                            style={{
                                background: "transparent",
                                color: "#fff",
                                border: "1px solid rgba(255,255,255,0.3)",
                                borderRadius: "14px",
                                transition: "all 0.3s ease"
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

export default Serv