import { useState } from "react";

const BookEdit = ({ book, handleSubmit }) => {
    const [input, setInput] = useState(book.title);

    const onInputChnage = (e) => {
        setInput(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(book.id, input)
    }

    return <form className="book-edit" onSubmit={onFormSubmit}>
        <label>Title</label>
        <input className="input" onChange={onInputChnage} value={input} />
        <button className="button is-primary">
            Save
        </button>
    </form>
}

export default BookEdit;