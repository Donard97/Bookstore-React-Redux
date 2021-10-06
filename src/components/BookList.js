import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/books';
import Book from './Book';
import BookAdd from './AddBook';

const BookList = () => {
  const myBooks = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const addNew = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  const deleteBook = (id) => dispatch(removeBook(id));

  if (myBooks.length) {
    return (
      <div>
        <Book books={myBooks} propsToRemoveBooks={deleteBook} />
        <BookAdd propsToAddBooks={addNew} />
      </div>
    );
  }
  return (
    <div>
      <h3>Not any book added !</h3>
      <BookAdd propsToAddBooks={addNew} />
    </div>
  );
};

export default BookList;
