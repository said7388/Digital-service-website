import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Price.css";

function Price() {
  return (
    <div className='my-md-5 my-4 text-center'>
      <Container>
        <p className='regular-title'>Price Table</p>
        <p className='regular-text'>We offer competitive price</p>
        <Row className='g-2'>
          <Col sm={12} md={4}>
            <Card style={{ width: "21rem" }} className='shadow p-2'>
              <Card.Body>
                <p className='price-title'>Free</p>
                <p className='regular-text'>Brief price description</p>
                <p className='price'>
                  0 <span className='fs-4'>$</span>
                </p>
                <p className='regular-text'>Only 2 Operators</p>
                <p className='regular-text'>Notifications</p>
                <p className='regular-text'>Landing Pages</p>
                <button className='btn btn-regular'>Order Now</button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card style={{ width: "21rem" }} className='shadow p-2 price-standard'>
              <Card.Body>
                <p className='price-title'>Standard</p>
                <p className='regular-text'>Brief price description</p>
                <p className='price price-standard'>
                  5 <span className='fs-4'>$</span>
                </p>
                <p className='regular-text'> 5 Operators</p>
                <p className='regular-text'>Notifications</p>
                <p className='regular-text'>Landing Pages</p>
                <button className='btn btn-warning'>Order Now</button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card style={{ width: "21rem" }} className='shadow p-2'>
              <Card.Body>
                <p className='price-title'>Premium</p>
                <p className='regular-text'>Brief price description</p>
                <p className='price'>
                  10 <span className='fs-4'>$</span>
                </p>
                <p className='regular-text'>10+ Operators</p>
                <p className='regular-text'>Notifications</p>
                <p className='regular-text'>Landing Pages</p>
                <button className='btn btn-regular'>Order Now</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Price;
