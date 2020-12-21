import React, { Component } from "react";
import TopBar from "../components/TopBar";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services"
import Partner from "../components/Partner"
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faCrosshairs, faEye, faCheckDouble, faNetworkWired, faLayerGroup, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

 
library.add( faUsers, faCrosshairs, faEye, faCheckDouble, faCheckCircle, faLayerGroup, faNetworkWired,  )

const styles = {
  page: {
    margin: "0px",
    padding: "0px",
  },
};

class Home extends Component {
  render() {
    return (
      <div>
        <TopBar id="topbar" />
        <Banner id="banner" />
        <About id="about" />
        <Services id="services" />
        <Partner id="partner" />
        <Contact id="contact" />
        <Footer id="footer" />
      </div>
    );
  }
}

export default Home;
