import React, { useEffect, useState } from 'react';
import './LoginPage.css';
//import {Button} from 'react-bootstrap/Button';
import {Link, json, useNavigate} from 'react-router-dom';
import { useAuth } from "react";
function LoginPage(){

const[userName, setUserName] = useState();
const[password, setPassword] = useState();
const[errMessage,setErrMessage] = useState("");

//const[hasErr, sethasErr] = useState(false);
//const[userInfo,setUserInfo] = useState({email:"",password:"",});

//const[isLogin , setLogin] = useState('false');

const navigate = useNavigate();
//const {user,setUser} = useAuth();

//const HandleLogin=()=>{
   // e.preventDefault();

    // fetch("https://academics.newtonschool.co/api/v1/user/login",{
    //     method:"POST",
    //     headers:{
    //         "Content-Type": "application/json",
    //     projectId: "f104bi07c490",
    //     },

    //     body:JSON.stringify({
    //         email: userName,
    //         password: password,
    //     }),
    // })
    // .then((resp)=>{
        
    //     if(resp.status >= 400){
    //         new Error("Faild to login");
    //       //alert("UserName or passwrod is incorrect!")
    //     }
    //     return resp.json();
        

    // }).then((data)=>{
    //     var resdata = JSON.stringify(data);
    //     console.log(resdata);
    //     alert(data.message);
    //    // localStorage.setItem("userDetails",);
    //     localStorage.setItem('authToken',data.token);
    //     localStorage.setItem('userInfo',  JSON.stringify(data))
       
    //    // setLogin(true);


    // });

   // navigate("/HomePage");


   const LoginUp =async()=>{
   // userInfo.appType = "facebook";
    try{
        const responce = await fetch('https://academics.newtonschool.co/api/v1/user/login',{
            method:'POST',
           
              headers:{
                            "Content-Type": "application/json",
                        projectId: "f104bi07c490",
               },

               body:JSON.stringify({
                        email: userName,
                        password: password,
                        appType: 'facebook' ,

                        
              }),
            
             
        });
        
         const data = await responce.json();
         if(responce.status >= 400){
            alert(data.message);
            return;
         }

         const userData = data.data;
        data.data ={};
        data.data.user = userData;
         localStorage.setItem('userDetails',JSON.stringify(userData));
         alert(`welcome ${userData.name}`);
         console.log(userData);
         navigate("/HomePage");
        // if(userData){
        //     navigate('/HomePage');
        // }else{
        //     navigate('/LoginPage');
        // }
      

    } catch(err){
        console.log('error',err);
    }

   };

  
   
  

useEffect(()=>{
  LoginUp();
   //const userData= localStorage.setItem('userDetails',JSON.stringify(userData));
    const userDetails = localStorage.getItem('userDetails');
   if(!userDetails){
    navigate('/LoginPage');
   }
//    else{
//     navigate('/HomePage');
//    }
       

   },[LoginPage]);

// };

//  const logout =()=>{
//     localStorage.removeItem('userDetails');
//    // setLogin('false');

//  }

// useEffect(()=>{
//     const userDetails = localStorage.getItem("userDetails");
//     //setLogin(false);
//     if(userDetails){
//         navigate("/LoginPage"); 
//     }
    
// },[]);


      

    return(
      

        <div className='login'>
            <div className='login_wrapper'>
                <div className='login_wrap'>
                    <div className='login_1'>
                        <img className='fb1' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"  alt='Facebooklogo'/>
                        <span>
                            
            Facebook helps you connect and share 
            with the people in your life.
                        </span>
                    </div>
                    <div className='login_2'>
                        <div className='login_2_wrap'>
                      
                            <form>
                                <input type='text' 
                                 placeholder="Email address or phone number"
                                  onChange={(e)=>setUserName(e.target.value)}
                                 />
                                <input type='password' 
                                placeholder="Password" 
                                 onChange={(e)=>setPassword(e.target.value)}
                                />
                              < button type='button'
                               className='blue_btn1'
                               onClick={LoginUp}
                               >Log In</button>
                            </form>
                            
                            <Link to="/forgot" className='forgot-pass'>Forgotten password ?</Link>
                        
                        <div className='sign_spliter'></div>
                      <Link to="/SignUp"><button className='blue_btn2 open-signup'>Create Account</button> </Link>
                        </div>
                    <Link to="/" className='sign_extra'>
                        <b>create a Page </b>
                         for a celebrity, brand or business.
                    </Link>
                    </div>

                </div>
            </div>
          
        </div>
    )
}

export default LoginPage;

