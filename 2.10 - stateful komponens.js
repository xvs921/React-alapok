class Book extends React.Component {
    constructor(props)
    {
      super(props);
      this.state={
        title: "Utazás a föld középpontja felé",
        author: "Jules Verne",
        publicationDate: "1954",
        blurb: "hgfhfgdsdaesgdfhehrt"
      };
    }
    
    render() {
      return (
        <>
          <p>My favorite books is {this.state.title} by {this.state.author}.</p>
          <p>It was first published in {this.state.publicationDate}.</p>
          <p>Here is the blurb from the dust jacket:</p>
          <blockquote>{this.state.blurb}</blockquote>
        </>
      )
    }
  }
  
  ReactDOM.render(<Book />, document.getElementById('root'));