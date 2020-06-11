import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Form extends React.Component
{
  constructor(props){
    super(props);
    this.state={name:"Geri"};
  }
  change=(event)=>{
    this.setState({name:event.target.value});
  }


  render(){
    return (
      <div className="container">
        <div className="form-input">
          <h1>Form</h1>
          <form>
            <label> Name:
              <input type="text" onChange={this.change} />
            </label>
          </form>
        </div>
        <div className="form-output">
          <h1>Output</h1>
          <form>
            <label> Name:
              <input type="text" value={this.state.name} />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Form />,document.getElementById('root'));