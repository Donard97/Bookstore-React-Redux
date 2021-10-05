/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1, name: 'The Power of Now', category: 'Psychology', author: 'Exchart Tolle',
    },
    {
      id: 2, name: 'The Road Less Traveled', category: 'Psychology', author: 'Scott Peck',
    },
  ];

  return (
    <ul>
      {books.map((book) => <Book key={book.id} />)}
    </ul>
  );
};

export default BookList;
