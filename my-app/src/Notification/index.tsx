import React from 'react';

const send = () => {
  const permission = Notification.permission;
  if (permission === 'denied' || permission === 'default') {
    alert('您的通知功能已被禁用');
    Notification.requestPermission(function() {
      alert('申请权限');
    });
  } else if (permission === 'granted') {
    const notification = new Notification('测试标题', {
      body: '测试内容',
      tag: Date.now().toString(),
      icon: 'https://wiki.52poke.com/wiki/File:025Pikachu.png',
    });

    notification.onclick = function() {
      alert('通知已被点击');
    }

    notification.onshow = function() {
      alert('通知已显示');
    }

    notification.onerror = function() {
      alert('通知发生错误');
    }

    notification.onclose = function() {
      alert('通知已被用户关闭');
    }
  }
};

function NotificationTest() {
  return <button onClick={send}>发送通知</button>
}

export default NotificationTest;