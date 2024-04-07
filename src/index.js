import React from 'react';
import ReactDOM from 'react-dom/client';

import HomePage from './components/HomePage'

function App() {
  return(
    
    <HomePage />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


