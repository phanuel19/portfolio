import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";


const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Programming <strong className="yellow"> Languages </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Outils</strong> que j'utilise
        </h1>
        <Toolstack />
      </Container>
    </Container>
  )
}

export default Skillset