import { useEffect, useState } from 'react';
import BookCreate from './BookCreate';
import BookList from "./BookList";
import axios from 'axios';

// "server" : "json-server --port 3001 --watch db.json --host 127.0.0.1"

const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const response = axios.post("http://localhost:3001/books", {
            title
        });

        const updatedBook = [
            ...books,
            response
        ]

        setBooks(updatedBook);
        // const updatedBook = [
        //     ...books,
        //     {
        //         id: Math.round(Math.random() * 9999),
        //         title
        //     }
        // ]
        // setBooks(updatedBook);
    }

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    const editBookById = async (id, newTitle) => {
        // Change the book title
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const newBooks = books.map(book => {
            console.log("@@", book.id);
            if (book.id === id) {
                return {
                    ...book,
                    ...response.data
                }
            }
            return book;
        })

        setBooks(newBooks);

        // const newBooks = books.map(book => {
        //     if (book.id === id) {
        //         return { ...book, title: title }
        //     }
        //     return book
        // })
        // setBooks(newBooks);
    }

    const deleteBookById = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        if (response.status === 200) {
            const newBooks = books.filter(book => {
                return book.id != id;
            })
            setBooks(newBooks);
        }
    }

    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} deleteBookById={deleteBookById} editBookById={editBookById} />
        <BookCreate onCreateBook={createBook} />
    </div>
}

export default App;