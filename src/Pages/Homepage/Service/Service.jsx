import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Service.css";

function Service() {
  return (
    <div className='my-md-5 my-4 py-md-5 service-container'>
      <Container>
        <h2 className='service-title'>
          Product was Built Specifically <br /> for You
        </h2>
        <Row className='container'>
          <Col sm={11} md={3}>
            <img
              className='service-img'
              src='https://www.linkpicture.com/q/icon1_1.png'
              alt=''
            />
            <p className='service-subtitle'>First click tests</p>
            <p className='service-text'>
              While most people enjoy casino gambling,
            </p>
          </Col>
          <Col sm={11} md={3}>
            <img
              className='service-img'
              src='https://www.linkpicture.com/q/icon2_1.png'
              alt=''
            />
            <p className='service-subtitle'>Design surveys</p>
            <p className='service-text'>
              Sports betting, lottery and bingo playing for the fun
            </p>
          </Col>
          <Col sm={12} md={3}>
            <img
              className='service-img'
              src='https://www.linkpicture.com/q/icon3_1.png'
              alt=''
            />
            <p className='service-subtitle'>Preference tests</p>
            <p className='service-text'>
              The Myspace page defines the individual.
            </p>
          </Col>
          <Col sm={12} md={3}>
            <img
              className='service-img'
              src='https://www.linkpicture.com/q/icon4_1.png'
              alt=''
            />
            <p className='service-subtitle'>Five second tests</p>
            <p className='service-text'>
              Personal choices and the overall personality of the person.{" "}
            </p>
          </Col>
        </Row>
        <div className='text-center'>
          <button className='btn btn-regular'>SIGN UP NOW</button>
        </div>
      </Container>
    </div>
  );
}

export default Service;
