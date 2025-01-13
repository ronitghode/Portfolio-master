import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="ChatFlow"
              description="A ChatGPT clone with real-time messaging and API integration, allowing users to interact and get responses in a conversational manner."
              ghLink="https://github.com/ronitghode/ChatFlow"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Lost and Found"
              description="A platform for reporting and searching lost items, allowing users to find and report lost property in a simple and secure manner."
              ghLink="https://github.com/ronitghode/LostAndFound"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Skin-Care Recommendation"
              description="A personalized skincare recommendation system that uses machine learning algorithms to suggest products based on user profiles and skin conditions."
              ghLink="https://github.com/ronitghode/Skin-Care-Recommendation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Noise Level Alert System"
              description="A MERN stack-based application with AWS SNS integration, designed to alert users when noise levels exceed the set threshold, especially for environments requiring silence."
              ghLink="https://github.com/ronitghode/Noise-Level-Alert-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Skill-Share"
              description="A web app built for skill exchange, offering secure authentication, real-time chat, and a platform for users to share skills and knowledge."
              ghLink="https://github.com/ronitghode/Skill-Share"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
