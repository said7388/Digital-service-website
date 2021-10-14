import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Experts.css";

function Experts() {
  return (
    <div className='experts-container pt-md-5 my-md-5 my-4'>
      <Container>
        <h1 className='regular-title'>Quick & Easy Process</h1>
        <p className='regular-text mt-2'>
          Do you require some help for your project: Conception workshop, <br />
          prototyping, marketing strategy, landing page, Ux/UI?
        </p>
        <div className='m-md-5'>
          <Row className='d-flex justify-around g-4 text-center'>
            <Col sm={12} md={6} className=''>
              <div className='d-flex justify-between align-items-center ms-md-5'>
                <img
                  src='https://www.linkpicture.com/q/Avator1.png'
                  className='expert-img'
                  alt=''
                />
                <p className='expert-text shadow ms-3'>
                  I can take care of your pitch
                </p>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className='d-flex justify-between align-items-center ms-md-5'>
                <p className='expert-text shadow me-3'>
                  I can prototype your app
                </p>
                <img
                  src='https://www.linkpicture.com/q/Avator2.png'
                  className='expert-img'
                  alt=''
                />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className='d-flex justify-between align-items-center ms-md-5'>
                <p className='expert-text shadow me-3'>
                  I can design your website backend
                </p>
                <img
                  src='https://www.linkpicture.com/q/Avator3.png'
                  className='expert-img'
                  alt=''
                />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className='d-flex justify-between align-items-center ms-md-5'>
                <img
                  src='https://www.linkpicture.com/q/Avator4.png'
                  className='expert-img'
                  alt=''
                />
                <p className='expert-text shadow ms-3'>
                  I can help marketing strategy
                </p>
              </div>
            </Col>
          </Row>
          <button className='btn btn-regular py-2 px-3 my-5'>
            Contact our expert
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Experts;
