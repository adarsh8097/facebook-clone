import React  from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { MyContextProvider } from './Context/Context';

// Class Component
//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
 
  <React.StrictMode>
   
  <BrowserRouter>
   <MyContextProvider>
    <App />
    </MyContextProvider>
    </BrowserRouter>
  
  </React.StrictMode>
  , document.getElementById('root')
);


/*
ReactDOM.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>,
  document.getElementById('root')
);

*/








