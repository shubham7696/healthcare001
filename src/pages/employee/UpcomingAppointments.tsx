import React, { useEffect, useState } from 'react'
import { bookingsData } from '../../models/bookings/BookingsData';
import { Card, Row, Col } from "antd";
import "../../styles/GridStyles.css";


function UpcomingAppointments() {
      const [data, setData] = useState([]);

      useEffect(() => {
        setData(bookingsData);
      }, []);
      
  return (
    <div className="grid-container">
      <Row gutter={[16, 16]}>
        {data.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card title={item.name} style={{ width: "100%",}}>
              <p>
                Date: {item.date} <br />
                Time: {item.time}
              </p>
              Phone: {item.number}
              <br />
              With: Doctor
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default UpcomingAppointments
