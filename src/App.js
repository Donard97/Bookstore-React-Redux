import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <div className="wrapper border shadow mt-5">
      <Navbar />
      <Switch>
        <div className="container">
          <Route exact path="/">
            <BookList />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </div>
      </Switch>
    </div>
  </Router>
);

export default App;
