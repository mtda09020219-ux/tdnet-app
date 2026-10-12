/* プッシュ通知の受信用（アプリを閉じていても通知を表示します） */
importScripts('./config.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp(self.FIREBASE_CONFIG);
firebase.messaging();

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
