import { DatePicker, Form, Input, TimePicker, message } from "antd";
import "../../styles/AuthStyles.css";
import "../../models/docs/DocData.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllDoc } from "../../models/docs/DocData.ts";
import { Dropdown } from "react-bootstrap";
import { addBooking, bookingsData, getNewBookingId } from "../../models/bookings/BookingsData.ts";
import { useEffect, useState } from "react";

const NewAppointmentPage = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let id = location.state?.id || getNewBookingId();
  const [buttonText, setButtonText] = useState("Make Appointment");

  useEffect(() => {
    if (location?.state?.id != null) {
      const editData = bookingsData.find((item) => item.id === id);
      setButtonText("Update Appointment");
      if (editData != null) {
        id = editData.id;
        form.setFieldsValue(editData);
      }
    }
  }, []);

  const [selectedDoctorId, setSelectedDoctorId] = useState();

  const onfinishHandler = (values) => {
    const { name, email, number, date, time } = values;
    addBooking({
      id: id,
      name: name,
      email: email,
      number: number,
      date: date.format("YYYY-MM-DD"), // Format date as required
      time: time.format("HH:mm"), // Format time as required
      //doctorId: selectedDoctorId,
    });
    message.success("Booking successfull");
    form.resetFields();
  };

  return (
    <div>
      <div>
        <Form form={form} layout="vertical" onFinish={onfinishHandler} className="register-form">
          <h4>Book Appointment</h4>
          <Form.Item label="Patient Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Patient Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Patient Number" name="number">
            <Input type="number" required />
          </Form.Item>

          <div className="dateTimePicker">
            <Form.Item
              label="Time"
              name="time"
              rules={[{ required: true, message: "Please select appointment time" }]}
            >
              <TimePicker />
            </Form.Item>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Please select appointment date" }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Select Doctor"
              name="doctorId"
              //rules={[{ required: true, message: "Please select a doctor" }]}
            >
              <Dropdown onSelect={(e) => setSelectedDoctorId(e)}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select Doctor
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {getAllDoc().map((doc) => {
                    return (
                      <Dropdown.Item key={doc.id} eventKey={doc.id}>
                        {doc.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Item>
          </div>
          <button className="btn btn-primary" type="submit">
            {buttonText}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default NewAppointmentPage;
