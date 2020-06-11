import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      name:"Geri",
      email:"vg@gmail.com",
      password: "12345",
    };
  }
  change=(event)=>{
    const nameId = event.target.name;
    const valueId = event.target.value;

    this.setState({[nameId]:valueId,});
  }
  submit=(event)=>{
    event.preventDefault();
    alert("A megadott név: "+this.state.name);
    this.setState({
      name:"",
      email:"",
      password:"",
  })
  }


  render(){
    return (
      <div className="container">
        <div className="form-input">
          <h1>Form</h1>
          <form onSubmit={this.submit}>
            <label> Name:
              <input type="text" name="name" onChange={this.change} value={this.state.name} />
            </label><br/>
            <label> Email:
              <input type="text" name="email" onChange={this.change} value={this.state.email} />
            </label><br/>
            <label> Password:
              <input type="text" name="password" onChange={this.change} value={this.state.password} />
            </label><br/>
            <input type="submit"/>
          </form>
        </div>
        <div className="form-output">
          <h1>Output</h1>
          <form>
            <label> Name:
              {this.state.name}
            </label><br/>
            <label> Email:
              {this.state.email}
            </label><br/>
            <label> Password:
              {this.state.password}
            </label>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Form />,document.getElementById('root'));