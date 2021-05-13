import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

const { ipcRenderer } = window.require('electron');

ReactDOM.render(<App />, document.getElementById('root'));

document.onkeypress = function (e) {
  e = e || window.event;
  if (e.key.toLowerCase() === 'h') ipcRenderer.send('toggle', 's');
};
