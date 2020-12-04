import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  const styles = {
    content: {
      paddingTop: "50px",
      backgroundColor: "white",
    },
    gSquare: {
      alignItem: "right",
      width: "100px",
      height: "100px",
      backgroundColor: "#F4C23B",
      margin: "10px",
    },
    about: {
      padding: "20px",
      fontSize: "60px",
    },
    abContent: {
      fontSize: "20px",
      color: "#141414",
      padding: "20px",
    },
    history: {
      padding: "20px",
      fontSize: "60px",
    },
    hContent: {
      fontSize: "20px",
      color: "#141414",
      padding: "20px",
    },
    link: {
      color: "#141414",
      textDecoration: "underline",
    },
  };

  return (
    <div id="about">
      <Container fluid style={styles.content}>
        <Row>
          <Col sm={1}>
            <div style={styles.col2}>
              <div style={styles.gSquare}></div>
            </div>
          </Col>
          <Col sm>
            <h1 style={styles.about}>About Us</h1>
            <br />
            <p style={styles.abContent}>
              Carakan is an IT Company with the mission of <br />
              improving digital technology in Indonesia <br />
              without forgetting our cultural with multiples cultures <br />
              spread out on the Indonesia archipelago
              <br />
              <br />
              Based in Yogyakarta, Indonesia,{" "}
              <a style={styles.link} href="/">
                Carakan.ID
              </a>
            </p>
          </Col>
          <Col sm={1}>
            <div style={styles.col2}>
              <div style={styles.gSquare}></div>
            </div>
          </Col>
          <Col sm>
            <h1 style={styles.history}>Our Focus</h1>
            <br />
            <p style={styles.hContent}>
              We focuses on how to facilitating traditional business to adapt
              digital economy <br />
              using technology so they can be native digitaly.
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
