import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import car from "../../Assets/Projects/car.png";
import ecom from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Parking Management System"
              description="The Online Car Parking Management System is an innovative solution developed using OpenCV, designed to optimize the process of managing car parking spaces. This project leverages computer vision technology to automate the detection, tracking, and management of vehicles in a parking lot."
              ghLink="https://github.com/rsaraa/carparkingmanagement.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Ecommerce Website"
              description="This is a  responsive e-commerce platform designed to provide a seamless shopping experience. Built using React, it features a dynamic and interactive user interface, efficient state management, and integration with backend services for product management"
              ghLink="https://github.com/rsaraa/srikumaransilksandreadymades.git"
              demoLink="https://srikumaransilksandreadymades.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
