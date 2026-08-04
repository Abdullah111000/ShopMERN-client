import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Form, Input, Row, message } from 'antd'
import { ArrowLeftOutlined, MailOutlined } from "@ant-design/icons";
import Aos from 'aos';

const Forgotpassword = () => {

    const { Item } = Form;

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        })
    }, [])

    const [email, setEmail] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const handleResetPassword = async () => {

        if (!email.trim()) {
            return message.error("Please enter your email");
        }

        setIsProcessing(true);

        // Simulated loader delay
        setTimeout(() => {
            try {
                // LocalStorage se mock user data read kar rahe hain
                const users = JSON.parse(localStorage.getItem("users"));

                // Agar LocalStorage me koi user data saved hai aur email match karti hai
                const foundedUser = users.find((user) => { return user.email === email })
                if (foundedUser) {
                    message.success("Password reset simulated successfully. Check console or localStorage updates.");

                    console.log("Password Reset Simulated for:", email);
                } else {
                    // Agar email match nahi hoti ya account nahi milta
                    message.error("No account found with this email in local storage.");
                }

            } catch (error) {
                console.error("Local Storage Auth Error:", error);
                message.error("Something went wrong. Please try again.");
            } finally {
                setIsProcessing(false);
            }
        }, 1000);

    };

    return (
        <>
            <main className='auth min-vh-100 d-flex align-items-center justify-content-center bg-light p-2 p-md-3'>
                <div className="container" style={{ maxWidth: '900px' }} data-aos="zoom-in">

                    <Row className='bg-white rounded-3 shadow overflow-hidden'>

                        <Col xs={24} md={12} className='d-flex flex-column position-relative' style={{ minHeight: '250px' }} >
                            <img alt="Forgotpassword" src="https://images.unsplash.com/photo-1600695268275-1a6468700bd5?q=80&w=1171&auto=format&fit=crop" className='w-100 h-100' style={{ objectFit: 'cover', position: 'absolute', inset: 0 }} />
                        </Col>

                        <Col xs={24} md={12} className='p-4 d-flex flex-column justify-content-center'>

                            <h1 className='text-center text-success mb-2'>Saylani Welfare</h1>

                            <p className='text-center text-secondary mb-2'>Reset your account password</p>

                            <div className="alert alert-info text-center py-2 mt-3" style={{ fontSize: "0.85rem", borderRadius: "6px" }}>
                                Enter your registered email and we'll send you a password reset link.
                            </div>

                            <Form layout='vertical'>
                                <Row>
                                    <Col span={24}>
                                        <Item label="Email Address" required>
                                            <Input size='large' value={email} onChange={(e) => setEmail(e.target.value)} addonBefore={<MailOutlined />} placeholder='Enter registered email' />
                                        </Item>
                                    </Col>

                                    <Col span={24} className='mt-2'>
                                        <Button size='large' type='primary' block loading={isProcessing} onClick={handleResetPassword} style={{ backgroundColor: "#198754", borderColor: "#198754" }}>
                                            Reset Password
                                        </Button>
                                    </Col>

                                </Row>

                            </Form>

                            <Link to="/auth/login" className='text-decoration-none text-success d-flex align-items-center justify-content-center mt-4'> <ArrowLeftOutlined className="me-2" />
                                Back to Login
                            </Link>

                        </Col>

                    </Row>

                </div>
            </main>
        </>
    )
}

export default Forgotpassword;
