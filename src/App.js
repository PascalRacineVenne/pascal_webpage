import React from 'react';
import Navbar from './Components/navbar.jsx';

import './assets/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>hello 1 world</h1>
      <h2>hello 2 world</h2>
      <h3>hello 3 world</h3>
      <h4>hello 4 world</h4>
      <h5>hello 5 world</h5>
      <p>hello p world</p>
      <ol>
        <li>hello 6 world</li>
        <li>hello 6 world</li>
        <li>hello 6 world</li>
        <li>hello 6 world</li>
      </ol>
    </div>
  );
}

export default App;
