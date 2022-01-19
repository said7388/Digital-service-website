import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Customers.css';
import WhyChooseProducts from "./WhyChooseProducts";

function Customers() {
  return (
    <div className='my-md-5 my-4 text-center'>
      <Container>
        <p className='regular-title'>Our Clients</p>
        <Row className='p-md-5 g-4'>
          <Col sm={12} md={3}>
            <img src='https://www.linkpicture.com/q/Airbnb-Logo.png' alt='' />
          </Col>
          <Col sm={12} md={3}>
            <img src='https://www.linkpicture.com/q/FedEx-Logo.png' alt='' />
          </Col>
          <Col sm={12} md={3}>
            <img src='https://www.linkpicture.com/q/Google-Logo.png' alt='' />
          </Col>
          <Col sm={12} md={3}>
            <img
              src='https://www.linkpicture.com/q/Microsoft-Logo.png'
              alt=''
            />
          </Col>
        </Row>
      </Container>
      <WhyChooseProducts></WhyChooseProducts>
    </div>
  );
}

export default Customers;
