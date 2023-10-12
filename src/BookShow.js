import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBookById, editBookById }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        deleteBookById(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, title) => {
        console.log("Edit book by it", id)
        editBookById(id, title)
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} handleSubmit={handleSubmit} />
    }

    return <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
        {content}
        <div className="actions">
            {book.id}
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
}

export default BookShow;