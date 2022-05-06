import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FetchApi from './FetchApi';
import Neg from './Neg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FetchApi
      sentiment_type={'positive'}
      sentiment_url={'get_positive_sentiments'}
    />
    <FetchApi
      sentiment_type={'negative'}
      sentiment_url={'get_negative_sentiments'}
    />
    {/* <Neg /> */}
  </React.StrictMode>
);
reportWebVitals();
