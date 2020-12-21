import React, { Component } from "react";
import { Nav, Navbar, Container, Row, Col, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link as Links, animateScroll as scroll } from "react-scroll";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types"


import pp from "./img/pp.png";

const styles = {
  nav: {
    font: "15px Arial, sans-serif",
    color: "#141414",
  },
  menuText: {
    color: "#141414",
    textDecoration: "none",
  },
};

const propTypes = {
  location: PropTypes.object.isRequired
}



export default class TopBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  changeColor(e) {
    e.target.style.color = "#c4c4c4";
  }

  callBack(e) {
    e.target.style.color = "#141414";
  }

  render() {
    const propTypes = this.props
    return (
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
        <img
          src="https://i.ibb.co/3dzYMt7/pp-5018a77b.png"
          width="60"
          style={{ margin: "10px" }}
          onClick={this.scrollToTop}
        />
        <Navbar.Brand href="#home">
          <Link to="/" style={styles.menuText}>
            <h2 onClick={this.scrollToTop}>
              <b>CARAKAN</b>
            </h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{
            paddingRight: "40px",
          }}
        >
          <Nav className="mr-auto"></Nav>
          <Nav style={styles.menuText}>
          <Nav.Link>
              <Links
                to="banner"
                smooth={true}
                offset={-70}
                duration={500}
                style={styles.menuText}
                onMouseEnter={this.changeColor}
                onMouseLeave={this.callBack}
              >
                HOME
              </Links>
            </Nav.Link>
            <Nav.Link>
              <Links
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                style={styles.menuText}
                onMouseEnter={this.changeColor}
                onMouseLeave={this.callBack}
              >
                ABOUT
              </Links>
            </Nav.Link>
            <Nav.Link>
              <Links
                to="services"
                smooth={true}
                offset={-70}
                duration={500}
                style={styles.menuText}
                onMouseEnter={this.changeColor}
                onMouseLeave={this.callBack}
              >
                SERVICES
              </Links>
            </Nav.Link>
            <Nav.Link>
              <Links
                to="partner"
                smooth={true}
                offset={-70}
                duration={500}
                style={styles.menuText}
                onMouseEnter={this.changeColor}
                onMouseLeave={this.callBack}
              >
                PARTNER
              </Links>
            </Nav.Link>
            <Nav.Link>
              <Links
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                style={styles.menuText}
                onMouseEnter={this.changeColor}
                onMouseLeave={this.callBack}
              >
                CONTACT
              </Links>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/products"
                onMouseEnter={this.changeColor}
                onMouseLeave={this.callBack}
                style={styles.menuText}
              >
                PRODUCTS
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
