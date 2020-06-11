import React, { Component } from "react";
import Welcome from "./Welcome";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Welcome name="React" />
      </div>
    );
  }
}
