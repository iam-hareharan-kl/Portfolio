import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <b className="purple">Hareharan K L </b>
            from <b className="purple"> Tamil Nadu, India</b> — a Computer Science graduate from Mount Zion College of Engineering and Technology, Pudukottai.
            <br />
            
            I'm an <b className="purple"> aspiring DevOps Engineer</b>, and <b className="purple"> Tech enthusiast</b>, with a strong passion for <b className="purple"> cloud technologies, automation, and modern software development</b>. I enjoy working at the intersection of <b className="purple"> infrastructure as code</b>, turning ideas into scalable, secure, and efficient systems.
            <br />
            
            I'm excited to contribute to innovative teams that value <b className="purple"> collaboration, clean engineering practices</b> and building systems that just work.
            <br />
            Let’s build something awesome! 🚀
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
