import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Julian Villate </span>
            from <span className="purple"> Bogotá, Colombia</span>
            <br />
            I just finished my software engineering degree at the Universidad de los Andes.
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing piano and guitar!
            </li>
            <li className="about-activity">
              <ImPointRight /> Read tech news
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To learn is to protect the future"{" "}
          </p>
          <footer className="blockquote-footer">Julian</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
