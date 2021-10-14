import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ims from "../../../Images/CustomerSupport.png";
import icon1 from "../../../Images/Group1.png";
import icon2 from "../../../Images/Group2.png";
import icon3 from "../../../Images/Group3.png";
import "./CustomerSupport.css";

function CustomerSupport() {
  return (
    <Container className="my-md-5 my-4">
      <Row>
        <Col sm={12} md={6}>
          <img src={ims} alt='' className='img-fluid' />
        </Col>
        <Col sm={12} md={6} className='my-lg-5 '>
          <Container>
            <p className='regular-subtitle'>Easier decision making for</p>
            <p className='regular-title'>Customer Support</p>
            <p className='regular-text ms-3'>
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.
            </p>
            <div className='support-point'>
              <img width="35px" height="35px" src={icon1} alt='' />
              <p className='regular-text ms-3'>
                Never worry about overpaying for your energy again.{" "}
              </p>
            </div>
            <div className='support-point'>
              <img width="35px" height="35px" src={icon2} alt='' />
              <p className='regular-text ms-3'>
                We will only switch you to energy companies that we trust and
                will treat you right
              </p>
            </div>
            <div className='support-point'>
              <img width="35px" height="35px" src={icon3} alt='' />
              <p className='regular-text ms-3'>
                We track the markets daily and know where the savings are.
              </p>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomerSupport;
