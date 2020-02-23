import React from 'react';

function Online() {
  const isOnline = window.navigator.onLine;
  return (
    <span
      style={{
        color: '#fff',
        fontSize: '14px'
      }}
    >网络：{ isOnline ? '在线' : '离线' }</span>
  )
}

export default Online;