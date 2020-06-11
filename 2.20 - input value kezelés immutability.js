class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        person: {
          name: 'Jane Doe',
        },
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      const person = { ...this.state.person };
      person.name = event.target.value;
      this.setState({
        person: person,
      });
    }
  
    render() {
      return (
        <div className="container">
          <div className="form-input">
            <h1>Form</h1>
            <form>
              <label>
                Name:
                <input type="text" onChange={this.handleChange} />
              </label>
            </form>
          </div>
          <div className="form-output">
            <h1>Output</h1>
            <p>
              <strong>Name:</strong> {this.state.person.name}
            </p>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Form />, document.getElementById('root'));