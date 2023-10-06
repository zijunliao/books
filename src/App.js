import { useState } from 'react';
import BookCreate from './BookCreate';
import BookList from "./BookList";

const App = () => {
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        const newBooks = books.filter(book => {
            return book.id != id;
        })
        setBooks(newBooks);
    }

    const editBookById = (id, title) => {
        const newBooks = books.map(book => {
            if (book.id === id) {
                return { ...book, title: title }
            }
            return book
        })
        setBooks(newBooks);
    }

    const createBook = (title) => {
        const updatedBook = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title
            }
        ]
        setBooks(updatedBook);
    }

    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} deleteBookById={deleteBookById} editBookById={editBookById} />
        <BookCreate onCreateBook={createBook} />
    </div>
}

export default App;