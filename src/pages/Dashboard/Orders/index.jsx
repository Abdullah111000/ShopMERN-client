import { DeleteOutlined, EyeOutlined, MoreOutlined } from '@ant-design/icons'
import { Button, Dropdown, Image, message, Popconfirm, Table, Modal, Tag, Typography } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/Auth'

const OrdersAll = () => {
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { user } = useAuth()

    const [isViewModalVisible, setIsViewModalVisible] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState(null)

    const getOrders = () => {
        const token = localStorage.getItem('jwt')
        if (!token) { return message.error('You must be logged in to access this feature') }
        setIsLoading(true)
        axios.get('http://localhost:8000/api/orders/all', { headers: { Authorization: 'Bearer ' + token }})
            .then((res) => {
                const { status, data } = res
                if (status === 200) {
                    setOrders(data.orders || [])
                } else {
                    message.error(data.message)
                }
            })
            .catch((error) => {
                console.error('getOrders error:', error.response || error)
                if (error.response && error.response.status === 401) {
                    message.error('Unauthorized - please login')
                } else {
                    message.error('Something went wrong while fetching orders')
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => { getOrders() }, [])




    const handleDelete = (id) => {
        const token = localStorage.getItem('jwt')
        if (!token) { return message.error('You must be logged in to access this feature') }

        setIsLoading(true)
        axios.delete('http://localhost:8000/api/orders/' + id, { headers: { Authorization: 'Bearer ' + token }})
            .then((res) => {
                const { status, data } = res
                if (status === 200) {
                    message.success(data.message || 'Order deleted')
                    const filtered = orders.filter(o => o.id !== id && o._id !== id)
                    setOrders(filtered)
                } else {
                    message.error(data.message)
                }
            })
            .catch((error) => {
                console.error(error)
                message.error('Something went wrong while deleting the order')
            })
            .finally(() => setIsLoading(false))
    }

    const handleMarkShipped = (id) => {
        const token = localStorage.getItem('jwt')
        if (!token) { return message.error('You must be logged in to access this feature') }

        setIsLoading(true)
        axios.patch('http://localhost:8000/api/orders/update-status/' + id, { status: 'shipped' }, { headers: { Authorization: 'Bearer ' + token }})
            .then((res) => {
                const { status, data } = res
                if (status === 200) {
                    message.success(data.message || 'Order status updated')
                    const updated = orders.map(o => (o.id === id || o._id === id) ? { ...o, status: 'shipped', paymentStatus: "paid" } : o)
                    setOrders(updated)
                } else {
                    message.error(data.message)
                }
            })
            .catch((error) => {
                console.error(error)
                message.error('Something went wrong while updating order status')
            })
            .finally(() => setIsLoading(false))
    }

    // Columns — build base, then conditionally add action for admin
    const baseColumns = [
        {
            title: 'Order ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <Typography.Text copyable>{text}</Typography.Text>
        },
        {
            title: 'Products',
            dataIndex: 'products',
            key: 'products',
            render: (products) => {
                if (!products || !products.length) return '—'
                return (
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                        {products.slice(0, 3).map((p, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                {p.imageURL || p.image ? (
                                    <Image src={p.imageURL || p.image} alt={p.name} width={40} height={40} style={{ objectFit: 'cover', borderRadius: 6 }} />
                                ) : (
                                    <div style={{ width: 40, height: 40, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', borderRadius: 6 }}>—</div>
                                )}
                                <div style={{ fontSize: 12 }}>
                                    <div style={{ fontWeight: 600 }}>{p.name}</div>
                                    <div style={{ color: '#666' }}>x{p.quantity} • ${p.price}</div>
                                </div>
                            </div>
                        ))}
                        {products.length > 3 && <div style={{ fontSize: 12, color: '#666' }}>+{products.length - 3} more</div>}
                    </div>
                )
            }
        },
        {
            title: 'Total',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            render: (t) => `$${t}`
        },
        {
            title: 'Shipping Address',
            dataIndex: 'shippingAddress',
            key: 'shippingAddress',
            render: (t) => <div style={{ maxWidth: 300, whiteSpace: 'normal' }}>{t}</div>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (s) => {
                const st = String(s || '').toLowerCase()
                let color = 'default'
                if (st === 'pending') color = 'orange'
                if (st === 'shipped') color = 'green'
                return <Tag color={color} style={{ textTransform: 'capitalize' }}>{s}</Tag>
            }
        },
        {
            title: 'Payment',
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
            render: (p) => {
                const pay = String(p || '').toLowerCase()
                return <Tag color={pay === 'paid' ? 'green' : 'red'} style={{ textTransform: 'capitalize' }}>{p || 'unpaid'}</Tag>
            }
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (t) => new Date(t).toLocaleString()
        }
    ]

    const columns = (() => {
        const cols = [...baseColumns]
        if (user && user.role === 'admin') {
            cols.push({
                title: 'Action', key: 'action', render: (_, record) => {
                    const items = [
                        { label: 'View', key: 'view', icon: <EyeOutlined />, onClick: () => { setSelectedOrder(record); setIsViewModalVisible(true); } },
                        { label: <Popconfirm title="Are you sure?" onConfirm={() => handleDelete(record.id || record._id)} >Delete</Popconfirm>, key: 'delete', icon: <DeleteOutlined />, danger: true },
                        { label: <Popconfirm title="Mark order as shipped?" onConfirm={() => handleMarkShipped(record.id || record._id)} >Mark as Shipped</Popconfirm>, key: 'ship' },
                    ]
                    return (
                        <Dropdown menu={{ items }}>
                            <Button type="text" shape="circle" icon={<MoreOutlined />} />
                        </Dropdown>
                    )
                }
            })
        }
        return cols
    })()

    const handleViewModalCancel = () => {
        setIsViewModalVisible(false)
        setSelectedOrder(null)
    }

    return (
        <>
            <div className='d-flex justify-content-between align-items-center mt-2'>
                <h2>All Orders</h2>
            </div>
            <div className='mt-3' >
                <Table columns={columns} loading={isLoading} dataSource={orders} rowKey={(record) => record.id || record._id} scroll={{ x: 'max-content' }} />

            </div>

            <Modal
                title={selectedOrder ? `Order: ${selectedOrder.id || selectedOrder._id}` : 'Order'}
                open={isViewModalVisible}
                onCancel={handleViewModalCancel}
                footer={null}
                width={680}
            >
                {selectedOrder ? (
                    <div>
                        <div style={{ display: 'flex', gap: 16, marginBottom: 12, alignItems: 'center' }}>
                            <div style={{ fontWeight: 600, fontSize: 16 }}>{selectedOrder.products && selectedOrder.products.length ? selectedOrder.products[0].name : '—'}</div>
                            <div style={{ marginLeft: 'auto', fontWeight: 700 }}>${selectedOrder.totalAmount}</div>
                        </div>

                        <div style={{ border: '1px solid #f0f0f0', padding: 12, borderRadius: 8, marginBottom: 12 }}>
                            {selectedOrder.products && selectedOrder.products.map((p, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '8px 0', borderBottom: idx < selectedOrder.products.length - 1 ? '1px solid #f5f5f5' : 'none' }}>
                                    {p.imageURL || p.image ? (
                                        <Image src={p.imageURL || p.image} alt={p.name} width={64} height={64} style={{ objectFit: 'cover', borderRadius: 6 }} />
                                    ) : (
                                        <div style={{ width: 64, height: 64, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', borderRadius: 6 }}>—</div>
                                    )}
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 600 }}>{p.name}</div>
                                        <div style={{ color: '#666' }}>${p.price} x {p.quantity}</div>
                                    </div>
                                    <div style={{ fontWeight: 700 }}>${p.price * p.quantity}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginBottom: 12 }}>
                            <div style={{ fontWeight: 600 }}>Shipping Address</div>
                            <div style={{ color: '#333' }}>{selectedOrder.shippingAddress}</div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                            <Button onClick={handleViewModalCancel}>Close</Button>
                            {user && user.role === 'admin' && (
                                <Popconfirm title="Mark order as shipped?" onConfirm={() => { handleMarkShipped(selectedOrder.id || selectedOrder._id); handleViewModalCancel(); }}>
                                    <Button type="primary">Mark as Shipped</Button>
                                </Popconfirm>
                            )}
                        </div>
                    </div>
                ) : null}
            </Modal>
        </>
    )
}

export default OrdersAll
