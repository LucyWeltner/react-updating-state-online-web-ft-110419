import React from 'react';
import ReactDOM from 'react-dom';
import Click from './components/ClickityClick.js'
import Counter from './components/ButtonCounter.js'

ReactDOM.render(
  <div>
    <Click />
    <br />
    <Counter />
  </div>,
  document.getElementById('root')
);
