import React from "react";
import './Pricing.css';
import { Container } from "react-bootstrap";
import Pricecard from "../Shared/Pricecard";
import Joincompany from "../Homepage/Joincompany/Joincompany"

function Pricing() {
  return (
    <div className='my-md-5 my-4 text-center'>
      <Container>
        <p className='regular-title'>PRICING</p>
        <p className='regular-subtitle'>Let’s get some real work done here.</p>
        <p className='regular-text'>
          Prodict is your perfect solution for working. Get started now for free
        </p>
        <Pricecard></Pricecard>
      </Container>
      <div className='enterprise p-3 p-md-5'>
        <p className='regular-subtitle'>ENTERPRISE</p>
        <p className='regular-title'>
          Are you interested in a custom-tailored plan?
        </p>
        <p className='regular-text'>
          Product is a set of advanced features for really large teams with
          projects.
        </p>
        <button className='btn btn-regular'>Get in touch with us</button>
      </div>
      <Joincompany />
    </div>
  );
}

export default Pricing;
