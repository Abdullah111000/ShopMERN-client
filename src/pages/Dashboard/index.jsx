import { useState } from "react";
import { Avatar, Dropdown, Layout, Menu } from "antd";
import { items } from "./MenuItems";
import Routes from "./Routes";
import { useAuth } from "@/context/Auth";
import { HomeOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);

    const { user, handleLogout } = useAuth();

    const year = new Date().getFullYear();
    const navigate = useNavigate()

    const topBarMenu = [
        {
            key: '0',
            label: user.email,
        },
        {
            key: '1',
            label: 'Home',
            icon: <HomeOutlined />,
            onClick: () => navigate("/")
        },
        {
            type: 'divider',
        },
        {
            key: '3',
            label: 'Logout',
            icon: <LogoutOutlined />,
            danger: true,
            onClick: handleLogout
        },
    ]

    return (
        <Layout className='min-vh-100 dashboard'>
            <Sider breakpoint="lg" collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items.filter(item => !item.allowedRoles || item.allowedRoles.includes(user.role)).map(({ allowedRoles, ...item }) => item)} />
            </Sider>
            <Layout>
                <Header className='p-0 px-4 bg-white d-flex align-items-center justify-content-end' style={{ height: 60 }}>
                    <div className="d-flex text-center m-3 ">
                        <Dropdown menu={{ items: topBarMenu }} trigger={['click']} placement="bottomRight">
                            <Avatar size={36} style={{ cursor: "pointer" }} icon={<UserOutlined />} />
                        </Dropdown>
                    </div>
                </Header>
                <Content className='p-3 pb-0'>
                    <div className="dashboard-content">

                        <Routes />
                    </div>
                </Content>
                <Footer className='text-center' style={{ padding: "13.5px 16px" }}>Shop MERN &copy; {year} Created by Abdullah Iftikhar. All Rights Reserved.</Footer>
            </Layout>
        </Layout>
    )
}


export default Dashboard