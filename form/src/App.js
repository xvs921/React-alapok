import React from "react";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateState = (nameId, value) => {
    this.setState({
      [nameId]: value
    });
  };

  clearState = () => {
    this.setState({
      name: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <Form
        name={this.state.name}
        email={this.state.email}
        password={this.state.password}
        updateState={this.updateState}
        clearState={this.clearState}
      />
    );
  }
}

export default App;
