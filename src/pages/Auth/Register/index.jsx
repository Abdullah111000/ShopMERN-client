import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, Input, message, Row } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined, } from "@ant-design/icons";
import Aos from 'aos';

import axios from 'axios';

const Register = () => {
  const { Item } = Form;

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    })
  }, [])

  const initialState = { name: "", email: "", password: "", confirmPassword: "" }
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

  const navigate = useNavigate()


  const handleRegister = () => {

    let { name, email, password, confirmPassword } = state

    if (confirmPassword !== password) { return message.error("Password doesn't match.") }
    if (password.length < 6) { return message.error("Password must be strong") }


    const formData = { name, email, password }

    setIsProcessing(true);

    axios.post("/api/auth/register", formData)
      .then((res) => {
        const { status, data } = res
        if (status === 201) {
          message.success(data.message)
          setState(initialState)
          navigate("/auth/login")
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

            <Col xs={24} md={12} className='d-flex flex-column' style={{ minHeight: '250px', height: 'auto' }}>
              <img alt="register" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8fHww" className='w-100 h-100 d-block' style={{ objectFit: 'cover', minHeight: '100%', position: 'absolute', top: 0, left: 0 }} />
            </Col>

            <Col xs={24} md={12} className='p-4 d-flex flex-column justify-content-center position-relative' style={{ backgroundColor: '#ffffff' }}>
              <h1 className='text-center text-success mb-1 fs-3 fs-md-2'>Shop MERN</h1>
              <p className='text-center text-secondary mb-2'>Create your Account</p>

              <Form layout='vertical'>
                <Row>
                  <Col span={24}>
                    <Item label="Name" required>
                      <Input size='large' name="name" addonBefore={<UserOutlined />} onChange={handleChange} placeholder='Enter your Name' />
                    </Item>
                  </Col>
                  <Col span={24}>
                    <Item label="Email" required>
                      <Input size='large' name="email" addonBefore={<MailOutlined />} onChange={handleChange} placeholder='Enter your email' />
                    </Item>
                  </Col>
                  <Col span={24}>
                    <Item label="Password" required>
                      <Input.Password size='large' name="password" addonBefore={<LockOutlined />} onChange={handleChange} placeholder='Enter strong password' />
                    </Item>
                  </Col>
                  <Col span={24}>
                    <Item label="Confirm Password" required>
                      <Input.Password size='large' name="confirmPassword" addonBefore={<LockOutlined />} onChange={handleChange} placeholder='Enter confirm password' />
                    </Item>
                  </Col>
                  <Col span={24} className='mt-2'>
                    <Button size='large' type='primary' htmlType='submit' block loading={isProcessing} onClick={handleRegister} style={{ backgroundColor: "#198754", borderColor: "#198754" }}>Register</Button>
                  </Col>
                </Row>
              </Form>
              <p className="text-center mt-2 mb-0">
                Already have account?
                <Link to="/auth/login" className='text-decoration-none text-success'> Login</Link>
              </p>
            </Col>
          </Row>

        </div>
      </main>
    </>
  )
}

export default Register




