import React, { useContext, useState } from 'react';
import './LoginPage.css';
import {Link, json, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from '../Context/Context';

const  ProjectId = 'f104bi07c490';
function LoginPage(){

const[userName, setUserName] = useState();
const[password, setPassword] = useState();

const {setUserDetail,setUserToken,userDetail,userToken} = useContext(MyContext);


const navigate = useNavigate();
console.log(userDetail);
console.log(userToken);


//    const LoginUp =async()=>{
//    // userInfo.appType = "facebook";
//     try{
//         const responce = await fetch('https://academics.newtonschool.co/api/v1/user/login',{
//             method:'POST',
           
//               headers:{
//                          "Content-Type": "application/json",
//                         projectId: "f104bi07c490",
//                },

//                body:JSON.stringify({
//                         email: userName,
//                         password: password,
//                         appType: 'facebook' ,

                        
//               }),
            
             
//         });
        
//          const data = await responce.json();
//          if(responce.status >= 400){
//             alert(data.message);
//             return;
//          }

        //  const userData = data.data;
        // data.data ={};
        // data.data.user = userData;
        //  localStorage.setItem('userDetails',JSON.stringify(userData));
        //  alert(`welcome ${userData.name}`);
        //  console.log(userData);
        //  navigate("/HomePage");
     

//     } catch(err){
//         console.log('error',err);
//     }

//    };
// let RegisterDetils = JSON.parse(localStorage.getItem('userdetails'));
//  console.log(RegisterDetils);

   if(Object.keys(userToken).length !== 0){
      navigate('/HomePage');
   }

  const LoginUp =async(e)=>{
    e.preventDefault();
    console.log(userName)
    console.log(password)
     try{
     const response =   await fetch('https://academics.newtonschool.co/api/v1/user/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'projectID': ProjectId,
    },
    body: JSON.stringify({
        email: userName,
        password: password,
        appType: 'facebook'
    })
})

  let data = await response.json();
  console.log("response data",response)



 if(response.ok){
  
   
                const userData = data.data;
                const userToken = data.token;
                console.log("userToken",userToken);
                console.log("userData",userData)
                sessionStorage.setItem('userTokens',JSON.stringify(userToken));
                localStorage.setItem('userTokens',JSON.stringify(userToken));
                localStorage.setItem('userdetails',JSON.stringify(userData));
                setUserDetail(userData);
                setUserToken(userToken);
           
                 toast.success(`welcome ${userData.name}`);
              

                 navigate("/HomePage"); 
             }else{
                // alert(data.message)
            toast.error(data.message);
     } 
    }
        catch(error){
            toast.error(error.message);

        console.log('UserLoginfaild',error);
     }
  }
   
function alert(){
    toast.error('Coming soon');
}

      

    return(
      <>
        <ToastContainer/>
        <div className='login'>
            <div className='login_wrapper'>
                <div className='login_wrap'>
                    <div className='login_1'>
                        <div className='fb-image'>
                        <img className='fb1' src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"  alt='Facebooklogo'/>
                        <span>
                           Facebook helps you connect and share 
                        </span>
                        <br></br>
                        <span>with 
                           the people in your life.</span>
                        </div>
                    </div>
                    <div className='login_2'>
                        <div className='login_2_wrap'>
                      
                            <form onSubmit={LoginUp}>
                                <input type='email' 
                                 placeholder="Email address or phone number"
                                  onChange={(e)=>setUserName(e.target.value)}
                                  required
                                 />
                                <input type='password' 
                                placeholder="Password" 
                                 onChange={(e)=>setPassword(e.target.value)}
                                 required
                                />
                              < button 
                              type='submit'
                               className='blue_btn1'
                               >Log In</button>

                            </form>
                            
                            <Link to="#" className='forgot-pass' onClick={alert}>Forgotten password ?</Link>
                        
                        <div className='sign_spliter'></div>
                      <Link to="/SignUp"><button className='blue_btn2 open-signup'>Create Account</button> </Link>
                        </div>
                    <Link to="/extra" className='sign_extra'>
                        <b>create a Page </b>
                         for a celebrity, brand or business.
                    </Link>
                    </div>

                </div>
            </div>
          
        </div>
        </>
    );
}

export default LoginPage;

