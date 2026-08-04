import { useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Select, Typography, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const { Title } = Typography;
const { Item } = Form;

const initialState = { name: "", price: "", stock: "", category: "", description: "", };

const Edit = () => {
  const [state, setState] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const getProduct = () => {

    const token = localStorage.getItem("jwt");
    if (!token) { message.error("You must be logged in to edit a product"); return; }



    setIsLoading(true);
    axios.get(`http://localhost:8000/api/products/single/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        const { status, data } = res;
        if (status === 200 && data.product) {
          setState({
            name: data.product.name || "",
            price: data.product.price ?? "",
            stock: data.product.stock ?? "",
            category: data.product.category || "",
            description: data.product.description || "",
          });
        } else {
          message.error(data.message || "Failed to load product");
        }
      })
      .catch((err) => {
        console.error(err);
        message.error(err.response?.data?.message || "Failed to load product");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, [id]);

  const handleSubmit = () => {
    const { name, price, stock, category, description } = state;

    if (!name || !price || !stock || !category || !description) {
      return message.error("Please fill all fields");
    }

    if (isNaN(price) || isNaN(stock)) {
      return message.error("Price and stock must be numbers");
    }

    if (Number(price) < 0 || Number(stock) < 0) {
      return message.error("Price and stock must be non-negative");
    }

    const token = localStorage.getItem("jwt");
    if (!token) {
      return message.error("You must be logged in to update a product");
    }

    setIsProcessing(true);

    axios.patch(`http://localhost:8000/api/products/update/${id}`, { name, price: Number(price), stock: Number(stock),
          category,
          description,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          message.success(data.message || "Product updated successfully");
          navigate("/dashboard/products");
        } else {
          message.error(data.message || "Something went wrong");
        }
      })
      .catch((err) => {
        console.error(err);
        message.error(err.response?.data?.message || "Something went wrong");
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <main className='auth min-vh-100 d-flex align-items-center justify-content-center bg-light p-2 p-md-3'>
      <div className='container' style={{ maxWidth: "700px" }}>
        <div className='card p-3 p-md-4 mx-auto'>
          <div className='d-flex justify-content-between align-items-center my-3'>
            <h2>Edit Product</h2>
            <Button
              type='primary'
              onClick={() => navigate("/dashboard/products")}
              className='bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 ease-in-out'
            >
              All Products
            </Button>
          </div>
          <Form layout='vertical'>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Item label='Name' required>
                  <Input size='large' name='name' value={state.name} onChange={handleChange} placeholder='Enter product name' />
                </Item>
              </Col>
              <Col span={12}>
                <Item label='Price' required>
                  <Input size='large' name='price' value={state.price} onChange={handleChange} placeholder='Enter price' />
                </Item>
              </Col>
              <Col span={12}>
                <Item label='Stock' required>
                  <Input size='large' name='stock' value={state.stock} onChange={handleChange} placeholder='Enter stock quantity' />
                </Item>
              </Col>
              <Col span={24}>
                <Item label='Category' required>
                  <Select
                    size='large'
                    value={state.category}
                    onChange={(value) => setState((s) => ({ ...s, category: value }))}
                    placeholder='Select product category'
                    allowClear
                  >
                    <Select.Option value='Electronics'>Electronics</Select.Option>
                    <Select.Option value='Fashion'>Fashion</Select.Option>
                    <Select.Option value='Home & Living'>Home & Living</Select.Option>
                    <Select.Option value='Beauty & Cosmetics'>Beauty & Cosmetics</Select.Option>
                  </Select>
                </Item>
              </Col>
              <Col span={24}>
                <Item label='Description' required>
                  <Input.TextArea size='large' name='description' value={state.description} onChange={handleChange} placeholder='Enter product description' rows={4} />
                </Item>
              </Col>
              <Col span={24}>
                <Button type='primary' htmlType='button' block loading={isProcessing || isLoading} onClick={handleSubmit}>
                  Update Product
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Edit;
