import React from "react";
import { Image, Jumbotron, Container, Col, Row } from "react-bootstrap";
import CarBack from "./img/CarBack.png";

export default function Banner() {
  const styles = {
    banner: {
      paddingTop: "100px",
      borderBottom: "0.1px solid #dbdbdb",
      backgroundColor: "#1A1A1A",
      width: "100%",
      zIndex: "1",
    },
    text: {
      marginTop: "140px",
    },
    name: {
      fontSize: "60px",
      color: "white",
      width: "700px",
    },
    motto: {
      fontSize: "50px",
      color: "white",
      width: "700px",
    },
    carakan: {
      alignItem: "right",
      margin: "40px",
      width: "800px",
    },
  };

  return (
    <Jumbotron style={styles.banner}>
      <Container>
        <Image src={CarBack} fluid />
      </Container>
    </Jumbotron>
  );
}
