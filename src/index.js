import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './component/ScrollToTop';
import './styles/reset.css'
import './styles/fonts.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/variables.css'
import './styles/helpers.css'
import './styles/defaults.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToTop/>
    </BrowserRouter>
  </React.StrictMode>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

