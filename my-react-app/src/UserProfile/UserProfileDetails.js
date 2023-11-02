import React from "react";
import './UserProfileDetails.css'
import HeaderArea from "../HeaderArea/HeaderArea";
import { useNavigate } from "react-router-dom";


const userDetail = JSON.parse(localStorage.getItem("userDetails")|| "{}");
function UserProfileDetails(){

     const navigate  = useNavigate();

     function LogOut(){
        localStorage.removeItem('userDetails');
        navigate("/");
     }

    return(
        <div>
    
        <HeaderArea />
        
         <br/>
         <br/>
           
                <div className="profile-card ">
                <img src="/images/images.jpg" alt="dp"/> 
                        <br></br>
                    <h3><b>Name:</b> {userDetail.name}</h3>
                        <p><b>Email:</b> {userDetail.email}</p>

                            <br/>
                        <button className="butn" onClick={LogOut}>LogOut</button>
                        
                        </div> 

            
        
        </div>
    );
}

export default UserProfileDetails ;