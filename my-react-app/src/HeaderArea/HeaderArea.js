import React, { useState }  from "react";
import './HeaderArea.css';
import {AiFillHome, AiOutlineSearch, AiOutlineWallet} from 'react-icons/ai';
import {MdOndemandVideo} from 'react-icons/md';
import {FaBell, FaFacebookMessenger, FaPlusCircle, FaRegFlag,FaUsers} from 'react-icons/fa';

import { Link } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
//import { getHeaderWithProjectId } from "../Svg/Configer";
function HeaderArea(){
     
   /* const open =()=>{
        document.getElementById('myupc').style.display="block";
    }
    const close=()=>{
        document.getElementById('myupc').style.display="none";
    }*/
    
     const[isClicked , setIsClicked] = useState(false);
         
     const openbtn =()=>{
        // e.preventDefault();
         setIsClicked(!isClicked);
     }

    //    if(!isClicked){
    //      document.getElementById('myupc').style.display="none";
    //    }else{
    //         document.getElementById('myupc').style.display="block";
    //    }
    //  }
    
    

   /*
    const open=()=>{
        document.style.display="block";
    }
    const close =() =>{
        document.getElementById('myupc').style.display ="none";
    } */

   /*
    const chooseFile = document.getElementById('choose-file');
    const imgPrevew = document.getElementById('img-preview');

      chooseFile.addEventListener("change", function () {

     getImageData();

      });

      function getImageData() {
        const files = chooseFile.files[0];
        if(files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
            fileReader.addEventListener("load", function(){
                imgPrevew.style.display = "block";
                imgPrevew.innerHTML ='<img src="'+ this.result+'"/>';

            });
        }
      }*/

    return(
        
        <div className ="HomePage">
           <div className ="header">

            <div className ="first-header">
              <div className="logo">
                <img src ="/images/logo-img.png" alt="logo" style={{height:"80px", padding:"1rem"}} />
                </div>

                <div className="Search">
                    <AiOutlineSearch fontSize="2.3rem" style={{height:"4rem"}}/>
                    <input placeholder="Search Facebook" type="Search"/>
                </div> 
            </div> 

            <div className="middle-header">
                    <div className="Icon">
                      <Link to="/HomePage"> <AiFillHome fontSize="3rem" color="#1877f2"/></Link>
                    </div>
                    <div className="Icon">
                        
                       <Link to="/Flage"> <FaRegFlag fontSize="2.5rem"  color="black"/></Link>
                        <div class="sc-11rr3rd-0 iqxmt7-0 hoFBBP goNsGa">4</div>
                        
                    </div>
                    
                    <div className="Icon">
                      <Link to="https://www.facebook.com/watch/shows" > <MdOndemandVideo fontSize="2.5rem" color="black" /></Link>
                        <div class="sc-11rr3rd-0 iqxmt7-0 hoFBBP goNsGa">10</div>
                    </div>
                    <div className="Icon">
                      <Link to="https://www.facebook.com/friends">  <FaUsers fontSize="2.5rem" color="black" /></Link>
                        <div class="sc-11rr3rd-0 iqxmt7-0 hoFBBP goNsGa">20</div>
                    </div>
                    <div className="Icon">
                        <AiOutlineWallet fontSize="2.5rem" />
                    </div>
            </div>
                 <div className="third-header">
                    
                     <div className="plus">
                        <FaPlusCircle fontSize= "2rem"/>
                    </div>
                    <div className="plus">
                        <FaFacebookMessenger fontSize= "2rem"/>
                        <div class="sc-11rr3rd-0 iqxmt7-0 hoFBBP goNsGa">20</div>
                    </div>
                    <div className="plus">
                        <FaBell fontSize= "2rem"/>
                        <div class="sc-11rr3rd-0 iqxmt7-0 hoFBBP goNsGa">40</div>
                        
                    </div>
                   
                    

                    <div className="pluss" >
                    
                   <button id="but1" onClick={openbtn}>
                      <img className="imf" src="/images/images.jpg" alt="dp" style={{height:"45px"}}/>
                     </button>
                 
                    
                     {/*<div class="sc-11rr3rd-0 iqxmt7-0 star Online">.</div>*/}
                     
                      </div>
                 {isClicked && <div id="myupc">
                       {/* <button id="ufg" onClick={close}>X</button>*/}
                        <UserProfile/>
                        </div>
                  }
             
                </div>
                
                
                
            </div>
           
            
           
        </div>

        
    )
}

export default  HeaderArea;