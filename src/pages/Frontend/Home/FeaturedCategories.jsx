import { useEffect } from "react"
import { Link } from "react-router-dom"
import Aos from "aos"

const categories = [
  {
    emoji: "📱",
    title: "Electronics",
    desc: "Phones, Laptops & Gadgets",
    items: "1,200+ items",
    color: "#3b82f6",
    bg: "linear-gradient(135deg, #dbeafe, #eff6ff)"
  },
  {
    emoji: "👗",
    title: "Fashion",
    desc: "Clothing, Shoes & Accessories",
    items: "3,500+ items",
    color: "#ec4899",
    bg: "linear-gradient(135deg, #fce7f3, #fdf2f8)"
  },
  {
    emoji: "🏠",
    title: "Home & Living",
    desc: "Furniture, Decor & Appliances",
    items: "800+ items",
    color: "#f59e0b",
    bg: "linear-gradient(135deg, #fef3c7, #fffbeb)"
  },
  {
    emoji: "💄",
    title: "Beauty & Skincare",
    desc: "Cosmetics & Personal Care",
    items: "950+ items",
    color: "#8b5cf6",
    bg: "linear-gradient(135deg, #ede9fe, #f5f3ff)"
  },
]

const FeaturedCategories = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, easing: "ease-in-out" })
  }, [])

  return (
    <>
      <section className="py-5" data-aos="fade-up" style={{ background: "#f8fafc" }}>
        <div className="container">
          {/* Section heading */}
          <div className="d-flex align-items-center justify-content-between mb-5 flex-wrap gap-3">
            <div>
              <span
                className="badge px-3 py-2 mb-2"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  color: "#16a34a",
                  border: "1px solid rgba(34,197,94,0.25)",
                  borderRadius: "50px",
                  fontSize: "0.82rem",
                  fontWeight: 600
                }}
              >
                BROWSE CATEGORIES
              </span>
              <h2 className="fw-bold mb-0" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1a1a2e" }}>
                Shop by <span style={{ color: "#22c55e" }}>Category</span>
              </h2>
            </div>
            <Link
              to="/product"
              className="btn fw-semibold px-4 py-2"
              style={{
                background: "transparent",
                border: "2px solid #22c55e",
                color: "#22c55e",
                borderRadius: "12px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#22c55e"
                e.currentTarget.style.color = "#fff"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#22c55e"
              }}
            >
              View All Products →
            </Link>
          </div>

          <div className="row g-4">
            {categories.map((cat, i) => (
              <div key={i} className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={i * 100}>
                <Link to="/product" className="text-decoration-none">
                  <div
                    className="h-100 p-4 text-center"
                    style={{
                      borderRadius: "20px",
                      background: cat.bg,
                      border: `1px solid ${cat.color}20`,
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"
                      e.currentTarget.style.boxShadow = `0 20px 50px ${cat.color}30`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center mx-auto mb-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: "#fff",
                        fontSize: "2.4rem",
                        boxShadow: `0 4px 16px ${cat.color}25`
                      }}
                    >
                      {cat.emoji}
                    </div>
                    <h5 className="fw-bold mb-1" style={{ color: "#1a1a2e" }}>{cat.title}</h5>
                    <p className="text-muted small mb-2">{cat.desc}</p>
                    <span
                      className="badge px-3 py-1"
                      style={{
                        background: `${cat.color}15`,
                        color: cat.color,
                        borderRadius: "50px",
                        fontWeight: 600
                      }}
                    >
                      {cat.items}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedCategories
