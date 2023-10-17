import { useState } from "react";
import { useBooksContext } from "./hooks/use-books-context";

const BookCreate = () => {
    const [input, setInput] = useState("");
    const { createBook } = useBooksContext();

    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        createBook(input);
        setInput("");
    }

    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={onFormSubmit}>
            <label>Title</label>
            <input className="input" onChange={onInputChange} value={input} />
            <button className="button">Submit</button>
        </form>
    </div>
}

export default BookCreate;