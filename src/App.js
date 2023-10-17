import { useContext, useEffect } from 'react';
import BookCreate from './BookCreate';
import BookList from "./BookList";
import BooksContext from './context/books';

// "server" : "json-server --port 3001 --watch db.json --host 127.0.0.1"

const App = () => {
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, [])

    return <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
}

export default App;