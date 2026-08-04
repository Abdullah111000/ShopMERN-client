import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Products from './Products'
import Orders from './Orders'
import Users from './Users'
import ProtectedRoute from '@/components/ProtectedRoute'
import NotFound from './NotFound'

const Index = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products/*' element={<ProtectedRoute Component={Products} allowedRoles={["admin"]} />} />
            <Route path='orders/*' element={<ProtectedRoute Component={Orders} />} />
            <Route path='users/*' element={<ProtectedRoute Component={Users} allowedRoles={["admin"]} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Index