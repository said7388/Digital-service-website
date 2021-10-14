import React from "react";
import Collaborative from "../Collaborative/Collaborative";
import Contents from "../Contents/Contents";
import CustomerSupport from "../CustomerSupport/CustomerSupport";
import Experts from "../Experts/Experts";
import Joincompany from "../Joincompany/Joincompany";
import Managment from "../Managment/Managment";
import Price from "../Price/Price";
import Service from "../Service/Service";
import Socialmedia from "../Socialmedia/Socialmedia";
import Testimonial from "../Testimonial/Testimonial";

function Home() {
  return (
    <div >
      <Socialmedia></Socialmedia>
      <Service></Service>
      <Managment></Managment>
      <CustomerSupport></CustomerSupport>
      <Collaborative></Collaborative>
      <Experts></Experts>
      <Contents></Contents>
      <Price></Price>
      <Testimonial></Testimonial>
      <Joincompany></Joincompany>
    </div>
  );
}

export default Home;
