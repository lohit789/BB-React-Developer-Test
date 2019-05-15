import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom'
import Router from './Router'

const Navigation = (props) => <nav>
  <ul>

    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/cart'>Cart</NavLink></li>
  </ul>
</nav>

function App() {
  return (
    <div className='page-container'>
      <h1>My Product list Page</h1>
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
