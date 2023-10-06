import BookShow from './BookShow';

const BookList = ({ books, deleteBookById, editBookById }) => {
    const renderBooks = () => {
        return books.map(book => <BookShow book={book} key={book.id} editBookById={editBookById} deleteBookById={deleteBookById} />)
    }

    return <div className="book-list">{renderBooks()}</div>
}

export default BookList;