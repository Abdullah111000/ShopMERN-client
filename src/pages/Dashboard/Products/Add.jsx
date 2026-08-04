import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Form, Input, message, Row, Select} from 'antd'
import axios from 'axios'

const { Item } = Form
const { Option } = Select

const initialState = { name: '', price: '', stock: '', category: undefined, description: '', imageFile: null, }

const Add = () => {
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => setState((s) => ({ ...s, [e.target.name]: e.target.value }))

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null
    setState((s) => ({ ...s, imageFile: file }))
  }

  const handleSubmit = () => {
    const { name, price, stock, category, description, imageFile } = state

    if (!name || !price || !stock || !category || !description || !imageFile) {
      return message.error('Please fill all fields')
    }

    if (isNaN(price) || isNaN(stock)) {
      return message.error('Price and stock must be numbers')
    }

    if (price < 0 || stock < 0) {
      return message.error('Price and stock must be non-negative')
    }

    const token = localStorage.getItem('jwt')
    if (!token) {
      return message.error('You must be logged in to add a product')
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', Number(price))
    formData.append('stock', Number(stock))
    formData.append('category', category)
    formData.append('description', description)
    formData.append('image', imageFile)

    setIsProcessing(true)

    axios.post('http://localhost:8000/api/products/create', formData, { headers: { Authorization: `Bearer ${token}` }, })
      .then((res) => {
        const { status, data } = res
        if (status === 201) {
          message.success(data.message)
          setState(initialState)
          navigate('/dashboard/products')
        }
        else {
          message.error(data.message)
        }
      })
      .catch((error) => {
        console.error(error)
        message.error('Something went wrong while adding the product')
      })
      .finally(() => {
        setIsProcessing(false)
      })
  }

  return (
    <main className='auth min-vh-100 d-flex align-items-center justify-content-center bg-light p-2 p-md-3'>
      <div className='container' style={{ maxWidth: '700px' }}>
        <div className='card p-3 p-md-4 mx-auto'>
          <div className="d-flex justify-content-between align-items-center my-3">
            <h2>Add Product</h2>
            <Button type="primary" onClick={() => navigate('/dashboard/products')} className="bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 ease-in-out">All Products</Button>
          </div>
          <Form layout='vertical'>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Item label='Name' required>
                  <Input size='large' name='name' value={state.name} onChange={handleChange} placeholder='Enter product name' />
                </Item>
              </Col>
              <Col span={12}>
                <Item label='Price' required>
                  <Input size='large' name='price' value={state.price} onChange={handleChange} placeholder='Enter price' />
                </Item>
              </Col>
              <Col span={12}>
                <Item label='Stock' required>
                  <Input size='large' name='stock' value={state.stock} onChange={handleChange} placeholder='Enter stock quantity' />
                </Item>
              </Col>
              <Col span={24}>
                <Item label='Category' required>
                  <Select size='large' value={state.category || undefined} onChange={(value) => setState((s) => ({ ...s, category: value }))} placeholder='Select product category' allowClear>
                    <Option value='Electronics'>Electronics</Option>
                    <Option value='Fashion'>Fashion</Option>
                    <Option value='Home & Living'>Home & Living</Option>
                    <Option value='Beauty & Cosmetics'>Beauty & Cosmetics</Option>
                  </Select>
                </Item>
              </Col>
              <Col span={24}>
                <Item label='Description' required>
                  <Input.TextArea size='large' name='description' value={state.description} onChange={handleChange} placeholder='Enter product description' rows={4} />
                </Item>
              </Col>
              <Col span={24}>
                <Item label='Image' required>
                  <input type='file' accept='image/*' onChange={handleFileChange} className='form-control' />
                </Item>
              </Col>
              <Col span={24}>
                <Button type='primary' htmlType='button' block loading={isProcessing} onClick={handleSubmit}>
                  Add Product
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </main>
  )
}

export default Add
