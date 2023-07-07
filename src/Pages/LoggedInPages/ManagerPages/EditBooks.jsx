import "./EditBooks.css";
import img from "../../../assets/The-Art-of-War-by-Sun-Tzu-Book.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../../../Store/BookSlice";

// const DUMMY_BOOKS = [
//   {
//     book_id: "S001",
//     book_name: "Book1",
//     book_author: "Author2",
//     book_category: "Drama",
//   },
//   {
//     book_id: "S002",
//     book_name: "Book2",
//     book_author: "Author2",
//     book_category: "Fiction",
//   },
//   {
//     book_id: "S003",
//     book_name: "Book3",
//     book_author: "Author3",
//     book_category: "Fiction",
//   },
//   {
//     book_id: "S004",
//     book_name: "Book4",
//     book_author: "Author1",
//     book_category: "Adventure",
//   },
//   {
//     book_id: "S005",
//     book_name: "Book5",
//     book_author: "Author2",
//     book_category: "Fiction",
//   },
//   {
//     book_id: "S006",
//     book_name: "Book6",
//     book_author: "Author3",
//     book_category: "Adventure",
//   },
//   {
//     book_id: "S007",
//     book_name: "Book7",
//     book_author: "Author3",
//     book_category: "Drama",
//   },
// ];

const EditBooks = () => {
  // const [bookList, setBookList] = useState(DUMMY_BOOKS);

  const books = useSelector((state) => state.books.availableBooks);
  const dispatch = useDispatch();

  const deleteBookHandler = (bookId) => {
    // setBookList((prevList) =>
    //   prevList.filter((book) => book.book_id !== bookId)
    // );
    dispatch(bookActions.deleteBook(bookId));
  };

  const list_items = books.map((book) => (
    <div className="book-item" key={book.book_id}>
      <div className="edit-book-image">
        <img src={img} alt="book" />
      </div>
      <div>
        <div className="edit-book-blocks">
          <div>{book.book_name}</div>
          <div>Author: {book.book_author}</div>
          <div>Category: {book.book_category}</div>
        </div>
        <div className="edit-books-buttons">
          <div className="edit-books-buttons--edit">Edit</div>
          <div
            onClick={() => deleteBookHandler(book.book_id)}
            className="edit-books-buttons--delete"
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div>Edit Books</div>
      <div className="book-list-container">{list_items}</div>
    </>
  );
};

export default EditBooks;
