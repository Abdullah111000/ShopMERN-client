import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Form, Input, message, Row } from 'antd'
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import Aos from 'aos';
import { useAuth } from '@/context/Auth';
import axios from 'axios';

const Login = () => {
  const { Item } = Form;

  const { readProfile } = useAuth()

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    })
  }, [])

  const initialState = { email: "", password: "" }
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleLogin = () => {
    let { email, password } = state

    const userData = { email, password }
    setIsProcessing(true)

    axios.post("/api/auth/login", userData)
      .then((res) => {
        const { status, data } = res
        if (status === 200) {
          localStorage.setItem("jwt", data.token);
          message.success(data.message)
          readProfile(data.token)
          setState(initialState)
        }
      })
      .catch((error) => {
        if (error.response) {
          const { status, data } = error.response
          if (status === 401 || status === 500) { message.error(data?.message || "Something went wrong") }
          else { message.error("Something went wrong") }
        } else {
          message.error("Network Error: Server is unreachable or offline")
        }
      })
      .finally(() => {
        setIsProcessing(false)
      })

  }

  return (
    <>
      <main className='auth min-vh-100 d-flex align-items-center justify-content-center bg-light p-2 p-md-3'>
        <div className="container" style={{ maxWidth: '900px' }} data-aos="zoom-in">

          <Row className='bg-white rounded-3 shadow overflow-hidden'>

            <Col xs={24} md={12} className='d-flex flex-column position-relative' style={{ minHeight: '250px' }}>
              <img alt="Login" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&amp;fit=crop&amp;w=1400&amp;q=80" className='w-100 h-100 d-block' style={{ objectFit: 'cover', position: 'absolute', inset: 0 }} />
            </Col>

            <Col xs={24} md={12} className='p-4 d-flex flex-column justify-content-center' style={{ backgroundColor: '#ffffff' }}>
              <h1 className='text-center text-success mb-1 fs-3 fs-md-2'>Shop MERN</h1>
              {/* <p className='text-center text-secondary mb-2'>Forgot Password
                <Link to="/auth/forgotpassword" className='text-decoration-none text-success'> Reset Password</Link>
              </p> */}

              <Form layout='vertical' >
                <Row>
                  <Col span={24}>
                    <Item label="Email" required>
                      <Input size='large' name="email" addonBefore={<MailOutlined />} onChange={handleChange} placeholder='Enter email' />
                    </Item>
                  </Col>
                  <Col span={24}>
                    <Item label="Password" required>
                      <Input.Password size='large' name="password" addonBefore={<LockOutlined />} onChange={handleChange} placeholder='Enter password' />
                    </Item>
                  </Col>
                  <Col span={24} className='mt-2'>
                    <Button size='large' type='primary' htmlType='submit' block loading={isProcessing} onClick={handleLogin} style={{ backgroundColor: "#198754", borderColor: "#198754" }}>
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
              <p className="text-center mt-2 mb-0">
                Don't have account?
                <Link to="/auth/Register" className='text-decoration-none text-success'> Register</Link>
              </p>
            </Col>
          </Row>

        </div>
      </main>
    </>
  )
}

export default Login
