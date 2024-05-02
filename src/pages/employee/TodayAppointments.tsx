import { Button } from "antd";
import { useEffect, useState } from "react";
import { bookingsData, getTodaysBookings } from "../../models/bookings/BookingsData";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function TodayAppointments() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState({}); 

  const handleEdit = (id) => {
    navigate("/newAppointment", { state: { id } });
  };

  const handleDel = (id) => {
    console.log(`============== ${id} ============`);
    if (id >= 0) {
      if (window.confirm("Are you sure to delete this user")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  useEffect(() => {
    setData(getTodaysBookings());
  }, []);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <td>Sr. No</td>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Time</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{item.id.toString()}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td>{item.time}</td>
                <td>
                  <Button onClick={() => handleEdit(item.id)}>Edit</Button>
                  <Button onClick={() => handleDel(item.id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TodayAppointments;
