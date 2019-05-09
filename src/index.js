import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import Value from './Value'
import store from "./store";
import './style.css';

const App = () => <Value/>

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);