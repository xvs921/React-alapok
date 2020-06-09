class EventListener extends React.Component {
    katt = ()=>
    {
      alert(this);
    }
    render() {
      return(
          <button onClick={this.katt}>kattints1</button>
      );
    }
  }
  
  ReactDOM.render(<EventListener />,document.getElementById('root'));