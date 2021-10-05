import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, name, author }) => (
  <li key={id}>
    <p>{name}</p>
    <p>{author}</p>
    <button type="button">Remove</button>
  </li>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
