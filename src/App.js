import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <BookList />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </Router>
);

export default App;
