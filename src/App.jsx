import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* Navbar should be inside Router */}
        <Navbar />

        <Routes>
          <Route exact path="/"  element={<News country="us" category="general" key="general" />} />
          <Route exact path="/business"  element={<News country="us" category="business" key="business" />} />
          <Route exact path="/entertainment"  element={<News country="us" category="entertainment" key="entertainment" />} />
          <Route exact path="/health"  element={<News country="us" category="health" key="health" />} />
          <Route exact path="/science"  element={<News country="us" category="science" key="science" />} />
          <Route exact path="/sports"  element={<News country="us" category="sports" key="sports" />} />
          <Route exact path="/technology"  element={<News country="us" category="technology" key="technology" />} />

          {/* Handle 404 - Page Not Found */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </Router>
    );
  }
}
