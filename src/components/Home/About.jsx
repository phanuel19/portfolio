import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  MON <span className="yellow"> PROFIL </span> PROFESSIONNEL
                </h1>
                <p className="home-about-body">
                 Bonjour, je m'appelle <span className="yellow">DAGBO KADY CHRIST-PHANUEL </span>
                 et je suis à <span className="yellow"> Abidjan Treichville</span>
                <br />
                <br />
                Je suit une formation de Génie Logiciel à L'Esatic
                <br />
                <br />
                  En tant que 
                  <b className="yellow"> Mobile/Web Full-Stack </b>developer,  
                 Je suis enthousiasmé à l'idée d'explorer de nouveaux projets et approfondir mes connaissances.
                  <br />
                  <br />Je me suis perfectionné en
                    <b className="yellow"> Javascript, </b>
                   Mais j'ai aussi des connaissances en php et Html/CSS
                  <b className="yellow"> Firebase</b>
                  <br />
                  <br />
                  J'ai une passion pour 
                   <b className="yellow"> Stack Mern</b> et précisément
                  <i>
                    <b className="yellow">
                      {" "}
                      les frameworks de JavaScript
                    </b>
                  </i>
                  &nbsp; comme
                  <i>
                    <b className="yellow"> React.js et React Native</b>
                  </i>
                  <br />
                  <br />
                  Je suis aussi Interessé à creation de nouvelles
                  <i>
                    <b className="yellow"> Produits et Technologies du Web , </b>
                    et aussi explorer l'univers de la
                    <b className="yellow"> Sécurité Informatique.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>RETROUVEZ MOI AUSSI SUR</h1>
                <p>
                n'hésitez pas à m'écrire ou <span className="yellow">me suivre.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/phanuel19"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://github.com/phanuel19"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/k-christ-phanuel-dagbo-113b19259/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://github.com/phanuel19"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About