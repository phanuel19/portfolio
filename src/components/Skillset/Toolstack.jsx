import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiGit,
  SiNotion,
  SiExpo
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>Vs Code</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
        <h4>Github</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h4>Vercel</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit/>
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h4>Netlify</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion/>
        <h4>Notion</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpo/>
        <h4>Expo</h4>
      </Col>

    </Row>
  );
}

export default Toolstack;
