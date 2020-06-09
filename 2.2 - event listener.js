class EagerButton extends React.Component {
    handleClick() {
      alert('I\'m clicked! Yay!');
    }
    
    render() {
      return (<button onClick={this.handleClick}>Click me! Click me!</button>
        );
    }
  }
  
  ReactDOM.render(<EagerButton />, document.getElementById('root'));