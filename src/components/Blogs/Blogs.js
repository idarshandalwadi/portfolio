import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ProjectCards from "../Projects/ProjectCards";


function Blogs() {
    return (
        <Container fluid className="blog-section">
            <Container>
                <h1 className="project-heading">
                    My<strong className="purple"> Blogs/Articles </strong>
                </h1>
                <p style={{ color: "white" }}>
                    These are some blogs I've authored.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={"https://miro.medium.com/v2/resize:fit:875/0*sDfWCU4zzIIDKQin"}
                            isBlog={true}
                            title="Hibernate Caching"
                            description="This blog includes Caching Mechanism of Hibernate. I've explained what is First-level cache and Second-level cache, and how to use them."
                            ghLink="https://medium.com/swlh/what-is-hibernate-caching-introduction-of-level-1-level-2-cache-8ea7339a5052"
                            demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={"https://miro.medium.com/v2/resize:fit:875/1*3f7wNI3OHw7i19GTQrvoQg.jpeg"}
                            isBlog={true}
                            title="Collect data in map from stream"
                            description="Stream was introduced in JAVA-8 and is very famous till now to deal with the Collections, here I've covered Collectors.map() function related stuff in this article."
                            ghLink="https://darshan-dalwadi.medium.com/how-to-collect-data-in-map-from-stream-using-collectors-map-guide-to-collect-collectors-map-322a17e306a9"
                            demoLink=""
                        />
                    </Col>
                    
                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={"https://miro.medium.com/v2/resize:fit:875/0*EPHlF8ZHGNmv6eg5"}
                            isBlog={true}
                            title="Guide to “Optional<T> Class"
                            description="I’ve covered the use of the Optional class which was introduced in Java 8. Also covered, how to throw a custom exception when an Optional is empty."
                            ghLink=""
                            demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={"https://miro.medium.com/v2/resize:fit:875/0*4lJLn3_vIVNvUGPb"}
                            isBlog={true}
                            title="Flutter Advance Routing"
                            description="Some advance Navigation concepts in Flutter, which inclueds onGenerateRoutes and onUnknownRoutes and how to handle error route."
                            ghLink="https://darshan-dalwadi.medium.com/ongenerateroutes-and-onunknownroutes-in-flutter-handle-error-route-show-error-page-in-flutter-e094741b5911"
                            demoLink=""
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={"https://miro.medium.com/v2/resize:fit:875/0*W1-Fz1EV48-Go6z8"}
                            isBlog={true}
                            title="Flutter Navigation Guide"
                            description="In this blog, I've described that, how Navigation works in Flutter. It includes pop(), push(), pushNamed(), popNamed() and other methods."
                            ghLink="https://darshan-dalwadi.medium.com/flutter-navigation-guide-62edb5ab04ec"
                            demoLink=""
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}
export default Blogs;
