import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Contents.css";

function Contents() {
  return (
    <div className='my-md-5 my-4'>
      <Container>
        <h1 className='regular-title'>Contents Strategies</h1>
        <p className='regular-text'>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.{" "}
        </p>
        <Row className="g-3">
          <Col sm={12} md={4}>
            <Card>
              <Card.Img
                variant='top'
                src='https://www.linkpicture.com/q/image1_20.png'
              />
              <Card.Body>
                <p>
                  By <b>Wahid Ari</b> | 03 March 2019
                </p>
                <Card.Title className='content-title'>
                  Increasing Prosperity With Positive Thinking
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card>
              <Card.Img
                variant='top'
                src='https://www.linkpicture.com/q/image3.png'
              />
              <Card.Body>
                <p>
                  By <b>Wahid Ari</b> | 03 March 2019
                </p>
                <Card.Title className='content-title'>
                  Success Steps For Your Personal Or Business
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card>
              <Card.Img
                variant='top'
                src='https://www.linkpicture.com/q/image2_2.png'
              />
              <Card.Body>
                <p>
                  By <b>Wahid Ari</b> | 04 March 2019
                </p>
                <Card.Title className='content-title'>
                  Motivation Is The First Step To Success
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contents;
