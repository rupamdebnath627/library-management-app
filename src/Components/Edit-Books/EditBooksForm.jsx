import { useState } from "react";
import "./EditBooksForm.css";
import { useDispatch } from "react-redux";
import { bookActions } from "../../Store/BookSlice";

const EditBooksForm = ({ book_id, books, onFormSubmit }) => {
  const currentBook = books.find((book) => book.book_id === book_id);

  const [inputs, setInputs] = useState({
    book_name: "",
    book_author: "",
    book_category: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const dispatch = useDispatch();

  const submitHandler = () => {
    let tempBook = { book_id: currentBook.book_id };
    tempBook.book_name = inputs.book_name
      ? inputs.book_name
      : currentBook.book_name;
    tempBook.book_author = inputs.book_author
      ? inputs.book_author
      : currentBook.book_author;
    tempBook.book_category = inputs.book_category
      ? inputs.book_category
      : currentBook.book_category;

    dispatch(bookActions.updateBook(tempBook));
    onFormSubmit();
  };

  return (
    <>
      <div className="edit-books-form-container">
        <div>
          <label htmlFor="book_name">Title</label>
          <input
            name="book_name"
            id="book_name"
            placeholder={currentBook.book_name}
            value={inputs.book_name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="book_author">Author</label>
          <input
            name="book_author"
            id="book_author"
            placeholder={currentBook.book_author}
            value={inputs.book_author || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="book_category">Book Category</label>
          <input
            name="book_category"
            id="book_category"
            placeholder={currentBook.book_category}
            value={inputs.book_category || ""}
            onChange={handleChange}
          />
        </div>
        <div className="edit-books-form-submit" onClick={submitHandler}>
          Submit
        </div>
      </div>
    </>
  );
};

export default EditBooksForm;
