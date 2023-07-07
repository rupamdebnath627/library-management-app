import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    availableBooks: [
      {
        book_id: "S001",
        book_name: "Book1",
        book_author: "Author2",
        book_category: "Drama",
      },
      {
        book_id: "S002",
        book_name: "Book2",
        book_author: "Author2",
        book_category: "Fiction",
      },
      {
        book_id: "S003",
        book_name: "Book3",
        book_author: "Author3",
        book_category: "Fiction",
      },
      {
        book_id: "S004",
        book_name: "Book4",
        book_author: "Author1",
        book_category: "Adventure",
      },
      {
        book_id: "S005",
        book_name: "Book5",
        book_author: "Author2",
        book_category: "Fiction",
      },
      {
        book_id: "S006",
        book_name: "Book6",
        book_author: "Author3",
        book_category: "Adventure",
      },
      {
        book_id: "S007",
        book_name: "Book7",
        book_author: "Author3",
        book_category: "Drama",
      },
    ],
  },
  reducers: {
    addBook(state, action) {
      state.availableBooks.push(action.payload);
    },
    updateBook(state, action) {
      const idx = state.availableBooks.findIndex(
        (book) => book.book_id === action.payload.book_id
      );
      state.availableBooks[idx].book_name = action.payload.book_name;
      state.availableBooks[idx].book_author = action.payload.book_author;
      state.availableBooks[idx].book_category = action.payload.book_category;
      console.log(state.availableBooks[idx]);
    },
    deleteBook(state, action) {
      state.availableBooks = state.availableBooks.filter(
        (book) => book.book_id !== action.payload
      );
      console.log(state.availableBooks);
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice;
