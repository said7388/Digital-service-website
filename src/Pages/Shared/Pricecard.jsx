import { Card, Col, Row } from "react-bootstrap";
import React from "react";

function Pricecard() {
  return (
    <div className="py-md-5 my-4">
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
          <Card
            style={{ width: "21rem" }}
            className='shadow p-2 price-standard'>
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
    </div>
  );
}

export default Pricecard;
