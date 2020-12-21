import React from "react";
import { Image, Jumbotron, Container, Col, Row, Form } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./App.css";

export default function Banner({id}) {
  const styles = {
    container: {
      margin: "0px",
      padding: "0px",
      flexDirection: "row",
    },
    banner: {
      paddingTop: "100px",
      backgroundImage: `url(${"https://i.ibb.co/7n4kRZV/carakan.jpg"})`,
      borderBottom: "0.1px solid #dbdbdb",
      zIndex: "1",
      height: "700px",
      backgroundColor: "#141414",
    },
    text: {
      marginTop: "140px",
    },
    name: {
      fontSize: "60px",
      color: "white",
      width: "auto",
      fontFamily: "Poppins , sans-serif",
      fontWeight: "bold",
    },
    carakan: {
      marginTop: "auto",
      marginTop: "130px",
    },
    motto: {
      fontSize: "50px",
      color: "white",
      width: "auto",
      fontFamily: "Poppins , sans-serif",
      paddingBottom: "30px",
    },
    mobileMotto: {
      fontSize: "40px",
      color: "white",
      fontFamily: "Poppins , sans-serif",
      paddingBottom: "50px",
    },
    tabletMotto: {
      fontSize: "45px",
      color: "white",
      fontFamily: "Poppins , sans-serif",
      paddingBottom: "50px",
    },
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    
      <Container fluid style={styles.container} id={id} >
        <Jumbotron style={styles.banner}>
          <Container style={styles.carakan}>
            <h1 style={styles.name}>Carakan.ID</h1>

            {isDesktopOrLaptop && (
              <p style={styles.motto}>
                improving technology while
                <br /> maintaning identity
              </p>
            )}
            {isTablet && (
              <p style={styles.tabletMotto}>
                improving technology while
                <br /> maintaning identity
              </p>
            )}
            {isMobile && (
              <p style={styles.mobileMotto}>
                improving technology while
                <br /> maintaning identity
              </p>
            )}
          </Container>
        </Jumbotron>
      </Container>
    
  );
}
