function Movie(props) {
    return <li>{props.title}</li>;
  }
  
  function MovieList() {
    return (
      <React.Fragment>
        <p>My favorite movies are:</p>
        <ul>
          <Movie title="The Dark Knight" />
          <Movie title="Once Upon a Time In Hollywood..." />
          <Movie title="Instant Family" />
        </ul>
      </React.Fragment>
    )
  }
  
  ReactDOM.render(<MovieList />, document.getElementById('root'));