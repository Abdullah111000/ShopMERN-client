import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import About from './About'
import Serv from './Serv'
import Contact from './Contact'

import Header from '@/components/Header'
import Footer from '@/components/Footer'




import PageNotFound from '../PageNotFound'

const Frontend = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Products/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Serv/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<PageNotFound />}/>
            </Routes>
            <Footer />

        </>
    )
}

export default Frontend