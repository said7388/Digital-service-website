import React from "react";
import {Container } from "react-bootstrap";
import Pricecard from "../../Shared/Pricecard"
import "./Price.css";

function Price() {
  return (
    <div className='my-md-5 my-4 text-center'>
      <Container>
        <p className='regular-title'>Price Table</p>
        <p className='regular-text'>We offer competitive price</p>
        <Pricecard></Pricecard>
      </Container>
    </div>
  );
}

export default Price;
