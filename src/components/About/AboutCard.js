import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Darshan Dalwadi </span>
            from <span className="purple"> Ahmedabad, India.</span>
          </p>
          <p className="flex-column">
            <span>
            I am currently employed as a software developer at IQR Technosouls, Ahmedabad.
            </span>

            <span>
            I have completed MCA (Master of Computer Applications) at School Of Computer Studies, 
            Ahmedabad University with Distinction.
            </span>

            <span>
            Apart from coding, some other activities that I love to do!
            </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Electronic Experiments
            </li>
            <li className="about-activity">
              <ImPointRight /> Music and Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", textAlign: "right" }}>
            "Trust Your Self.!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
