import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
class App extends Component {
  state = {
    userName: [
      {
        Name: "Sujitraj Thirumruthy"
      }
    ]
  };
  nameChangeHandler = event => {
    this.setState({
      userName: [
        {
          Name: event.target.value
        }
      ]
    });
  };
  render() {
    return (
      <div>
        <p>hi</p>
        <UserInput
          change={this.nameChangeHandler}
          userName={this.state.userName[0].Name}
        />
        <UserOutput userName={this.state.userName[0].Name} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
