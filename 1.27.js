class Person extends React.Component{
    render(){
      return (
        <React.Fragment>
          <p>Hi, my name is {this.props.name}.</p>
          <p>Here are some facts about me:</p>
          <ul>
            <li>I was born on {this.props.month} {this.props.day}, {this.props.year}.</li>
            <li>I spent my childhood in {this.props.birthPlace} but then moved to {this.props.city} and lived most of my life there.</li>
            <li>I'm most proud of my discovery of the phenomenon called {this.props.discovery}, for which I've received a Nobel prize with my husband, Pierre and my friend, Henri.</li>
          </ul>
        </React.Fragment>
      )
    }
  }
  
  class Introduction extends React.Component{
    render(){
      return(
        <React.Fragment>
          <h1>Meet a famous scientist</h1>
          <Person name="Marie Curie" month="November" day={7} year={1867} birthPlace="Poland" city="Paris" discovery="radioactivity" />
        </React.Fragment>
      )
    }
  }
  
  ReactDOM.render(<Introduction />, document.getElementById('root'));