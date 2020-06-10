/*
Az immutability fényében a state ajánlott frissítése három lépésből áll:

Készíts egy másolatot az aktuális state-ből.
A másolaton végezd el a módosítást.
A másolatra hívd meg a setState() metódust.
*/

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

    // Rest of the component.
    // ...
}