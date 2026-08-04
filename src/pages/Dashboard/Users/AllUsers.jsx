import { Button, Col, Dropdown, message, Modal, Row, Spin, Tag, Typography } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MoreOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Title } = Typography

const AllUsers = () => {

    const [documents, setDocuments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const getDocuments = () => {
        setIsLoading(true)

        const token = localStorage.getItem("jwt");

        axios.get("/api/auth/all-users", { headers: { Authorization: `Bearer ${token}` }, })
            .then((res) => {
                const { status, data } = res
                if (status === 200) {
                    setDocuments(data.users);
                }
            })
            .catch((error) => {
                console.error(error);
                message.error(error.response?.data?.message || "Something went wrong while getting users")
            }).finally(() => {
                setIsLoading(false)
            })

    }

    useEffect(() => { getDocuments() }, [])


    const handleDelete = (id) => {
        Modal.confirm({
            title: "Are you sure you want to delete this user?",
            content: "This action cannot be undone.",
            okText: "Yes, Delete",
            okType: "danger",
            cancelText: "No, Cancel",
            onOk() {
                setIsLoading(true)

                const token = localStorage.getItem("jwt");

                axios.delete(`/api/auth/delete-user/${id}`, { headers: { Authorization: `Bearer ${token}` }, })
                    .then((res) => {
                        const { status } = res
                        if (status === 200) {
                            const filteredUsers = documents.filter(doc => doc.uid !== id);
                            setDocuments(filteredUsers);
                            message.success("User Deleted Successfully")
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        message.error(error.response?.data?.message || "Something went wrong while deleting user")
                    })
                    .finally(() => {
                        setIsLoading(false)
                    })
            }
        });
    }


    return (
        <div className='py-2'>
            <div className="container">
                <Row>
                    <Col span={24} className='text-center'>
                        <Title level={1}>Users</Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="table-responsive" >
                            <table className="table align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading
                                        ? (
                                            <tr>
                                                <td colSpan={6} className="text-center py-5">
                                                    <Spin size="large" />
                                                </td>
                                            </tr>)
                                        :
                                        documents.map((user, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th>{i + 1}</th>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td><Tag color={user.role === "admin" ? "gold" : "blue"} className='text-capitalize'>{user.role}</Tag></td>
                                                    <td><Tag color={user.status === "active" ? "green" : "red"} className='text-capitalize'>{user.status}</Tag></td>
                                                    <td>
                                                        {
                                                            <Dropdown trigger={["click"]} placement="bottomRight" menu={{
                                                                items: [
                                                                    { key: "edit", icon: <EditOutlined />, label: "Edit", onClick: () => { if (user.uid) navigate("/dashboard/users/edit/" + user.uid); }, },
                                                                    { key: "delete", icon: <DeleteOutlined />, danger: true, label: "Delete", onClick: () => { if (user.uid) handleDelete(user.uid); }, },
                                                                ],
                                                            }}
                                                            >
                                                                <Button type="text" shape="circle" icon={<MoreOutlined />} />
                                                            </Dropdown>
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row >
            </div >
        </div >

    )
}




export default AllUsers