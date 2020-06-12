const dwarves = ['Sleepy', 'Grumpy', 'Gimli', 'Bruenor'];

class ListOfDwarves extends React.Component
{
 render(){
  return (
    <div>
  	  <h1>Hello! Here's a list of some dwarves:</h1>
      <ul>
        {dwarves.map(text=>(
        <li>{text}</li>
        ))}
      </ul>
    </div>
  );
 }
}

ReactDOM.render(<ListOfDwarves />,document.getElementById('root'));