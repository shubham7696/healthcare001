import { Form, Input, message } from "antd";
import "../../styles/AuthStyles.css";
import { addEmp, checkUserExists, empData, getNewEmpId } from "../../models/emp/EmployeeData.ts";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddEmployeePage = () => {
  const [form] = Form.useForm();

  const location = useLocation();
  const navigate = useNavigate();
  let id = location.state?.id || getNewEmpId();
  const [buttonText, setButtonText] = useState("Add Employee");

  useEffect(() => {
    if (location?.state?.id != null) {
      const editData = empData.find((item) => item.id === id);
      setButtonText("Update Employee Data");
      if (editData != null) {
        id = editData.id;
        form.setFieldsValue(editData);
      }
    }
  }, []);
  
  const onfinishHandler = (values) => {
    if (checkUserExists(values.email) && buttonText === "Add Employee") {
      message.error("User already exists");
    } else {
      addEmp({
        id: id,
        name: values.name,
        email: values.email,
        password: values.password,
      });
      message.success(
        buttonText === "Add Employee" ? "User added successfully" : "User updated successfully"
      );
      form.resetFields();
      navigate("/empList");
    }
  };

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onfinishHandler} className="register-form">
        <h3>Add New Employee</h3>
        <Form.Item label="Name" name="name">
          <Input type="text" required />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <button className="btn btn-primary" type="submit">
          {buttonText}
        </button>
      </Form>
    </div>
  );
};

export default AddEmployeePage;
