import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <a href="default.asp">Home</a>
        </div>
        <div>
          <a href="news.asp">News</a>
        </div>
        <div>
          <a href="contact.asp">Contact</a>
        </div>
        <div>
          <a href="about.asp">About</a>
        </div>
      </div>
    );
  }
}

export default App;
