class BirthYear extends React.Component {
    render() {
      return <li>I was born in the year {this.props.value}.</li>;  
    }
  }
  
  
  function DataList() {
    return (
      <React.Fragment>
        <p>Some arbitrary data about me:</p>
        <ul>
            <BirthYear value={2000} />
        </ul>
      </React.Fragment>
    )
  }
  
  ReactDOM.render(<DataList />, document.getElementById('root'));