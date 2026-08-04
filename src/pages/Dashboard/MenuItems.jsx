import { DashboardOutlined, OrderedListOutlined, ProductOutlined, ShopOutlined, TeamOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const root = "/dashboard"
const items = [

    { key: "0", label: (<Link to="/" className="text-decoration-none text-white fw-bold" style={{ fontSize: "20px" }}>  ShopMERN</Link>), icon: <ShopOutlined /> },
    { key: "1", label: <Link to={`${root}`} className='text-decoration-none'>Dashboard</Link>, icon: <DashboardOutlined /> },
    { key: "2", label: <Link to={`${root}/products`} className='text-decoration-none'>Products</Link>, icon: <ProductOutlined /> ,  allowedRoles: ["admin"] },
    { key: "3", label: <Link to={`${root}/orders`} className='text-decoration-none'>Orders</Link>, icon: <OrderedListOutlined />},
    { key: "4", label: <Link to={`${root}/users/allusers`} className='text-decoration-none'>Users</Link>, icon: <TeamOutlined/> ,  allowedRoles: ["admin"] },

]

export { items }