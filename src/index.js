import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Vegetables from './Vegetables';
import Wishlist from './Wishlist';

ReactDOM.render(
  <React.StrictMode>
    <Wishlist />
    <Vegetables />
  </React.StrictMode>,
  document.getElementById('root')
);
