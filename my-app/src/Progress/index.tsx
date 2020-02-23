import React from 'react';

const { ipcRenderer } = window.require('electron');

function progress() {
  ipcRenderer.send('set-progress-bar');
  ipcRenderer.on('set-progress-bar-done', (event: any, arg: string) => {
    alert(arg);
  });
}

function Progress() {
  return <button onClick={progress}>模拟进度条</button>
}

export default Progress;
