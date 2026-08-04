import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons'
import { Button, Dropdown, Image, message, Popconfirm, Space, Spin, Table } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const All = () => {
    const [documents, setDocuments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const getDocuments = () => {
        const token = localStorage.getItem('jwt')
        if (!token) {
            return message.error('You must be logged in to access this feature')
        }

        setIsLoading(true)
        axios.get('http://localhost:8000/api/products/all', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                const { status, data } = res
                if (status === 200) {
                    setDocuments(data.products)
                } else {
                    message.error(data.message)
                }
            })
            .catch((error) => {
                console.error(error)
                message.error('Something went wrong while fetching products')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => { getDocuments() }, [])

    const handleDelete = (id) => {
        const token = localStorage.getItem('jwt')
        if (!token) { return message.error('You must be logged in to access this feature') }

        setIsLoading(true)
        axios.delete(`http://localhost:8000/api/products/delete/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((res) => {
                const { status, data } = res
                if (status === 200) {
                    message.success(data.message)
                    const filteredDocuments = documents.filter((doc) => doc.id !== id && doc._id !== id)
                    setDocuments(filteredDocuments)
                } else {
                    message.error(data.message)
                }
            })
            .catch((error) => {
                console.error(error)
                message.error('Something went wrong while deleting the product')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const columns = [
        {
            title: 'Image',
            dataIndex: 'imageURL',
            key: 'imageURL',
            render: (text, record) => {
                const src = text || record.image || ''
                if (!src || !src.startsWith('http')) {
                    return (
                        <div style={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', color: '#999', borderRadius: 4 }}>
                            No Image
                        </div>
                    )
                }
                return <Image src={src} alt='Product' width={64} height={64}  style={{borderRadius: '50%', aspectRatio: '1/1', objectFit: 'cover'}}/>
            },
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action', key: 'action', render: (_, record) => (
                <Dropdown menu={{
                    items: [
                        { label: "Edit", key: "edit", icon: <EditOutlined />, onClick: () => navigate(`/dashboard/products/edit/${record.id || record._id}`), },
                        { label: <Popconfirm title="are you sure?" onConfirm={() => handleDelete(record.id || record._id)} >Delete</Popconfirm>, key: "delete", icon: <DeleteOutlined />, danger: true },
                    ],
                }}
                >
                    <Button type="text" shape="circle" icon={<MoreOutlined />} />
                </Dropdown>
            ),
        }


    ]

    return (
        <>
            <div className='d-flex justify-content-between align-items-center mt-2'>
                <h2>All Products</h2>
                <Button type='primary' onClick={() => navigate('/dashboard/products/add')} className='bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 ease-in-out'>Add Product</Button>
            </div>
            <div className='mt-3' >
                <Table columns={columns} loading={isLoading} dataSource={documents} rowKey={(record) => record.id || record._id} scroll={{ x: 'max-content' }} />

            </div>
        </>
    )
}

export default All



