import React from "react";
import "./Joincompany.css";
import { Col, Container, Row } from "react-bootstrap";

function Joincompany() {
  return (
    <Container className='my-md-5 my-4'>
      <Row className='joincompany mx-auto'>
        <Col sm={12} md={7} className='p-5'>
          <p className='join-title'>
            Join 100 Compannies who boost their business with Product
          </p>
          <button className="btn join-btn px-3">Get This</button>
        </Col>
        <Col sm={12} md={5}>
          <img className='img-fluid' src='https://www.linkpicture.com/q/screen_2.png' alt='' />
        </Col>
      </Row>
    </Container>
  );
}

export default Joincompany;
