import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyProvider from './context/MyProvider';

import './styles/global.css';

const root = document.getElementById('root');

ReactDOM.render(
    <MyProvider>
      <App />
    </MyProvider>,
    root,
);
