import React from "react";
import { Nav, Navbar, Container, Row, Col, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import pp from "./img/pp.png";

export default function Navs() {
  const styles = {
    nav: {
      padding: "20px",
      font: "15px Arial, sans-serif",
      color: "#141414",
    },
    menuText: {
      color: "#141414",
    },
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navbar
              collapseOnSelect
              expand="lg"
              style={{
                backgroundColor: "white",
                borderBottom: "0.1px solid #dbdbdb",
                boxShadow: "0px 0px 0px 3px #f5f5f5",
                color: "141414",
              }}
              variant="light"
              fixed="top"
            >
              <img src={pp} width="60" style={{ margin: "10px" }} />
              <Navbar.Brand href="#home">
                <h2>
                  <b>CARAKAN</b>
                </h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav style={styles.menuText}>
                  <Nav.Link href="/">HOME</Nav.Link>
                  <Nav.Link href="#about">ABOUT</Nav.Link>
                  <Nav.Link href="#services">SERVICES</Nav.Link>
                  <Nav.Link href="#products">PRODUCTS</Nav.Link>
                  <Nav.Link href="#partner">PARTNER</Nav.Link>
                  <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          borderBottom: "40px",
          borderColor: "#1A1A1A",
        }}
      >
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
