import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there ! I'm <span className="purple">SARAA R</span>,
            a passionate and dedicated software developer.
            I have developed a strong foundation in various programming languages, algorithms, and software development methodologies through my academic and personal projects. My main passion lies in web development, where I enjoy the challenge of creating dynamic, responsive, and user-friendly applications.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
