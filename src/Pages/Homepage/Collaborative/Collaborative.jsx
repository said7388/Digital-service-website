import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../../Images/Collaborative.png";
import "./Collaborative.css";

function Collaborative() {
  return (
    <Container className="my-md-5 my-4">
      <Row>
        <Col sm={12} md={6}>
          <p className='regular-subtitle'>Optimisation for</p>
          <p className='regular-title'>Collaborative</p>
          <p className='regular-text'>
            Few would argue that, despite the advancements of feminism over the
            past three decades, women still face a double standard when it comes
            to their behavior.{" "}
          </p>
          <p className='regular-subtitle'>Accessory makers</p>
          <p className='regular-text'>
            While most people enjoy casino gambling, sports betting, lottery and
            bingo playing for the fun
          </p>
          <p className='regular-subtitle'>Alterationists</p>
          <p className='regular-text'>
            If you are looking for a new way to promote your business that won’t
            cost you more money,{" "}
          </p>
        </Col>
        <Col sm={12} md={6}>
          <img src={image} alt='' className='img-fluid' />
        </Col>
      </Row>
    </Container>
  );
}

export default Collaborative;
