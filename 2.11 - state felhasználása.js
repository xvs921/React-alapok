class Moovie extends React.Component{
    constructor(props){
      super(props);
      this.state={
        img: "https://upload.wikimedia.org/wikipedia/en/8/8b/Hotel_Mumbai_poster.jpg",
        title: "Hotel Mumbai",
        year: 2016,
        imdbScore:7.2,
        plot: 'cfdfdgfdgfdghfgshr',
        director: "Isiah Thomas",
      };
    }
    render(){
      return(
      <>
        <div className="card">
          <img src={this.state.img}/>
          <h3>{this.state.title} <span>({this.state.year})</span></h3>
          <small>IMDb: {this.state.imdbScore}</small>
          <p>{this.state.plot}</p>
          <p><strong>Director:</strong> {this.state.director}</p>
        </div>
      </>
      )
    } 
  }
          
  ReactDOM.render(<Moovie />, document.getElementById('root'));        