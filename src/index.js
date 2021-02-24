import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const donothing=(e)=>{
  var evt = e?e:window.event;
  if(!evt.shiftKey && evt.ctrlKey)
  {
    evt.preventDefault();
    return false;
  }
};
console.log(window.innerHeight);
document.body.addEventListener('wheel',donothing,{passive:false});

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById('root')  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
