
import BookShow from './BookShow';
import { useBooksContext } from './hooks/use-books-context';

const BookList = () => {
    const { books } = useBooksContext();

    const renderBooks = () => {
        return books.map(book => <BookShow book={book} key={book.id} />)
    }

    return <div className="book-list">{renderBooks()}</div>
}

export default BookList;