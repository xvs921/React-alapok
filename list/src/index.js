import React from "react";
import ReactDOM from 'react-dom';
import '../src/index.css';

function ListItem(props) {
  return <li>{props.content}</li>;
}

class List extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      dwarves:  [
          {
            name: 'Sleepy',
            id: 'shewlx',
          },
          {
            name: 'Grumpy',
            id: 'wrmxls',
          },
          {
            name: 'Gimli',
            id: 'qlsayk',
          },
          {
            name: 'Bruenor',
            id: 'prfckj',
          },
        ],
    }
  }
 render(){
  return (
    <div>
  	  <h1>Hello! Here's a list of some dwarves:</h1>
      <ul>
        {this.state.dwarves.map(text=>(
          <ListItem key={text.id} content={text.name} />
        ))}
      </ul>
    </div>
  );
 }
}

ReactDOM.render(<List />,document.getElementById('root'));