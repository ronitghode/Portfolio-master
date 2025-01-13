import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className="purple">Ronit Ghode</span> from <span className="purple">Pune, India.</span>
        <br />
        I am currently employed as a Full-Stack Developer at JMedia Corporation.
        <br />
        I am pursuing my Bachelor's in Engineering (Information Technology) at Pune Institute of Computer Technology.
        <br />
        <br />
        Apart from coding, here are some activities I enjoy:
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Solving Coding Problems
        </li>
        <li className="about-activity">
          <ImPointRight /> Reading Tech Articles and Books
        </li>
        <li className="about-activity">
          <ImPointRight /> Exploring New Technologies
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Build with passion and make an impact!"{" "}
      </p>
      <footer className="blockquote-footer">Ronit Ghode</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
