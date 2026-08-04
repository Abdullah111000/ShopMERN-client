import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Forgotpassword from './Forgotpassword'
import PageNotFound from '../PageNotFound'


const Auth = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='Register' element={<Register />} />
                <Route path='forgotpassword' element={<Forgotpassword/>} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>

        </>
    )
}

export default Auth