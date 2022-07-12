import { initializeApp } from 'firebase/app';

const app = initializeApp({
  apiKey: 'AIzaSyBnl7XX8rT4qNnotDyZZ_nABTa75ZGHKJ0',
  authDomain: 'round-of-golf.firebaseapp.com',
  projectId: 'round-of-golf',
  storageBucket: 'round-of-golf.appspot.com',
  messagingSenderId: '360870238761',
  appId: '1:360870238761:web:2208670b1bedecc2d51a38',
});

export function firebaseApp() {
  return app;
}
