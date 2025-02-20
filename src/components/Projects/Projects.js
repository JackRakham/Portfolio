import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import architecture from "../../Assets/Projects/architecture.jpeg";
import stockarchitecture from "../../Assets/Projects/stockarchitecture.jpg";
import roomatch from "../../Assets/Projects/Roomatch.png";
import segmentation from "../../Assets/Projects/segmentation.png";
import depresion from "../../Assets/Projects/depresión.png";

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
              imgPath={roomatch}
              isBlog={false}
              title="Roomatch"
              description="Bussines logic for Roomatch, a startup where we want to connect roomies with each other"
              ghLink="https://github.com/roomatch/backend-express"
              demoLink="https://roomatch.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={segmentation}
              isBlog={false}
              title="Image segmentation with pytorch"
              description="Trained a model to segment images using pytorch and a dataset from Kaggle. This project includes augmentation technigues, a custom dataset class and a custom model class."
              ghLink="https://github.com/JackRakham/Image-segmentation-pytorch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={depresion}
              isBlog={false}
              title="Depression in Colombia"
              description="Worked with medical students on a statistics project analyzing the relationship between asthma and depression in Colombia using the multipurpose DANE(2017 and 2022) survey and building Power BI dashboards."
              ghLink="https://github.com/JackRakham/Depression-characterization-Colombia"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={architecture}
              isBlog={false}
              title="Youtube trending data analysis"
              description="Built a end-to-end data pipeline to analyze the youtube trending videos provided by a dataset from Kaggle. The pipeline includes data cleaning, data transformation, and data visualization"
              ghLink="https://github.com/JackRakham/AWS-Projects"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={architecture}
              isBlog={false}
              title="Telegram scrapper"
              description="Built a end-to-end data pipeline to analyze the youtube trending videos dataset from Kaggle. The pipeline includes data cleaning, data transformation, data visualization and a machine learning model to predict the number of views a video will have."
              ghLink="https://github.com/JackRakham/Depression-characterization-Colombia"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockarchitecture}
              isBlog={false}
              title="Real-time stock market analysis"
              description="Built an End-To-End Data Engineering Project on Real-Time Stock Market Data using Kafka. A python application simulates the real-time stream and the ETL is built in AWS in EC2 machines." 
              ghLink="https://github.com/JackRakham/AWS-Projects"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
