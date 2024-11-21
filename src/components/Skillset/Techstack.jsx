import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiFirebase,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h4>Html 5</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3/>
        <h4>Css 3</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>Javascript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>Node Js</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h4>MongoDb</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h4>Firebase</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
