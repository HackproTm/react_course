import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

import './Resources/styles.css';
import App from './Components/App';
import { configureStore } from './Redux/ConfigureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
