import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Managment.css';

function Managment() {
  return (
    <div className='my-md-5 my-4'>
      <Container className="mt-5">
        <Row className="container">
          <Col sm={12} md={6}>
            <p className='regular-subtitle'>Effortless Validation for</p>
            <p className='regular-title'>Management</p>
            <p className='regular-text'>
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.
            </p>
            <p className='regular-subtitle'>Accessory makers</p>
            <p className='regular-text'>
              While most people enjoy casino gambling, sports betting, lottery
              and bingo playing for the fun
            </p>
            <p className='regular-subtitle'>Alterationists</p>
            <p className='regular-text'>
              If you are looking for a new way to promote your business that
              won’t cost you more money,{" "}
            </p>
          </Col>
          <Col sm={12} md={6}>
            <img src="https://www.linkpicture.com/q/amico_1.png" alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Managment;
