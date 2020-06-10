/*Mindig a setState() metóduson keresztül frissítsd a state-et, különben „összeakadsz” a Reacttal, 
és többek között például nem renderelődik újra a komponensed.*/

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
    
    moovieChange=()=>{
      this.setState({
        img: 'https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_SX675_AL_.jpg',
        title: 'Wonder Woman',
        year: 2017,
        imdbScore: 7.2,
        plot: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to.',
        director: 'Patty Jenkins',
      });
    }
    
    render(){
      return(
      <>
          <button onClick={this.moovieChange}>Change Moovie</button>
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