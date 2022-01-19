import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Customers.css";

function WhyChooseProducts() {
  return (
    <div className='customers-choose text-center pb-md-5 p-md-4 p-2'>
      <Container>
        <p className='regular-title'>Why Choose Product?</p>
        <Row>
          <Col sm={12} md={4}>
            <Card className='p-2 p-md-3 shadow'>
              <Card.Body>
                <img src='https://www.linkpicture.com/q/icon1_1.png' alt='' />
                <p className='regular-subtitle'>Special Business</p>
                <p className='regular-text'>
                  Product helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='p-2 p-md-3 shadow'>
              <Card.Body>
                <img src='https://www.linkpicture.com/q/icon2_1.png' alt='' />
                <p className='regular-subtitle'>Instant Result</p>
                <p className='regular-text'>
                  Product helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='p-2 p-md-3 shadow'>
              <Card.Body>
                <img src='https://www.linkpicture.com/q/icon3_1.png' alt='' />
                <p className='regular-subtitle'>Fastest way to organize</p>
                <p className='regular-text'>
                  Product helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyChooseProducts;
