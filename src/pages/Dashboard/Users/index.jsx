import { Route, Routes } from 'react-router-dom'
import AllUsers from './AllUsers'
import Edit from './Edit'

const Users = () => {
    return (
        <Routes>
            <Route path='allusers' element={<AllUsers />} />
            <Route path='edit/:id' element={<Edit />} />
        </Routes>
    )
}

export default Users