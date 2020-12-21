import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./App.css";

export default function Contact({ id }) {
  const styles = {
    content: {
      backgroundColor: "#141414",
      color: "white",
      height: "auto",
    },
    row: {
      padding: "60px",
    },
    col: {
      borderLeft: "1px solid white",
    },
    title: {
      fontFamily: "Poppins , sans-serif",
      fontWeight: "bold",
    },
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 767px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <Container fluid style={styles.content} id={id}>
      <Row style={styles.row}>
        <Col>
          <h1 style={styles.title}>HEAD OFFICE</h1>
          <p>
            Jl. Prof Herman Yohanes No. 54 A
            <br /> Samirono - Caturtunggal
            <br />
            Depok - Sleman
            <br />
            Yogyakarta - 55223
            <br />
            Phone : +62 811-9393-230
            <br />
            +62 857-0202-5761
          </p>
        </Col>
        {isDesktopOrLaptop && (
          <Col style={styles.col}>
            <h1 style={styles.title}>CONTACT</h1>
            <p>
              <a href="">contact@carakan.id</a>
              <br /> <a href="www.carakan.id">www.carakan.id</a>
              <br />{" "}
              <a href="https://www.instagram.com/carakanid/">carakanid</a>
            </p>
          </Col>
        )}
        {isMobile && (
          <Col>
            <h1>CONTACT</h1>
            <p>
              <a href="">contact@carakan.id</a>
              <br /> <a href="www.carakan.id">www.carakan.id</a>
              <br />{" "}
              <a href="https://www.instagram.com/carakanid/">carakanid</a>
            </p>
          </Col>
        )}

        <Col></Col>
      </Row>
    </Container>
  );
}
