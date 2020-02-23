import React from 'react';

const { remote, ipcRenderer } = window.require('electron');
const { withRemote } = remote.require('./main-process/remote');

function useRemote() {
  alert(withRemote());
}

function useIPCSync() {
  const reply = ipcRenderer.sendSync('renderer-process-sync-message', 'ping');
  alert(`主进程已收到消息 ping，回复为 ${reply}`);
}

function useIPCAsync() {
  ipcRenderer.send('renderer-process-aync-message', 'async-ping');
  ipcRenderer.on('main-process-async-reply', (event: any, arg: string) => {
    alert(`收到主进程的异步回复 ${arg}`);
  });
}

function Communication() {
  return (
    <>
      <button onClick={useRemote}>使用 remote 通讯</button>
      <button onClick={useIPCSync}>使用 ipc 同步通讯</button>
      <button onClick={useIPCAsync}>使用 ipc 异步通讯</button>
    </>
  )
}

export default Communication;
