import React from "react";
import { Jumbotron, Button, Container, Row, Col, Breadcrumb } from "react-bootstrap";
import ButtonCounter from "../components/ButtonCounter";
import bearLogo from '../images/bearLogo.gif';

export default function Play() {

  return (
    <Jumbotron>
      <h1 className="header">
        Welcome To <i>Playground</i>
      </h1>

      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/Home">
          Test
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Playground</Breadcrumb.Item>
      </Breadcrumb>

      <p></p>
      <p>
        Would you like to gain an in-depth understanding of beer consumption in
        the USA? Go ahead and check out our reporting tool!
      </p>

      {/*       <Container>
        <Row>
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container> */}


      <ButtonCounter></ButtonCounter>

      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
      <Button variant="link">Link</Button>
      <img src={bearLogo} alt="Logo" />

      <p></p>
      <Button href="/search" className="btn btn-primary" size="lg">Search the Beer Dashboard</Button>
      <br></br>
      <br></br>
      {/* <Button href="/search" className="btn btn-primary" size="lg">Test Page</Button> */}
    </Jumbotron >
  );
}
