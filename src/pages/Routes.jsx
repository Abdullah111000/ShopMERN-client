import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'
import { useAuth } from '../context/Auth'
import ProtectedRoute from '../components/ProtectedRoute'

const Index = () => {
  const { isAuth } = useAuth()
  console.log('isAuth', isAuth)
  return (
    <>
      <Routes>
        <Route path="/*" element={<Frontend />} />
        <Route path="/auth/*" element={!isAuth ? <Auth /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard/*" element={<ProtectedRoute Component={Dashboard} />} />
      </Routes>
    </>
  )
}

export default Index
