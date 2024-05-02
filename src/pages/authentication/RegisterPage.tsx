import { Form, Input, message } from "antd";
import "../../styles/AuthStyles.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addEmp, checkUserExists, getAllEmp, getNewEmpId } from "../../models/emp/EmployeeData.ts";
import AppFooter from "../../components/AppFooter";

const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const onfinishHandler = (values) => {
    setErrorMessage("");
    if (checkUserExists(values.email)) {
      message.error("User already exists");
      setErrorMessage("User already exists");
    } else {
      addEmp({
        id: getNewEmpId(),
        name: values.name,
        email: values.email,
        password: values.password,
      });
      message.success("User added successfully");
      navigate("/login");
    }
    console.log(`${getAllEmp}`);
  };

  return (
    <div>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
          <h3>Register Page</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Link to={"/login"} className="m-2">
            Already a user ? Login
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
      <AppFooter />
    </div>
  );
};

export default RegisterPage;
