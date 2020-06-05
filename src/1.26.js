function Person(props)
{
  return (
    <React.Fragment>
      <p>Hi, my name is {props.name}.</p>
      <p>Here are some facts about me:</p>
      <ul>
        <li>I was born on {props.month} {props.day}, {props.year}.</li>
        <li>I spent my childhood in {props.birthPlace} but then moved to {props.city} and lived most of my life there.</li>
        <li>I'm most proud of my discovery of the phenomenon called {props.discovery}, for which I've received a Nobel prize with my husband, Pierre and my friend, Henri.</li>
      </ul>
    </React.Fragment>
  )
}

function Introduction(){
  return(
    <React.Fragment>
      <h1>Meet a famous scientist</h1>
      <Person name="Marie Curie" month="November" day={7} year={1867} birthPlace="Poland" city="Paris" discovery="radioactivity" />
    </React.Fragment>
  )
}

ReactDOM.render(<Introduction />, document.getElementById('root'));