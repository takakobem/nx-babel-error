import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';


class Hoge {
  hoge = async() => {  // error!
    console.log("hoge")
  }
}

const hoge = new Hoge()
hoge.hoge()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
