import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import diabetes from "../../Assets/Projects/diabetes.png";
import tic from "../../Assets/Projects/tic.png";
import web from "../../Assets/Projects/web.png";
import keylogger from "../../Assets/Projects/keylogger.png";
import ec2 from "../../Assets/Projects/ec2.png";
import react from "../../Assets/Projects/react.png";
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
              imgPath={diabetes}
              isBlog={false}
              title="Diabetes Predictor"
              description="Developed and deployed a machine learning model for diabetes prediction using Python and FastAPI; containerized the API with Docker for consistent deployment. Orchestrated deployment on Kubernetes using YAML manifests, demonstrating full MLOps workflow from model training to scalable, production-ready inference.."
              ghLink="https://github.com/iam-hareharan-kl/diabetes-mlops-project.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="Web Scraper"
              description="Dockerized app that scrapes product data from a given website using Puppeteer and serves the results as JSON through a Python Flask API. You specify the target URL with an environment variable, and access the scraped data at a simple endpoint."
              ghLink="https://github.com/iam-hareharan-kl/Web-Scraping.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic}
              isBlog={false}
              title="Tic-Tac-Toe App"
              description="Developed a fully containerized application with CI/CD automation using GitHub Actions, Trivy, and Kubernetes, enhancing release efficiency by 60%. Applied secure coding practices, integrated secret management, and ensured compliance across all deployment stages."
              ghLink="https://github.com/iam-hareharan-kl/devsecops-pipeline.git"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="DevOpsifies React-App"
              description="Designed and deployed a scalable, containerized React application on AWS EKS, resulting in a 40% improvement in performance and availability. Implemented CI/CD pipelines using GitHub Actions and ArgoCD, accelerating release cycles by 60%. Integrated Helm, Nginx, and DNS to enable smooth, production-ready deployments."
              ghLink="https://github.com/iam-hareharan-kl/React-App.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ec2}
              isBlog={false}
              title="Automated EC2 Provisioning"
              description="Wrote efficient, reusable Terraform code to automate EC2 deployments, reducing provisioning time by 30% and ensuring compliance with security policies. Contributed across the software development lifecycle, from architecture planning to implementation and deployment."
              ghLink="https://github.com/iam-hareharan-kl/Terraform.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keylogger}
              isBlog={false}
              title="Keylogger Application"
              description="KeyLogger is a Python-based application designed to monitor and record keystrokes on a target system, providing detailed logging for analysis and security monitoring. The project demonstrates expertise in low-level input capture, event handling, and secure data storage, making it a valuable tool for educational, parental control, or authorized security auditing purposes."
              ghLink="https://github.com/iam-hareharan-kl/KeyLogger.git" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
