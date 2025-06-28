import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hareharan K L </span>
            from <span className="purple"> Tamil Nadu, India</span>
            <br />
            I am a recent graduate in B.E. Computer Science and Engineering from Mount Zion College of Engineering and Technology, Pudukottai.
            <br />
            I've a strong passion for DevOps and Cloud technologies with hands-on experience.
            <br />
            I’m eager to contribute to innovative teams that value automation, collaboration, and continuous improvement.
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
