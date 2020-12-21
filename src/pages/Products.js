import React, { Component } from "react";
import ProductsBar from "../components/ProductsBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import OurProducts from "../components/OurProducts";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faCrosshairs,
  faEye,
  faCheckDouble,
  faNetworkWired,
  faLayerGroup,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUsers,
  faCrosshairs,
  faEye,
  faCheckDouble,
  faCheckCircle,
  faLayerGroup,
  faNetworkWired
);

const styles = {
  page: {
    margin: "0px",
    padding: "0px",
  },
};

class Products extends Component {
  render() {
    return (
      <div>
        <ProductsBar id="productsbar" />
        <OurProducts id="ourproducts" />
        <Contact id="contact" />
        <Footer id="footer" />
      </div>
    );
  }
}

export default Products;
