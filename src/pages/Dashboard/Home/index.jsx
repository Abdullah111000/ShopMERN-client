import { Button, Col, Row, Typography } from 'antd'
// import { ArrowRightOutlined } from "@ant-design/icons";
// import { Link } from 'react-router-dom';

const { Title } = Typography

const Home = () => {

    return (
        <div className='py-5'>
            <div className="container">
                <Row>
                    <Col span={24} className='text-center'>
                        <Title level={1}>Welcome to the Dashboard</Title>
                        {/* <Link to={`products`}>
                            <Button type='primary' size='large' className='mt-3'>Manage Your Products <ArrowRightOutlined /></Button>
                        </Link> */}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home