import React, { useEffect, useState } from "react";
import './UserProfileDetails.css'
import HeaderArea from "../HeaderArea/HeaderArea";
import { useNavigate } from "react-router-dom";





function UserProfileDetails(){
//     let userName = userDetail.name;
// let userEmail = userDetail.email;

// console.log(userName);
// console.log(userEmail);

     const navigate  = useNavigate();
     const [data,setData] = useState({});

    //  function LogOut(){
    //     localStorage.removeItem('userdetails');
    //     sessionStorage.removeItem('userTokens');
    //     navigate("/");
    //  }

    useEffect(()=>{
        const userDetail = JSON.parse(localStorage.getItem("userdetails"));
        if(!userDetail){
            navigate("/")
        }else{
            setData(userDetail)
        }
    },[])

    return(
        <div>
    
        <HeaderArea />
        
         <br/>
         <br/>
           
                <div className="profile-card ">
                <img src="/images/images.jpg" alt="dp"/> 
                        <br></br>
                    <h3><b>Name:</b> {data.name}</h3>
                        <p><b>Email:</b> {data.email}</p>

                            <br/>
                        {/* <button className="butn" onClick={LogOut}>LogOut</button> */}
                        
                        </div> 

            
        
        </div>
    );
}

export default UserProfileDetails ;