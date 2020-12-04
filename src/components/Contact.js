import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  const styles = {
    content: {
      backgroundColor: "white",
    },
    row: {
      margin: "60px",
    },
    col: {
      borderLeft: "1px solid black",
    },
  };

  return (
    <Container fluid id="contact" id="contact" style={styles.content}>
      <Row style={styles.row}>
        <Col>
          <h1>HEAD OFFICE</h1>
          <p>
            Jl. Prof Herman Yohanes No. 54 A,
            <br /> Samirono, Caturtunggal,
            <br />
            Kec. Depok, Kabupaten Sleman,
            <br />
            Daerah Istimewa Yogyakarta 55223
          </p>
        </Col>
        <Col style={styles.col}>
          <h1>CONTACT</h1>
          <p>
            <a href="">contact@carakan.id</a>
            <br /> <a href="www.carakan.id">www.carakan.id</a>
            <br /> <a href="https://www.instagram.com/carakanid/">carakanid</a>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
