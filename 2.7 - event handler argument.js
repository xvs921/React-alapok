class ButtonGroup extends React.Component {
    handleClick = (event) => {
      alert(`Button "${event.target.innerHTML}" is clicked.`);
    }
    
    render() {
      return (
        <React.Fragment>
          <button onClick={(event) => this.handleClick(event)}>One</button>
          <button onClick={this.handleClick.bind(this)}>Two</button>
        </React.Fragment>
        
      )
    }
  }
  
  ReactDOM.render(<ButtonGroup />, document.getElementById('root'));
