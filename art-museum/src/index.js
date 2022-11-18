import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Root>
    </Root>
  </React.StrictMode>,
  document.getElementById('root')
);

function Root() {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
 
  )
}

