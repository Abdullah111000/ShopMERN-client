import React from 'react'
import { Space } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

const Navbar = () => {
    // Global context se true/false status aur logout function utha rahe hain
    const { isAuth, handleLogout } = useAuth()
    
    const location = useLocation()  // current URL pathname deta hai

    return (
        <>
            <nav className="sticky-top navbar navbar-expand-lg navbar-dark site-navbar">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
                        <span className="brand-icon">
                            <i className="bi bi-shop" />
                        </span>
                        <span className="brand-text ms-2">ShopMERN</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/product' ? 'active' : ''}`} to='/product'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to='/services'>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to='/contact'>Contact</Link>
                            </li>
                        </ul>
                        <div className='d-flex'>
                            <Space>
                                {!isAuth
                                    ? <>
                                        <Link to="/auth/login" className="btn btn-nav-login">Login</Link>
                                        <Link to="/auth/register" className="btn btn-nav-register">Register</Link>
                                    </>
                                    : <>
                                        <Link to="/dashboard" className="btn btn-nav-dashboard">Dashboard</Link>
                                        <button className='btn btn-nav-logout' type="button" onClick={handleLogout}>Logout</button>
                                    </>
                                }
                            </Space>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
