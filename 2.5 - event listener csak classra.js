//Ha event listenert szeretnél egy komponensben, akkor classt kell használnod.
class EventListener extends React.Component {
    katt()
    {
      alert("kattintva");
    }
    render() {
      return(
        <React.Fragment>
          <button onClick={this.katt}>kattints1</button>
          <button onClick={this.katt}>kattints2</button>
          <button onClick={this.katt}>kattints3</button>
        </React.Fragment>
      )
    }
  }
  
  ReactDOM.render(<EventListener />,document.getElementById('root'));