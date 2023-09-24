import React, { useEffect } from "react";
import HeaderArea from "../HeaderArea/HeaderArea";
import MainArea from "../MainArea/MainArea";
import { useNavigate } from "react-router-dom";
import ThemeProvider from "../Theme/ThemeProvider";
//import ThemeProvider from "../Theme/ThemeProvider";



function HomePage(){

    const navigate = useNavigate();
    const userDetail = JSON.parse(localStorage.getItem("userDetails")|| "{}");

    useEffect(()=>{
        if(!userDetail){
           navigate("/LoginPage");
        }
        fetch("https://academics.newtonschool.co/api/v1/facebook/post/",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${userDetail.token}`,
                projectId: "f104bi07c490",
            },

        })
        .then((data)=>data.json())
        .then((data) => console.log(data));
    },[]);

    return(
        
        
           <div>
            <HeaderArea/>
           
           <MainArea />
           </div>
            
           
          
           
           
            
       
       
    )
}

export default HomePage;