import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './redux/reducers/mainReducer';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = configureStore({ reducer: mainReducer });

root.render(

  <Provider store={reduxStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();