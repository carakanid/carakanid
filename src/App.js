import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Products"

export default function App() {
  return(
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
    </BrowserRouter>
  );
}
