import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function History() {
  const styles = {
    content: {
      paddingTop: "50px",
      backgroundColor: "#1A1A1A",
      height: "500px",
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
      color: "white",
    },
    abContent: {
      fontSize: "20px",
      color: "white",
      padding: "60px",
    },
  };
  return (
    <Container fluid id="history" style={styles.content}>
      <Row>
        <Col sm={1}>
          <div style={styles.col2}>
            <div style={styles.gSquare}></div>
          </div>
        </Col>
        <Col sm>
          <h1 style={styles.about}>Carakan's Brief History</h1>
          <br />
          <p style={styles.abContent}>
            In truth, before Carakan we have been in the IT business for a long
            time. <br />
            But during Jokowi’s second period, the idea of digital
            transformation and the Covid-19 pandemic made us realized that
            providing platform that is ready to use is necessary in helping
            digital transformation.
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
}
