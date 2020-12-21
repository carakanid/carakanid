import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Circle from "./asset/Circle";
import "./App.css";

export default function About({ id }) {
  const styles = {
    content: {
      backgroundColor: "white",
      textAlign: "center",
      paddingBottom: "20px",
    },
    about: {
      padding: "20px",
      fontSize: "50px",
      textAlign: "center",
      fontFamily: "Poppins , sans-serif",
      fontWeight: "bold",
      paddingBottom: "50px",
    },
    title: {
      padding: "5px",
      fontSize: "50px",
      fontFamily: "Poppins , sans-serif",
      fontWeight: "bold",
    },
    description: {
      fontSize: "20px",
      color: "#141414",
      padding: "5px",
      textAlign: "center",
      width: "60%",
      margin: "0 auto",
      textOverflow: "ellipsis",
    },
    link: {
      color: "#141414",
      textDecoration: "underline",
    },
    headRow: {
      borderBottom: "2px solid #dbdbdb",
    },
    bottomRow: {
      paddingTop: "20px",
    },
    divide: {
      margin: "10px",
    },
  };

  return (
    <Container fluid style={styles.content} id={id}>
      <Row style={styles.headRow}>
        <Col>
          <h1 style={styles.about}>About Us</h1>
        </Col>
      </Row>
      <Row style={styles.bottomRow}>
        <Col sm>
          <div style={styles.divide}>
            <Circle icon="users" />
          </div>
          <h1 style={styles.title}>What is Carakan?</h1>
          <p style={styles.description}>
            Carakan is an IT Company with the end goal of improving digital
            technology in Indonesia without forgetting our cultural with
            multiples cultures spread out on the Indonesia archipelago.
          </p>
        </Col>
        <Col sm>
          <div style={styles.divide}>
            <Circle icon="crosshairs" />
          </div>
          <h1 style={styles.title}>Our Focus</h1>

          <p style={styles.description}>
            We focuses on how to facilitate traditional business to adapt
            digital economy using technology so they can be native digitaly.
          </p>
        </Col>
      </Row>
      <Row style={styles.bottomRow}>
        <Col sm>
          <div style={styles.divide}>
            <Circle icon="eye" />
          </div>
          <h1 style={styles.title}>Our Vision</h1>
          <p style={styles.description}>
            Our vision is to improve digital technology in Indonesia without
            forgetting our culture, tradition and values as a nation with
            multiple cultures spread out in the Indonesian archipelago.
          </p>
        </Col>
        <Col sm>
          <div style={styles.divide}>
            <Circle icon="check-double" />
          </div>
          <h1 style={styles.title}>Our Mission</h1>

          <p style={styles.description}>
            Our mission is to help boost digital transformation in Indonesia by
            helping UKM(Small to Middle size Business) to adopt digital economy
            as a platform for their business.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
