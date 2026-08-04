import { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Select, Typography, message, } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const { Title } = Typography;
const { Item } = Form;

const initialState = { role: "", status: "", };

const Edit = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const getUser = () => {
    const token = localStorage.getItem("jwt");

    axios.get(`http://localhost:8000/api/auth/user/${id}`, { headers: { Authorization: `Bearer ${token}`, }, })
      .then((res) => {
        const { status, data } = res
        if (status === 200) {
          setState(data.user);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response?.data?.message || "Failed to load user");
      });
  };
  useEffect(() => { getUser() }, []);


  const handleSubmit = () => {
    setIsProcessing(true);
    const token = localStorage.getItem("jwt");

    axios.patch(`http://localhost:8000/api/auth/update-user/${id}`, { role: state.role, status: state.status, }, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        message.success("User updated successfully");
        navigate("/dashboard/users/allusers");
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response?.data?.message || "Something went wrong");
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };


  return (
    <main>

      <div className="card p-3 p-md-4 mx-auto" style={{ maxWidth: 500 }}>
        <Title level={1} className="text-center">Update User</Title>

        <Form layout="vertical">
          <Row>
            <Col span={24}>
              <Item label="Name" required>
                <Input size="large" placeholder="Enter name" name="name" value={state.name} readOnly onChange={handleChange} />
              </Item>
            </Col>

            <Col span={24}>
              <Item label="Email" required>
                <Input size="large" placeholder="Enter email" name="email" value={state.email} readOnly onChange={handleChange} />
              </Item>
            </Col>

            <Col span={24}>
              <Item label="Role" required>
                <Select value={state.role} onChange={(value) => setState((s) => ({ ...s, role: value, }))}
                  options={[
                    {
                      label: "Admin",
                      value: "admin",
                    },
                    {
                      label: "User",
                      value: "user",
                    },
                  ]}
                />
              </Item>
            </Col>

            <Col span={24}>
              <Item label="Status" required>
                <Select value={state.status} onChange={(value) => setState((s) => ({ ...s, status: value, }))}
                  options={[
                    {
                      label: "Active",
                      value: "active",
                    },
                    {
                      label: "Inactive",
                      value: "inactive",
                    },
                  ]}
                />
              </Item>
            </Col>

            <Col span={24}>
              <Button type="primary" block loading={isProcessing} onClick={handleSubmit}>Update</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </main>
  );
};

export default Edit;