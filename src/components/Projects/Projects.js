import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hibernate from "../../Assets/Projects/hibernate.svg";
import asite from "../../Assets/Projects/asite-logo.png";
import ecommerce from "../../Assets/Projects/ecommerce.svg";
import invoice from "../../Assets/Projects/invoice-dollar.svg";
import payment from "../../Assets/Projects/payment.svg";
import assets from "../../Assets/Projects/assets.png";

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
              imgPath={payment}
              isBlog={false}
              title="Apexx Payment Gateway"
              description="Fintech Domain: We were serving as a mediator between Merchant to Merchant payments. I've worked over Payment Gateway intergration, Third Party API intergration.
              API Request-Response mangement, logging, and tracing."
              ghLink=""
              demoLink="https://apexx.global/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asite}
              isBlog={false}
              title="Asite (Mobile APP API support)"
              description="Construction/Civil Domain: Working with larger team to collaborate on a Product based web application. Creation of RestAPIs, Management of exiting one, Modification. Need to provide support for Mobile Application REST APIs consumptions."
              ghLink=""
              demoLink="https://asite.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice Extraction Using 'Azure Form Recognizer'"
              description="Here, I've studied and done research over Azure Form Recognizer Tool to extract the Invoice info and get Json of that info.
              Company has multiple clients with different format of invoice, from that we need to extract data and get data into the JSON format."
              ghLink="https://github.com/idarshandalwadi/sample-invoice"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assets}
              isBlog={false}
              title="Asset Management"
              description="In-house Project to manage company's assets like Laptop, Desktop, Other Peripherals.
              It was my first project created using Angular and Node.js. Currently used by the company's Infra team."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Animal Paintings Sell"
              description="An Ecommorce Website mockup to sell Animal Paintings. Used Angualr CLI 16.2, Node JS, Bootstrap, Angualr Mat Library for UI. Used Mockoon to mock up the API responses."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hibernate}
              isBlog={false}
              title="Hibernate Relation Mapping Samples"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/idarshandalwadi/hibernate-practice"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
