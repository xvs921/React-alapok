import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.props.updateState(name, value);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("We are submitting!");
    this.props.clearState();
  }

  render() {
    return (
      <div className="container">
        <div className="form-input">
          <h1>Form</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.props.name}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={this.props.email}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="text"
                name="password"
                value={this.props.password}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <input className="submit-button" type="submit" value="submit" />
          </form>
        </div>
        <div className="form-output">
          <h1>Output</h1>
          <p>
            <strong>Name:</strong> {this.props.name}
          </p>
          <p>
            <strong>Email:</strong> {this.props.email}
          </p>
          <p>
            <strong>Password</strong> {this.props.password}
          </p>
        </div>
      </div>
    );
  }
}

export default Form;
