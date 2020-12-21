import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const styles = {
    content: {
      backgroundColor: "#F6C13F",
    },
    text: {
      textAlign: "center",
      color: "#ffffff",
      padding: "10px",
      fontSize: "20px",
      marginTop: "5px",
    },
  };

  return (
    <Container fluid style={styles.content}>
      <Row style={styles.row}>
        <Col>
          <p style={styles.text}>Copyright 2020 CARAKAN, All Right Reserved</p>
        </Col>
      </Row>
    </Container>
  );
}
