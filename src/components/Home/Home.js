import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/HomeLogo.jpg";
import Particle from "../Particle";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" style={{ textAlign: "center" }}>
          <Row>
            <Col md={16} className="home-header">
              <h1 className="heading">
                Hi{" "}
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SARAA R</strong>
              </h1>
              <h1 style={{ paddingBottom: 200 }} className="heading-name"><b>SOFTWARE DEVELOPER</b></h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
