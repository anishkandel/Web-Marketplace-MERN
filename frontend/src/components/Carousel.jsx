import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {  Carousel } from "react-bootstrap";
const banner = require('../images/banner1.jpg')
const banner2 = require('../images/banner2.jpg')
const banner3 = require('../images/banner3.jpg')
const Carousell = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={String(banner)} alt="logo" width="-30px" height="80px"/>
    <Carousel.Caption>
      {/* <h3>Ad1</h3> */}
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
       src={String(banner2)} alt="Logo" width="-30px" height="80px" />
    <Carousel.Caption>
      {/* <h3>Ad2</h3> */}
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={String(banner3)} alt="Logo" width="-100px" height="80px"/>
    <Carousel.Caption>
      {/* <h3>Ad3</h3> */}
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
        </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Carousell;
