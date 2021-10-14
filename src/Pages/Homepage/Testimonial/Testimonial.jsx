import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className='my-md-5 pt-5 my-4'>
      <Container>
        <h1 className='regular-title text-center'>What Clients Say</h1>
        <p className='regular-text text-center'>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics.
        </p>
        <Row>
          <Col sm={12} md={4}>
            <Card style={{ width: "21rem" }}>
              <Card.Body>
                <p className='review-star'>
                  <Rating
                    initialRating={4}
                    emptySymbol='far fa-star'
                    fullSymbol='fas fa-star'
                    readonly
                  />
                </p>
                <Card.Text>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </Card.Text>
                <div className='review'>
                  <img
                    src='https://www.linkpicture.com/q/Ellipse1_1.png'
                    alt=''
                    className='review-img'
                  />
                  <div className='review-text'>
                    <p className='review-name'>Wahid Ari</p>
                    <p className='review-text'>Designer</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card style={{ width: "21rem" }}>
              <Card.Body>
                <p className='review-star'>
                  <Rating
                    initialRating={4}
                    emptySymbol='far fa-star'
                    fullSymbol='fas fa-star'
                    readonly
                  />
                </p>
                <Card.Text>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </Card.Text>
                <div className='review'>
                  <img
                    src='https://www.linkpicture.com/q/Ellipse2.png'
                    alt=''
                    className='review-img'
                  />
                  <div className='review-text'>
                    <p className='review-name'>Abdul Hamid</p>
                    <p className='review-text'>Developer</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card style={{ width: "21rem" }}>
              <Card.Body>
                <p className='review-star'>
                  <Rating
                    initialRating={4}
                    emptySymbol='far fa-star'
                    fullSymbol='fas fa-star'
                    readonly
                  />
                </p>
                <Card.Text>
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </Card.Text>
                <div className='review'>
                  <img
                    src='https://www.linkpicture.com/q/Ellipse3_1.png'
                    alt=''
                    className='review-img'
                  />
                  <div className='review-text'>
                    <p className='review-name'>David Malan</p>
                    <p className='review-text'>Designer</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonial;
