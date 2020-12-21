import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Circle from "./asset/Circle";
import "./App.css";

export default function Services({ id }) {
  const styles = {
    content: {
      backgroundColor: "#141414",
      paddingBottom: "30px",
      textAlign: "center",
      color: "white",
    },
    about: {
      padding: "50px",
      fontSize: "50px",
      textAlign: "center",
      color: "white",
    },
    title: {
      padding: "10px",
      fontSize: "50px",
      color: "white",
      textAlign: "left",
      fontFamily: "Poppins , sans-serif",
      fontWeight: "bold",
    },
    point: {
      fontSize: "50px",
      color: "white",
      textAlign: "left",
    },
    description: {
      fontSize: "20px",
      color: "white",
      textAlign: "left",
      width: "90%",
      margin: "0 auto",
      textOverflow: "ellipsis",
    },
    link: {
      color: "white",
      textDecoration: "underline",
    },
    headRow: {
      marginLeft: "10px",
      paddingTop: "20px",
    },
    bottomRow: {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
    divide: {
      margin: "10px",
    },
    services: {
        fontSize: "30px",
        color: "white",
        textAlign: "center",
        width: "75%",
        margin: "0 auto",
        textOverflow: "ellipsis",
        fontFamily: "Poppins , sans-serif",
      },
  };

  return (
    <Container fluid style={styles.content} id={id}>
      <Row style={styles.headRow}>
        <Col>
          <ul>
            <li style={styles.point}>
              <h1 style={styles.title}>Services</h1>
            </li>
            <p style={styles.description} textAlign="left">
              We provide TaaS(Technology as a Services) to help business start
              their digital transformation or improve their existing digital
              services without the need of initial investment and all of the
              complexity related to technology, we from Carakan team will handle
              it.
            </p>
            <li style={styles.point}>
              <h1 style={styles.title}>Business Model</h1>
            </li>
            <p style={styles.description} textAlign="left">
              Carakan provide two methods of payment after partner succeed in
              using our platform, the first option is subscription based that is
              counted by customer size & traffic, the other one is we provide an
              option of collaboration “sharing profit” where we also have a
              share on said platform.
            </p>
          </ul>
        </Col>
      </Row>
      <Row style={styles.bottomRow}>
        <Col sm>
          <div style={styles.divide}>
            <Circle icon="check-circle" />
          </div>
          <p style={styles.services}>
              Ready to use Platform
          </p>
        </Col>
        <Col sm>
          <div style={styles.divide}>
            <Circle icon="layer-group" />
          </div>
          <p style={styles.services}>
              Improve existing platform
          </p>
        </Col>
        <Col sm>
          <div style={styles.divide}>
            <Circle icon="network-wired" />
          </div>
          <p style={styles.services}>
              Infrastructure
          </p>
        </Col>
      </Row>
    </Container>
  );
}
