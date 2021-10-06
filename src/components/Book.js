import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <li>
        <p>{book.title}</p>
        <p>{book.category}</p>
        <button onClick={() => removeBookFromStore(book.item_id)} type="button">Remove</button>
      </li>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
