import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import './tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreContext } from 'redux-react-hook';
import { store } from './store';

if (process.env.NODE_ENV === 'production') {
  window.db.enablePersistence().catch(function(err) {
    console.error('Not able to enable persistence.', err);
  });

  Sentry.init({
    dsn: 'https://645ca46ead98408a94482c3f2bb4dcac@sentry.io/1890426'
  });
}

window.observer = window.lozad();

// Set vertical height for weird browsers (android chrome)
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
