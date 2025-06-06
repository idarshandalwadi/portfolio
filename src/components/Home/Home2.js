import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMediumCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> introduce </span> MySelf 🧑‍💻              
            </h1>
            <p className="home-about-body">
              <span>
                I'm a passionate and results-driven Full Stack Developer with over 8 years of
                experience in building scalable applications using modern technologies. 
                My work spans across both service-based and product-based organizations, 
                giving me a holistic view of software development.
              </span>

              <span>
                🎓 I am fluent in classics like
                <b className="purple"> Java, Spring MVC, Spring Boot, Hibernate, Data JPA. </b>
              </span>
              
              <span>
              💻 Skilled in Front-End Development using 
                <b className="purple"> HTML5, JavaScript, Bootstrap, </b> and
                and Flutter.
              </span>
              <span>
              📊 Familiar with Relational and NoSQL databases like 
              with <b className="purple">MySQL, PostgreSQL, and MongoDB.</b>
              <b className="purple"></b>
              </span>
              <span>
              🧑‍💻 Whenever possible, I also applies my passion to develope products using a
              Modern Javascript Library and Frameworks to practice more on Front-End Technologies like,
              <b className="purple"> Angular and Node.</b>
              </span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Reach Me out On</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/idarshandalwadi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/darshan-dalwadi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://darshan-dalwadi.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumCircle />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
