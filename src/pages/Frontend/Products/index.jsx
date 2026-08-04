import { useEffect, useState } from "react"
import axios from "axios"
import Aos from "aos"
import "aos/dist/aos.css"
import { Modal, Form, Input, InputNumber, message, Button } from "antd"


const categories = ["All", "Electronics", "Fashion", "Home & Living", "Beauty & Cosmetics"]

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All")
    const [products, setProducts] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [form] = Form.useForm()
    const [modalQuantity, setModalQuantity] = useState(1)

    useEffect(() => {
        Aos.init({ duration: 800, once: true, easing: "ease-in-out" })
    }, [])

    // Fetch public products from server
    useEffect(() => {
        let mounted = true
        axios.get("http://localhost:8000/api/products/public-all")
            .then(res => {
                if (mounted && res && res.data && res.data.products) {
                    setProducts(res.data.products)
                }
            })
            .catch(err => {
                console.error("Failed to fetch products:", err)
            })
        return () => { mounted = false }
    }, [])

    const filtered = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory)

    const openOrderModal = (product) => {
        setSelectedProduct(product)
        form.setFieldsValue({ quantity: 1, shippingAddress: "" })
        setModalQuantity(1)
        setIsModalVisible(true)
    }

    const handleModalCancel = () => {
        setIsModalVisible(false)
        setSelectedProduct(null)
        form.resetFields()
    }

    const updateProductStock = (productId, quantity) => {
        if (!productId) return

        const normalizedProductId = String(productId)
        const quantityToReduce = Number(quantity) || 0

        setProducts(prevProducts => prevProducts.map((item) => {
            const currentId = String(item._id || item.id || item._doc?.id || "")
            if (currentId !== normalizedProductId) return item

            const currentStock = Number(item.stock ?? item.available ?? item.quantity ?? 0)
            const nextStock = Math.max(0, currentStock - quantityToReduce)

            return {
                ...item,
                stock: nextStock,
                available: nextStock,
                quantity: nextStock
            }
        }))

        setSelectedProduct(prevProduct => {
            if (!prevProduct) return prevProduct
            const currentId = String(prevProduct._id || prevProduct.id || prevProduct._doc?.id || "")
            if (currentId !== normalizedProductId) return prevProduct

            const currentStock = Number(prevProduct.stock ?? prevProduct.available ?? prevProduct.quantity ?? 0)
            const nextStock = Math.max(0, currentStock - quantityToReduce)

            return {
                ...prevProduct,
                stock: nextStock,
                available: nextStock,
                quantity: nextStock
            }
        })
    }

    const handleModalOk = async () => {
        try {
            const values = await form.validateFields()
            const { quantity, shippingAddress } = values
            const product = selectedProduct
            if (!product) {
                message.error("No product selected")
                return
            }
            // order create krna k liye 
            const prodId = product._id || product.id || product._doc?.id
            const imageURL = product.imageURL || product.image || product.imageUrl || ""

            const orderPayload = {
                products: [{
                    productId: prodId,
                    name: product.name,
                    price: Number(product.price),
                    quantity,
                    imageURL
                }],
                totalAmount: Number(product.price) * quantity,
                shippingAddress
            }

            const jwt = localStorage.getItem("jwt")
            const headers = jwt ? { Authorization: 'Bearer ' + jwt } : {}

            const res = await axios.post("http://localhost:8000/api/orders/create", orderPayload, { headers })
            if (res && (res.status === 200 || res.status === 201)) {
                updateProductStock(prodId, quantity)
                message.success("Order created successfully")
                handleModalCancel()
            } else {
                message.error("Failed to create order")
            }
        } catch (error) {
            console.error("Order creation failed:", error)
            if (error.errorFields) {
                // validation error from form
                return
            }
            const serverMessage = error?.response?.data?.message || error?.message || "An error occurred while creating the order"
            message.error(serverMessage)
        }
    }


    return (
        <>
            {/* Page Hero */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
                    padding: "70px 0 60px"
                }}
                data-aos="fade-down"
            >
                <div className="container text-center">
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
                            Products
                        </span>
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem" }}>
                        Explore our curated collection of premium products
                    </p>
                </div>
            </section>

            <section className="py-5" style={{ background: "#f8fafc" }}>
                <div className="container">
                    {/* Category Filter */}
                    <div className="d-flex gap-2 flex-wrap mb-5" data-aos="fade-up">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="btn px-4 py-2 fw-semibold"
                                style={{
                                    borderRadius: "50px",
                                    border: activeCategory === cat
                                        ? "2px solid #22c55e"
                                        : "2px solid #e5e7eb",
                                    background: activeCategory === cat
                                        ? "linear-gradient(135deg, #22c55e, #16a34a)"
                                        : "#fff",
                                    color: activeCategory === cat ? "#fff" : "#374151",
                                    transition: "all 0.25s ease",
                                    fontSize: "0.9rem"
                                }}
                            >
                                {cat}
                            </button>
                        ))}

                        <span
                            className="ms-auto d-flex align-items-center text-muted"
                            style={{ fontSize: "0.9rem" }}
                        >
                            {filtered.length} products found
                        </span>
                    </div>

                    {/* Product Grid */}
                    <div className="row g-4">
                        {filtered.map((product, i) => (
                            <div
                                key={product.id}
                                className="col-lg-3 col-md-6"
                                data-aos="fade-up"
                                data-aos-delay={i * 60}
                            >
                                <div
                                    className="card border-0 h-100"
                                    style={{
                                        borderRadius: "20px",
                                        overflow: "hidden",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = "translateY(-8px)"
                                        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.13)"
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = "translateY(0)"
                                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)"
                                    }}
                                >
                                    {/* Image */}
                                    <div style={{ position: "relative", overflow: "hidden" }}>
                                        <img
                                            src={product.imageURL || product.image}
                                            alt={product.name}
                                            style={{
                                                width: "100%",
                                                height: "200px",
                                                objectFit: "cover",
                                                transition: "transform 0.4s ease"
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
                                            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                        />
                                    </div>

                                    {/* Body */}
                                    <div className="card-body p-3 d-flex flex-column">
                                        <span
                                            className="badge mb-2"
                                            style={{
                                                background: "rgba(34,197,94,0.1)",
                                                color: "#16a34a",
                                                fontSize: "0.72rem",
                                                fontWeight: 600,
                                                alignSelf: "flex-start",
                                                borderRadius: "50px",
                                                padding: "3px 10px"
                                            }}
                                        >
                                            {product.category}
                                        </span>

                                        <h6
                                            className="fw-semibold mb-2 flex-grow-1"
                                            style={{ color: "#1a1a2e", lineHeight: "1.4", fontSize: "0.9rem" }}
                                        >
                                            {product.name}
                                        </h6>

                                        {/* Price + Stock */}
                                        <div className="d-flex flex-column" style={{ gap: 6 }}>
                                            <div>
                                                <span className="fw-bold" style={{ fontSize: "1.15rem", color: "#22c55e" }}>
                                                    ${product.price}
                                                </span>
                                            </div>
                                            <div style={{ fontSize: '0.85rem', color: '#374151' }}>
                                                Stock: {product.stock ?? product.available ?? product.quantity ?? 0}
                                            </div>
                                        </div>

                                        {/* Order Now */}
                                        <button
                                            onClick={(e) => { console.log('Order Now clicked', product); openOrderModal(product) }}
                                            className="btn w-100 mt-3 fw-semibold"
                                            style={{
                                                borderRadius: "12px",
                                                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                                                color: "#fff",
                                                border: "none",
                                                padding: "10px",
                                                fontSize: "0.88rem",
                                                transition: "all 0.3s ease"
                                            }}
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Order Modal */}
            <Modal
                title="Place Order"
                open={isModalVisible}
                onCancel={handleModalCancel}
                footer={[
                    <Button key="cancel" onClick={handleModalCancel}>Cancel</Button>,
                    <Button key="pay" type="primary" onClick={handleModalOk}>
                        {`Pay $${selectedProduct ? (Number(selectedProduct.price) * (modalQuantity || 1)).toLocaleString() : '0'}`}
                    </Button>
                ]}
                width={560}
            >
                {selectedProduct ? (
                    <div>
                        <div style={{ background: '#fbfdfe', padding: 12, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                            <img src={selectedProduct.imageURL || selectedProduct.image} alt={selectedProduct.name} style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 6 }} />

                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 700 }}>{selectedProduct.name}</div>
                                <div style={{ color: '#6b7280', marginTop: 6 }}>{`$${Number(selectedProduct.price).toLocaleString()} x ${modalQuantity || 1}`}</div>
                            </div>

                            <div style={{ fontWeight: 800, fontSize: 16 }}>${selectedProduct ? (Number(selectedProduct.price) * (modalQuantity || 1)).toLocaleString() : '0'}</div>
                        </div>

                        <Form form={form} layout="vertical" onValuesChange={(changed, all) => { if (changed.quantity !== undefined) setModalQuantity(all.quantity) }}>
                            <Form.Item name="quantity" label={<span style={{ color: '#ff4d4f' }}>* Quantity</span>} initialValue={1} rules={[{ required: true, message: 'Quantity is required' }]}>
                                <InputNumber min={1} max={selectedProduct?.stock ?? selectedProduct?.available ?? selectedProduct?.quantity ?? 9999} style={{ width: '100%' }} />
                            </Form.Item>
                            <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 12 }}>
                                Max available: {selectedProduct.stock ?? selectedProduct.available ?? selectedProduct.quantity ?? 0}
                            </div>

                            <Form.Item name="shippingAddress" label={<span style={{ color: '#ff4d4f' }}>* Shipping Address</span>} rules={[{ required: true, message: 'Shipping address is required' }]}>
                                <Input.TextArea rows={4} />
                            </Form.Item>
                        </Form>
                    </div>
                ) : null}
            </Modal>
        </>
    )
}

export default Products
