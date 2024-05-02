import { useEffect, useState } from "react";
import { empData } from "../../models/emp/EmployeeData.ts";
import { Button } from "antd";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EmployeeListPage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setData(empData);
  }, []);


  const handleEdit = (id) => {
    navigate("/addEmployee", { state: { id } });
  };

  const handleDel = (id) => {
    console.log(`============== ${id} ============`);
    if (id >= 0) {
      if (window.confirm("Are you sure to delete this item")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <td>Sr. No</td>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Type</td>
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
                <td>{item.type}</td>
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

export default EmployeeListPage;
