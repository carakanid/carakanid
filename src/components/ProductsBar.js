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
            <h2 onClick={this.scrollToTop}>
              <b>CARAKAN</b>
            </h2>
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
              <Link
                to="/"
                smooth={true}
                offset={-70}
                duration={500}
                style={styles.menuText}
                onMouseEnter={this.changeColor}
                onMouseLeave={this.callBack}
              >
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Links
                to="ourproducts"
                smooth={true}
                offset={-70}
                duration={500}
                style={styles.menuText}
                onMouseEnter={this.changeColor}
                onMouseLeave={this.callBack}
              >
                OUR PRODUCTS
              </Links>
            </Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              <Links
                to="affproducts"
                smooth={true}
                offset={-70}
                duration={500}
                style={styles.menuText.changeColor}
                onMouseEnter={this.changeColor}
                onMouseLeave={this.callBack}
              >
                AFFILIATE PRODUCTS
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
