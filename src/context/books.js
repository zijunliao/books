import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    }

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title
        });

        const updatedBook = [
            ...books,
            response.data
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

    // Data to share around a app
    const dataToShare = {
        books,
        setBooks,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    }

    return <BooksContext.Provider value={dataToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;


// Without Provider on top
// import { createContext } from "react";
// const BooksContext = createContext();
// export default BooksContext;
