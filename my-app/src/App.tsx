import React from 'react';

import logo from './logo.svg';
import './App.css';

import Communication from './Communication/';
import Notification from './Notification/';
import RecentFile from './RecentFile/';
import Progress from './Progress/';
import Online from './Online/';
import DragAndDrop from './DragAndDrop/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Communication />
        <Notification />
        <RecentFile />
        <Progress />
        <Online />
        <DragAndDrop />
      </header>
    </div>
  );
}

export default App;
