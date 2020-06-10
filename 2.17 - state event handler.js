/*ELMÉLET
A props és a state kart karba öltve teszik lehetővé, hogy minden helyzetben hozzáférj a szükséges adatokhoz és eszközökhöz a komponenseidben.

A state hozzáférhetővé teszi az adatokat a komponensen belül.
A props lehetővé teszi, hogy a state-ben tárolt adatokat a gyermekek is megkaphassák.
A state képes megváltozni, ezzel lehetővé teszi, hogy a felhasználó felől adatot fogadjon az app.
A props segítségével custom methodokat is le tudunk passzolni a gyermekkomponenseknek, ezzel lehetővé téve, hogy a gyermek frissítse a state-et.

// A BookStore komponensben propsként beadtuk az addBook függvényt:
return <Book addBook={this.addBook} />;

// A Book komponensben pedig hozzáfértünk a másik oldalról:
handleClick = () => {
    const testBook = {
        title: 'The Quantum Thief',
        author: 'Hannu Rajaniemi',
    };

    this.props.addBook(testBook);
};
*/

import React from 'react';
import ReactDOM from 'react-dom';

class Book extends React.Component {
  handleClick = () => {
    const testBook = {
      title: 'The Quantum Thief',
      author: 'Hannu Rajaniemi',
    };

    this.props.addBook(testBook);
  };

  render() {
    return <button onClick={this.handleClick}>Add new book</button>;
  }
}

class BookStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {
        book1: {
          title: 'American Gods',
          author: 'Neil Gaiman',
        },
        book2: {
          title: 'Extremely Loud and Incredibly Close',
          author: 'Johnathan Safran Foer',
        },
      },
    };
  }

  addBook = book => {
    // 1. Take a copy of state
    const newBooks = { ...this.state.books };
    // 2. Add new item to the copy
    newBooks[`book${Date.now()}`] = book;
    // 3. Set the new object to state
    this.setState({
      books: newBooks,
    });
  };

  render() {
    return <Book addBook={this.addBook} />;
  }
}

ReactDOM.render(<BookStore />, document.getElementById('root'));