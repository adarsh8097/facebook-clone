import React, { useContext, useEffect } from "react";
import HeaderArea from "../HeaderArea/HeaderArea";
import MainArea from "../MainArea/MainArea";
import { useNavigate } from "react-router-dom";
import { MyContext} from "../Context/Context.js";

function HomePage() {
  const navigate = useNavigate();
  const { userToken,userDetail} = useContext(MyContext);
   
  console.log("userDetail",userDetail);
  console.log("userDataName",userToken);

   function UserLogin(){
    console.log("userDetail",userDetail)
    console.log("userToken",userToken)
    if (!userToken || Object.keys(userDetail).length === 0) {
      navigate("/");
    }
    // }else{
    //    localStorage.setItem('userdetails',JSON.stringify(userDetail));
    //     // navigate('/HomePage')
    // }
}
 
 UserLogin();
   
  // useEffect(()=>{
  //   UserLogin();
  // },[]);

  return (
    <div>
      <HeaderArea />
      <MainArea/>
    </div>
  );
}

export default HomePage;
