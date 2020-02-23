const { ipcMain } = require('electron');

ipcMain.on('renderer-process-sync-message', (event, arg) => {
  event.returnValue = 'pong';
})

ipcMain.on('renderer-process-aync-message', (event, arg) => {
  console.log(`收到渲染进程的消息 ${arg}`);
  event.sender.send('main-process-async-reply', 'pong');
})

ipcMain.on('add-recent-document', (event) => {
  app.addRecentDocument('/Users/yingkaixiang/Repo/electron-quick-start/index.html');
  event.returnValue = 'success';
});