import React, { Component } from "react";
import Validation from "./Components/Validation/Validation";
import Char from "./Components/Char/Char";
export class App extends Component {
  state = {
    userInput: ""
  };

  inputChangeHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    let charList = this.state.userInput.split("").map(ch => {
      return <Char character={ch} />;
    });
    return (
      <div>
        <h1>Type something</h1>
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
