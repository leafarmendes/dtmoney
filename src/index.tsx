import React from 'react';
import ReactDOM from 'react-dom/client';
import { Server } from 'miragejs'
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions' , () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 600,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    });
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);