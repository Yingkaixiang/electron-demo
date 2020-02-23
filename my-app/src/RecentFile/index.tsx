import React from 'react';

const { ipcRenderer } = window.require('electron');

function add() {
  const result = ipcRenderer.sendSync('add-recent-document');
  alert(result);
}

function RecentFile() {
  return <button onClick={add}>添加最近文件</button>
}

export default RecentFile;