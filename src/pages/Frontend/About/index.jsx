import { useEffect } from "react"
import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"

const team = [
    {
        name: "Sarah Johnson",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
        bio: "10+ years in e-commerce and supply chain management."
    },
    {
        name: "Michael Chen",
        role: "Head of Technology",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
        bio: "Full-stack engineer passionate about seamless UX."
    },
    {
        name: "Aisha Malik",
        role: "Customer Success Lead",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
        bio: "Dedicated to making every customer feel valued."
    },
]

const values = [
    { icon: "bi bi-gem", title: "Quality First", desc: "Every product is hand-picked and quality-checked before listing.", color: "#8b5cf6" },
    { icon: "bi bi-heart-fill", title: "Customer Love", desc: "We treat every customer like family — with care and respect.", color: "#ef4444" },
    { icon: "bi bi-globe2", title: "Global Reach", desc: "Delivering to 120+ cities across the country and growing.", color: "#3b82f6" },
    { icon: "bi bi-lightning-charge-fill", title: "Fast Delivery", desc: "Same-day and next-day delivery options for most locations.", color: "#f59e0b" },
]

const About = () => {
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
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
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
                                OUR STORY
                            </span>
                            <h1
                                className="fw-bold mb-4"
                                style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.2" }}
                            >
                                Redefining{" "}
                                <span style={{
                                    background: "linear-gradient(90deg, #22c55e, #86efac)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text"
                                }}>
                                    Online Shopping
                                </span>
                            </h1>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "500px" }}>
                                We bring you high-quality products while committing a portion of our profits
                                to education, welfare, and community development. Every purchase is a step
                                toward building a better world.
                            </p>
                            <Link
                                to="/product"
                                className="btn btn-lg px-5 py-3 fw-bold mt-3"
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
                                Start Shopping →
                            </Link>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in">
                            <img
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&auto=format&fit=crop"
                                alt="About ShopMERN"
                                style={{
                                    width: "100%",
                                    height: "380px",
                                    objectFit: "cover",
                                    borderRadius: "24px",
                                    boxShadow: "0 25px 60px rgba(0,0,0,0.4)"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-5" style={{ background: "#f8fafc" }} data-aos="fade-up">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold" style={{ color: "#1a1a2e", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                            What Drives <span style={{ color: "#22c55e" }}>Us</span>
                        </h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6" data-aos="fade-right">
                            <div
                                className="p-5 h-100"
                                style={{
                                    borderRadius: "20px",
                                    background: "#fff",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                                    borderLeft: "4px solid #22c55e"
                                }}
                            >
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div
                                        style={{
                                            width: "52px", height: "52px",
                                            borderRadius: "14px",
                                            background: "rgba(34,197,94,0.1)",
                                            display: "flex", alignItems: "center", justifyContent: "center"
                                        }}
                                    >
                                        <i className="bi bi-bullseye" style={{ fontSize: "24px", color: "#22c55e" }} />
                                    </div>
                                    <h3 className="fw-bold mb-0" style={{ color: "#1a1a2e" }}>Our Mission</h3>
                                </div>
                                <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                                    To offer top-tier products at fair prices while creating a positive social impact
                                    with every order. We believe commerce and compassion can co-exist — and we're
                                    proving it one delivery at a time.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div
                                className="p-5 h-100"
                                style={{
                                    borderRadius: "20px",
                                    background: "#fff",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                                    borderLeft: "4px solid #3b82f6"
                                }}
                            >
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div
                                        style={{
                                            width: "52px", height: "52px",
                                            borderRadius: "14px",
                                            background: "rgba(59,130,246,0.1)",
                                            display: "flex", alignItems: "center", justifyContent: "center"
                                        }}
                                    >
                                        <i className="bi bi-eye-fill" style={{ fontSize: "24px", color: "#3b82f6" }} />
                                    </div>
                                    <h3 className="fw-bold mb-0" style={{ color: "#1a1a2e" }}>Our Vision</h3>
                                </div>
                                <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                                    To pioneer social commerce — building a bridge between everyday shopping and
                                    community empowerment. We envision a world where every purchase you make
                                    directly fuels education and skill development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-5" data-aos="fade-up">
                <div className="container">
                    <div className="text-center mb-5">
                        <span
                            className="badge px-3 py-2 mb-3"
                            style={{
                                background: "rgba(34,197,94,0.1)",
                                color: "#16a34a",
                                border: "1px solid rgba(34,197,94,0.25)",
                                borderRadius: "50px",
                                fontSize: "0.82rem",
                                fontWeight: 600
                            }}
                        >
                            OUR VALUES
                        </span>
                        <h2 className="fw-bold" style={{ color: "#1a1a2e", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                            The Principles We <span style={{ color: "#22c55e" }}>Live By</span>
                        </h2>
                    </div>
                    <div className="row g-4">
                        {values.map((v, i) => (
                            <div key={i} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={i * 80}>
                                <div
                                    className="text-center p-4 h-100"
                                    style={{
                                        borderRadius: "20px",
                                        background: "#fff",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                        border: "1px solid rgba(0,0,0,0.04)",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-6px)"
                                        e.currentTarget.style.boxShadow = `0 16px 40px ${v.color}22`
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0)"
                                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)"
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center mx-auto mb-3"
                                        style={{
                                            width: "68px", height: "68px",
                                            borderRadius: "18px",
                                            background: `${v.color}12`,
                                            border: `2px solid ${v.color}25`
                                        }}
                                    >
                                        <i className={v.icon} style={{ fontSize: "28px", color: v.color }} />
                                    </div>
                                    <h5 className="fw-bold mb-2" style={{ color: "#1a1a2e" }}>{v.title}</h5>
                                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-5" style={{ background: "#f8fafc" }} data-aos="fade-up">
                <div className="container">
                    <div className="text-center mb-5">
                        <span
                            className="badge px-3 py-2 mb-3"
                            style={{
                                background: "rgba(34,197,94,0.1)",
                                color: "#16a34a",
                                border: "1px solid rgba(34,197,94,0.25)",
                                borderRadius: "50px",
                                fontSize: "0.82rem",
                                fontWeight: 600
                            }}
                        >
                            MEET THE TEAM
                        </span>
                        <h2 className="fw-bold" style={{ color: "#1a1a2e", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                            The People Behind <span style={{ color: "#22c55e" }}>ShopMERN</span>
                        </h2>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {team.map((member, i) => (
                            <div key={i} className="col-md-4 col-sm-6" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div
                                    className="text-center p-4"
                                    style={{
                                        borderRadius: "20px",
                                        background: "#fff",
                                        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-8px)"
                                        e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.12)"
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0)"
                                        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)"
                                    }}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={{
                                            width: "100px", height: "100px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            border: "3px solid #22c55e",
                                            marginBottom: "16px"
                                        }}
                                    />
                                    <h5 className="fw-bold mb-1" style={{ color: "#1a1a2e" }}>{member.name}</h5>
                                    <span
                                        className="badge mb-3"
                                        style={{
                                            background: "rgba(34,197,94,0.1)",
                                            color: "#16a34a",
                                            fontWeight: 600,
                                            borderRadius: "50px",
                                            padding: "4px 12px"
                                        }}
                                    >
                                        {member.role}
                                    </span>
                                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About