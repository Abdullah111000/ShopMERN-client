import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import * as RC from "react-countup";

const CountUp = RC.default.default;

const Stats = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const stats = [
    { icon: "bi bi-people-fill", end: 25, suffix: "K+", label: "Happy Customers", color: "#22c55e", delay: 0 },
    { icon: "bi bi-box-seam-fill", end: 8, suffix: "K+", label: "Products Available", color: "#3b82f6", delay: 100 },
    { icon: "bi bi-geo-alt-fill", end: 120, suffix: "+", label: "Cities Delivered", color: "#f59e0b", delay: 200 },
    { icon: "bi bi-truck", end: 75, suffix: "K+", label: "Orders Delivered", color: "#ef4444", delay: 300 },
  ];

  return (
    <>
      <section className="py-5" data-aos="fade-up" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, i) => (
              <div key={i} className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={stat.delay}>
                <div
                  className="card border-0 h-100 text-center p-4"
                  style={{
                    borderRadius: "20px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    overflow: "hidden",
                    position: "relative"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-6px)"
                    e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.12)`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)"
                  }}
                >
                  {/* Gradient accent top bar */}
                  <div style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: "4px",
                    background: stat.color,
                    borderRadius: "20px 20px 0 0"
                  }} />

                  {/* Icon circle */}
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      background: `${stat.color}18`,
                      border: `2px solid ${stat.color}30`
                    }}
                  >
                    <i className={stat.icon} style={{ fontSize: "30px", color: stat.color }} />
                  </div>

                  <h2 className="fw-bold mb-1" style={{ fontSize: "2.2rem", color: "#1a1a2e" }}>
                    <CountUp end={stat.end} duration={3} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </h2>
                  <p className="mb-0 text-muted fw-medium" style={{ fontSize: "0.95rem" }}>
                    {stat.label}
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

export default Stats;