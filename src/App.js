import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import ProductandServices from "./components/ProductandServices";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <a style={{ marginInlineStart: "8px" }}>
            <Link to="/">Home</Link>
          </a>
          <a style={{ marginInlineStart: "8px" }}>
            <Link to="/about">About</Link>
          </a>
          <a style={{ marginInlineStart: "8px" }}>
            <Link to="/productandservices">Product and Service</Link>
          </a>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutSection />
          </Route>
          <Route path="/productandservices">
            <ProductandServices />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}
