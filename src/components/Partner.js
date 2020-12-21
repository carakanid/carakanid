import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./App.css";

export default function Partner({ id }) {
  const styles = {
    content: {
      backgroundColor: "white",
      textAlign: "center",
      paddingBottom: "30px",
      paddingTop: "20px",
    },
    about: {
      padding: "20px",
      fontSize: "50px",
      textAlign: "center",
      paddingBottom: "50px",
      fontFamily: "Poppins , sans-serif",
      fontWeight: "bold",
    },
    title: {
      padding: "20px",
      fontSize: "30px",
      color: "#141414",
      fontFamily: "Poppins , sans-serif",
      textAlign: "center",
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
      marginLeft: "10px",
    },
    divide: {
      margin: "10px",
      width: "100px",
    },
  };

  return (
    <Container fluid style={styles.content} id={id}>
      <Row style={styles.headRow}>
        <Col>
          <h1 style={styles.about}>Strategic Partner</h1>
        </Col>
      </Row>

      <h1 style={styles.title}>Technology</h1>

      <Row style={styles.bottomRow}>
        <Col sm>
          <div style={styles.divide}></div>
        </Col>
        <Col sm>
          <div style={styles.divide}>
            <Image width="200" src="https://i.ibb.co/cT7zYqM/mejik-1.jpg" />
          </div>
        </Col>

        <Col sm>
          <div style={styles.divide}>
            <Image
              style={{ marginTop: "53px" }}
              src="https://cybermantra.net/wp-content/uploads/2020/02/logo.png"
            />
          </div>
        </Col>
        <Col sm>
          <div style={styles.divide}></div>
        </Col>
      </Row>
    </Container>
  );
}
