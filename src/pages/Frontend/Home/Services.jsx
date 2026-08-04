import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: "bi bi-truck",
    title: "Free Shipping",
    desc: "Get free delivery on all orders over $50. Fast, reliable shipping to 120+ cities nationwide.",
    color: "#22c55e",
    bg: "#f0fdf4",
    badge: "Most Popular"
  },
  {
    icon: "bi bi-shield-lock-fill",
    title: "Secure Payments",
    desc: "100% secure transactions with SSL encryption. Pay with credit card, PayPal, or cash on delivery.",
    color: "#3b82f6",
    bg: "#eff6ff",
    badge: null
  },
  {
    icon: "bi bi-headset",
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock via live chat, phone, and email.",
    color: "#f59e0b",
    bg: "#fffbeb",
    badge: null
  },
];

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          {/* Section heading */}
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
              WHY CHOOSE US
            </span>
            <h2 className="fw-bold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1a1a2e" }}>
              Everything You Need,{" "}
              <span style={{ color: "#22c55e" }}>All in One Place</span>
            </h2>
            <p className="text-muted mx-auto mt-2" style={{ maxWidth: "500px" }}>
              We go beyond just selling products — we deliver a complete shopping experience.
            </p>
          </div>

          <div className="row g-4">
            {services.map((s, i) => (
              <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={i * 100}>
                <div
                  className="h-100 p-4"
                  style={{
                    borderRadius: "20px",
                    background: "#fff",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-6px)"
                    e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)"
                  }}
                >
                  {s.badge && (
                    <span
                      className="position-absolute"
                      style={{
                        top: "16px", right: "16px",
                        background: "#22c55e",
                        color: "#fff",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "50px"
                      }}
                    >
                      {s.badge}
                    </span>
                  )}

                  <div
                    className="d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "18px",
                      background: s.bg,
                      border: `2px solid ${s.color}25`
                    }}
                  >
                    <i className={s.icon} style={{ fontSize: "32px", color: s.color }} />
                  </div>

                  <h4 className="fw-bold mb-2" style={{ color: "#1a1a2e" }}>{s.title}</h4>
                  <p className="text-muted mb-0" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;