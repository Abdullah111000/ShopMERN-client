import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"

const contactInfo = [
    {
        icon: "bi bi-geo-alt-fill",
        title: "Our Location",
        lines: ["Amin Town, Faisalabad", "Punjab, Pakistan"],
        color: "#22c55e",
        bg: "#f0fdf4"
    },
    {
        icon: "bi bi-telephone-fill",
        title: "Phone Number",
        lines: ["+92 349 9715987", "Mon–Sat, 9am–6pm"],
        color: "#3b82f6",
        bg: "#eff6ff"
    },
    {
        icon: "bi bi-envelope-fill",
        title: "Email Address",
        lines: ["info@shopmern.com", "support@shopmern.com"],
        color: "#f59e0b",
        bg: "#fffbeb"
    },
    {
        icon: "bi bi-clock-fill",
        title: "Working Hours",
        lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
        color: "#8b5cf6",
        bg: "#f5f3ff"
    },
]

const Contact = () => {
    const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" })
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 1000, once: true, easing: "ease-in-out" })
    }, [])

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setForm({ name: "", phone: "", email: "", subject: "", message: "" })
    }

    return (
        <>
            {/* Hero */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
                    padding: "80px 0 70px",
                    position: "relative",
                    overflow: "hidden"
                }}
                data-aos="fade-down"
            >
                {/* Decorative circles */}
                <div style={{
                    position: "absolute", top: "-80px", right: "-80px",
                    width: "300px", height: "300px", borderRadius: "50%",
                    background: "rgba(34,197,94,0.07)", pointerEvents: "none"
                }} />
                <div style={{
                    position: "absolute", bottom: "-100px", left: "-60px",
                    width: "250px", height: "250px", borderRadius: "50%",
                    background: "rgba(34,197,94,0.05)", pointerEvents: "none"
                }} />

                <div className="container text-center position-relative">
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
                        GET IN TOUCH
                    </span>
                    <h1
                        className="fw-bold mb-3"
                        style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: "1.2" }}
                    >
                        We'd Love to{" "}
                        <span style={{
                            background: "linear-gradient(90deg, #22c55e, #86efac)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                        }}>
                            Hear From You
                        </span>
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
                        Have a question, feedback, or need support? Our team is ready to help — reach out anytime.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section style={{ background: "#f8fafc", padding: "60px 0 0" }}>
                <div className="container">
                    <div className="row g-4">
                        {contactInfo.map((info, i) => (
                            <div key={i} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div
                                    className="text-center p-4"
                                    style={{
                                        borderRadius: "20px",
                                        background: "#fff",
                                        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                                        border: "1px solid rgba(0,0,0,0.04)",
                                        transition: "all 0.3s ease",
                                        height: "100%"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-6px)"
                                        e.currentTarget.style.boxShadow = `0 16px 40px ${info.color}22`
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0)"
                                        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)"
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center mx-auto mb-3"
                                        style={{
                                            width: "68px", height: "68px",
                                            borderRadius: "18px",
                                            background: info.bg,
                                            border: `2px solid ${info.color}25`
                                        }}
                                    >
                                        <i className={info.icon} style={{ fontSize: "28px", color: info.color }} />
                                    </div>
                                    <h6 className="fw-bold mb-2" style={{ color: "#6b7280", fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                                        {info.title}
                                    </h6>
                                    {info.lines.map((line, j) => (
                                        <p key={j} className="mb-0" style={{ color: j === 0 ? "#1a1a2e" : "#9ca3af", fontWeight: j === 0 ? 600 : 400, fontSize: j === 0 ? "0.95rem" : "0.85rem" }}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section style={{ background: "#f8fafc", padding: "50px 0 70px" }}>
                <div className="container">
                    <div className="row g-4 align-items-start">

                        {/* Contact Form */}
                        <div className="col-lg-7" data-aos="fade-right">
                            <div
                                style={{
                                    borderRadius: "24px",
                                    background: "#fff",
                                    boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                                    padding: "40px",
                                    border: "1px solid rgba(0,0,0,0.04)"
                                }}
                            >
                                <div className="mb-4">
                                    <span
                                        className="badge px-3 py-2 mb-2"
                                        style={{
                                            background: "rgba(34,197,94,0.1)",
                                            color: "#16a34a",
                                            border: "1px solid rgba(34,197,94,0.25)",
                                            borderRadius: "50px",
                                            fontSize: "0.78rem",
                                            fontWeight: 600
                                        }}
                                    >
                                        SEND MESSAGE
                                    </span>
                                    <h3 className="fw-bold mb-1" style={{ color: "#1a1a2e" }}>
                                        Drop Us a Line
                                    </h3>
                                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                                        Fill in the form below and we'll get back to you within 24 hours.
                                    </p>
                                </div>

                                {/* Success Alert */}
                                {submitted && (
                                    <div
                                        className="d-flex align-items-center gap-3 mb-4 p-3"
                                        style={{
                                            borderRadius: "12px",
                                            background: "rgba(34,197,94,0.08)",
                                            border: "1px solid rgba(34,197,94,0.25)"
                                        }}
                                    >
                                        <i className="bi bi-check-circle-fill" style={{ color: "#22c55e", fontSize: "1.3rem" }} />
                                        <div>
                                            <div className="fw-semibold" style={{ color: "#16a34a", fontSize: "0.95rem" }}>Message sent successfully!</div>
                                            <div className="text-muted" style={{ fontSize: "0.83rem" }}>We'll respond within 24 hours.</div>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold" style={{ fontSize: "0.88rem", color: "#374151" }}>
                                                Full Name <span style={{ color: "#ef4444" }}>*</span>
                                            </label>
                                            <input
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                type="text"
                                                className="form-control"
                                                placeholder="Your full name"
                                                style={{
                                                    borderRadius: "12px",
                                                    border: "1.5px solid #e5e7eb",
                                                    padding: "12px 16px",
                                                    fontSize: "0.92rem",
                                                    transition: "border-color 0.2s"
                                                }}
                                                onFocus={e => e.target.style.borderColor = "#22c55e"}
                                                onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold" style={{ fontSize: "0.88rem", color: "#374151" }}>
                                                Phone Number
                                            </label>
                                            <input
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                type="tel"
                                                className="form-control"
                                                placeholder="03XX XXXXXXX"
                                                style={{
                                                    borderRadius: "12px",
                                                    border: "1.5px solid #e5e7eb",
                                                    padding: "12px 16px",
                                                    fontSize: "0.92rem",
                                                    transition: "border-color 0.2s"
                                                }}
                                                onFocus={e => e.target.style.borderColor = "#22c55e"}
                                                onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold" style={{ fontSize: "0.88rem", color: "#374151" }}>
                                                Email Address <span style={{ color: "#ef4444" }}>*</span>
                                            </label>
                                            <input
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                type="email"
                                                className="form-control"
                                                placeholder="your@email.com"
                                                style={{
                                                    borderRadius: "12px",
                                                    border: "1.5px solid #e5e7eb",
                                                    padding: "12px 16px",
                                                    fontSize: "0.92rem",
                                                    transition: "border-color 0.2s"
                                                }}
                                                onFocus={e => e.target.style.borderColor = "#22c55e"}
                                                onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold" style={{ fontSize: "0.88rem", color: "#374151" }}>
                                                Subject <span style={{ color: "#ef4444" }}>*</span>
                                            </label>
                                            <input
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                required
                                                type="text"
                                                className="form-control"
                                                placeholder="What's this about?"
                                                style={{
                                                    borderRadius: "12px",
                                                    border: "1.5px solid #e5e7eb",
                                                    padding: "12px 16px",
                                                    fontSize: "0.92rem",
                                                    transition: "border-color 0.2s"
                                                }}
                                                onFocus={e => e.target.style.borderColor = "#22c55e"}
                                                onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold" style={{ fontSize: "0.88rem", color: "#374151" }}>
                                                Message <span style={{ color: "#ef4444" }}>*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="form-control"
                                                placeholder="Write your message here..."
                                                style={{
                                                    borderRadius: "12px",
                                                    border: "1.5px solid #e5e7eb",
                                                    padding: "12px 16px",
                                                    fontSize: "0.92rem",
                                                    resize: "vertical",
                                                    transition: "border-color 0.2s"
                                                }}
                                                onFocus={e => e.target.style.borderColor = "#22c55e"}
                                                onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="btn w-100 fw-bold py-3"
                                                style={{
                                                    borderRadius: "14px",
                                                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                                                    color: "#fff",
                                                    border: "none",
                                                    fontSize: "1rem",
                                                    boxShadow: "0 6px 24px rgba(34,197,94,0.35)",
                                                    transition: "all 0.3s ease"
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                                                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                                            >
                                                📨 Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Side Panel */}
                        <div className="col-lg-5" data-aos="fade-left">
                            {/* Social Media */}
                            <div
                                className="mb-4"
                                style={{
                                    borderRadius: "20px",
                                    background: "#fff",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                                    padding: "28px",
                                    border: "1px solid rgba(0,0,0,0.04)"
                                }}
                            >
                                <h5 className="fw-bold mb-1" style={{ color: "#1a1a2e" }}>Follow Us</h5>
                                <p className="text-muted mb-4" style={{ fontSize: "0.88rem" }}>
                                    Stay connected on social media for deals & updates.
                                </p>
                                <div className="d-flex flex-column gap-3">
                                    {[
                                        { icon: "bi bi-facebook", label: "Facebook", handle: "@shopmern", color: "#1877f2", bg: "#e7f0ff" },
                                        { icon: "bi bi-instagram", label: "Instagram", handle: "@shop_mern", color: "#e1306c", bg: "#fce4f0" },
                                        { icon: "bi bi-youtube", label: "YouTube", handle: "@ShopMERN", color: "#ff0000", bg: "#ffe4e4" },
                                        { icon: "bi bi-linkedin", label: "LinkedIn", handle: "@shop-mern", color: "#0077b5", bg: "#e1f0f8" },
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="d-flex align-items-center gap-3 text-decoration-none p-3"
                                            style={{
                                                borderRadius: "12px",
                                                background: social.bg,
                                                transition: "all 0.2s ease",
                                                border: `1px solid ${social.color}18`
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.transform = "translateX(6px)"}
                                            onMouseLeave={e => e.currentTarget.style.transform = "translateX(0)"}
                                        >
                                            <i className={social.icon} style={{ fontSize: "1.4rem", color: social.color, width: "24px" }} />
                                            <div>
                                                <div className="fw-semibold" style={{ color: "#1a1a2e", fontSize: "0.9rem" }}>{social.label}</div>
                                                <div style={{ color: "#6b7280", fontSize: "0.8rem" }}>{social.handle}</div>
                                            </div>
                                            <i className="bi bi-arrow-right ms-auto" style={{ color: social.color, fontSize: "0.9rem" }} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Emergency Support */}
                            <div
                                style={{
                                    borderRadius: "20px",
                                    background: "linear-gradient(135deg, #0f2027, #203a43)",
                                    padding: "28px",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                            >
                                <div style={{
                                    position: "absolute", top: "-40px", right: "-40px",
                                    width: "130px", height: "130px", borderRadius: "50%",
                                    background: "rgba(34,197,94,0.1)", pointerEvents: "none"
                                }} />
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div style={{
                                        width: "50px", height: "50px", borderRadius: "14px",
                                        background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)",
                                        display: "flex", alignItems: "center", justifyContent: "center"
                                    }}>
                                        <i className="bi bi-headset" style={{ fontSize: "22px", color: "#22c55e" }} />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0" style={{ color: "#fff" }}>Need Immediate Help?</h6>
                                        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem" }}>We're available 24/7</span>
                                    </div>
                                </div>
                                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "20px" }}>
                                    Our support agents are standing by to assist you with any urgent questions or order issues.
                                </p>
                                <a
                                    href="tel:+923499715987"
                                    className="btn w-100 fw-semibold py-2"
                                    style={{
                                        borderRadius: "12px",
                                        background: "linear-gradient(135deg, #22c55e, #16a34a)",
                                        color: "#fff",
                                        border: "none",
                                        boxShadow: "0 4px 16px rgba(34,197,94,0.35)",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                                >
                                    📞 Call Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="mt-5" data-aos="fade-up">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <i className="bi bi-pin-map-fill" style={{ fontSize: "1.4rem", color: "#22c55e" }} />
                            <h4 className="fw-bold mb-0" style={{ color: "#1a1a2e" }}>Find Us on the Map</h4>
                        </div>
                        <div
                            style={{
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                                border: "1px solid rgba(0,0,0,0.06)"
                            }}
                        >
                            <div className="ratio ratio-21x9">
                                <iframe
                                    src="https://maps.google.com/maps?q=Faisalabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    title="ShopMERN Location Map"
                                    allowFullScreen
                                    style={{ border: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact