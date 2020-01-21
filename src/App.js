import React, { Component } from "react";

export class App extends Component {
  state = {
    userInput: ""
  };
  inputChangeHandler = event => {
    this.setState({ userInput: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Type something</h1>
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
