import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyHelloWorld(){

  return(
    <div>
      <p>Hello World first commit.</p>
      <p>Hello! I'm Mansi.</p>
    </div>
    
  );
}


ReactDOM.render(
  <MyHelloWorld />, document.getElementById('root')
);


