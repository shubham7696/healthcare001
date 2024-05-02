import { Form, Input, message } from "antd";
import "../../styles/AuthStyles.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkValidUser } from "../../models/emp/EmployeeData";
import AppFooter from "../../components/AppFooter";
import { updateLoggedUser } from "../../models/LoggedUserData";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onfinishHandler = (values) => {
    setErrorMessage("");
    const user = checkValidUser(values.email, values.password);
    if (user != null) {
      // navigate to homepage
      if (user.type == "admin") {
        message.success("Welcome Admin");
      } else {
        message.success(`Welcome ${user.name}`);
      }
      // using context provider
      navigate("/", { state: user.type });
      updateLoggedUser(user)
    } else {
      setErrorMessage("Invalid Credentials");
      message.error("Invalid Credentials");
    }
  };

  return (
    <div>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
          <h3>Login Page</h3>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Link to={"/register"} className="m-2">
            New user ? Register
          </Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
      <AppFooter />
    </div>
  );
};

export default LoginPage;
