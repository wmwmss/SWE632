import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

/**
 * @desc Home page that has the basic introduction and routing
 */
export default function Home() {
  return (
    <Jumbotron>
      <h1 className="header">
        Welcome To <i>National Beer Dashboard</i>
      </h1>
      <p></p>
      <p>
        Would you like to gain an in-depth understanding of beer consumption in
        the USA? Go ahead and check out our reporting tool!
      </p>

      <Button href="/search" className="btn btn-primary" size="lg">Search the Beer Dashboard</Button>
      <br></br>
      <br></br>
      {/* <Button href="/play" className="btn btn-primary" size="lg">Test Page</Button> */}
    </Jumbotron>
  );
}
