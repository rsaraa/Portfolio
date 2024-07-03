import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql
} from "react-icons/di";
import {
  SiPostman,
} from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><p style={{ fontSize: "16px" }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><p style={{ fontSize: "16px" }}>Nodejs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><p style={{ fontSize: "16px" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><p style={{ fontSize: "16px" }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><p style={{ fontSize: "16px" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><p style={{ fontSize: "16px" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><p style={{ fontSize: "16px" }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><p style={{ fontSize: "16px" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql /><p style={{ fontSize: "16px" }}>My Sql</p>
      </Col>
    </Row>
  );
}

export default Techstack;
