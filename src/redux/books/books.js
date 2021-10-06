import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LH9csQts5aBejC5xlmX7/books';
const initialState = [];

export const removeBook = (payload) => async (dispatch) => {
  const { data } = await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LH9csQts5aBejC5xlmX7/books/${payload}`,
  );
  if (data) {
    dispatch({ type: REMOVE_BOOK, payload });
  }
};

export const addBook = (payload) => async (dispatch) => {
  const { data } = await axios.post(
    url,
    payload,
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  if (data) {
    dispatch({ type: ADD_BOOK, payload });
  }
};

export const getBooks = () => async (dispatch) => {
  const { data } = await axios.get(url);
  const formattedBooks = [];
  Object.keys(data).forEach((key) => {
    if (key) {
      formattedBooks.push({ ...data[key][0], item_id: key });
    }
  });
  dispatch({ type: GET_BOOKS, payload: formattedBooks });
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== payload);
    case GET_BOOKS:
      return payload;
    default:
      return state;
  }
};

export default reducer;
