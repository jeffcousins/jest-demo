import React from 'react';
import Header from './Header';

const App = ({ props }) => {
  return (
    <div className="container">
      <Header />
      <p className="new-p-tag">
        <img src="google.com/meme.jpg"></img>
        <span className="markup">
          Buttermilk pancakes
        </span>
      </p>
    </div>
  );
};

export default App;
