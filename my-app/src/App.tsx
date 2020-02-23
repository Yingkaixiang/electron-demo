import React from 'react';

import logo from './logo.svg';
import './App.css';

import Communication from './Communication/';
import Notification from './Notification/';
import RecentFile from './RecentFile/';
import Progress from './Progress/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Communication />
        <Notification />
        <RecentFile />
        <Progress />
      </header>
    </div>
  );
}

export default App;
