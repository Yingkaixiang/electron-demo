import React from 'react';

const { ipcRenderer } = window.require('electron');

function handle(e: React.DragEvent<HTMLDivElement>) {
  e.preventDefault();
  console.log(123);
  ipcRenderer.send('ondragstart', './index.tsx');
}

function DragAndDrop() {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#4078c0',
      }}
      onDragStart={handle}
      draggable
    ></div>
  )
}

export default DragAndDrop;
