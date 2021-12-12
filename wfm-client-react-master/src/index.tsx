import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import { Provider } from 'react-redux';
import { store } from './Redux/store/store';
import AppHOC from './Redux/HOC/AppHOC';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <AppHOC />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
