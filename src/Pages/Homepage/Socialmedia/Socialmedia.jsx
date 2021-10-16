import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Socialmedia.css";

function Socialmedia() {
  return (
    <>
      <Container className='mx-auto my-md-5 my-4'>
        <Row>
          <Col sm={12} md={6}>
            <img
              src='https://www.linkpicture.com/q/amico.png'
              className='img-fluid'
              alt=''
            />
          </Col>
          <Col sm={12} md={6} className='mt-md-5'>
            <p className='social-title mt-md-4'>Work at the speed of thought</p>
            <p className='social-text mt-md-4'>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <Link to='/pricing'>
              <button className='btn btn-regular mt-md-5'>Start Now</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Socialmedia;
