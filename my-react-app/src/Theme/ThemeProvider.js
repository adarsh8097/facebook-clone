import React, { useState } from 'react';
import './ThemeProvider.css';
//import { MdDarkMode } from 'react-icons/md';

const ThemeProvider = () => {

 const[isdarkMode, setIsDarkMode] = useState(false);
 

   const them =()=>{
    setIsDarkMode(!isdarkMode);

    if(!isdarkMode){
      document.body.style.backgroundColor ="black";
      document.body.style.color ="white";
     // document.body.style.borderColor ="white"
     // document.body.style.borderColor = "white";
    }
    else{
      document.body.style.backgroundColor="white";
      document.body.style.color ="black";
    }
   }
   
   const buttonText = isdarkMode ? 'Dark Mode' : 'Light Mode';
     
   /* const themStyle =()=>{
      backgroundColor : isdarkMode ? '#fff' : 'rgb(255,255,255)'

    }*/


     return (
        <div id="main">
         {/* <h1>{headerText}</h1>*/}
          <button onClick={them}>{buttonText}</button>
        </div>
      )
};

export default ThemeProvider;
