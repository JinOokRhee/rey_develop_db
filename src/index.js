import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, First, Second, Third, Forth, Fifth } from './App.js';
import Header from './Header.js';
import './style.css';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/first" component={First} />
      <Route path="/second" component={Second} />
      <Route path="/third" component={Third} />
      <Route path="/forth" component={Forth} />
      <Route path="/fifth" component={Fifth} />
    </div>
  </Router>,
  document.getElementById('root'),
);
