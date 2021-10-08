import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={submitBookToStore} className="row p-3 input">
      <div className="row input">
        <h4 className="text-secondary">ADD NEW BOOK</h4>
        <div className="form">
          <div className="col-lg-4 p-2">
            <input className="form-control" placeholder="Add Title" value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="col-lg-4 p-2">
            <input className="form-control" placeholder="Add Category" value={category} type="text" onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="col-lg-4 p-2 d-grid">
            <button type="submit" className="bg-primary text-white"> Add Book</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddBook;
