import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import HeaderArea from "../HeaderArea/HeaderArea";
import  moment  from "moment";
import { CgProfile } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserDataProfile(){
  const[userData , setUserData] = useState([]);
  const[address , setAddres] = useState(false);
  const[skills , setSkills] = useState(true);
  const[education , setEducation] = useState(false);
  const[experience , setExperience] = useState(false);
  const[Follow , setUnFollow] = useState(false);


//   const userDetail = JSON.parse(localStorage.getItem("userdetails")|| "{}");
//  console.log(userDetail.token);
 const userToken = JSON.parse(sessionStorage.getItem("userTokens")|| "{}");

 let projectID = "f104bi07c490";

    const { id } = useParams(); 
    console.log("UserId",id);
    let userId = id;
    console.log(userId);
   
     const ShowUserProfile =()=>{
      
       try{
        fetch(`https://academics.newtonschool.co/api/v1/facebook/user/${userId}`, {
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'projectID': projectID,
          }
      })
      .then((response) => response.json())
      .then((data)=> {
        setUserData(data.data);
        console.log(data)});
       }catch(error){
       
        console.log("This is not error ",error);

       }
     }

    //  console.log("Userdata",userdata);
    //  console.log("userdataName", userdata.name&& userdata.email);

    useEffect(()=>{
      ShowUserProfile();
    },[id,userToken , projectID]);


    function handleAlert(){
      toast.error("No Data Found");
    }

    // console.log("UserData", userData.address.city);
  return(
   <>
   <ToastContainer/>
    <HeaderArea/>
     <div className="fluid-container bg-dark" style={{height:"750px"}}>
        <div className="col-md-9  border m-auto relative" style={{height:"auto",marginTop:"40px"}}>
          <div className="bg-secondary" style={{height:"200px"}}>
            <img src="https://images.unsplash.com/photo-1549813069-f95e44d7f498?q=80&w=1656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{height:"100%", width:"100%",backgroundSize:"contain"}} alt="..."/>
          </div>
          <div className="bg-dark absolute border" style={{ position: "absolute", marginLeft: "15px", height: "100px", width: "100px", marginTop: "-40px", borderRadius: "50%",  overflow: "hidden" }}>
            { userData?.author?.profileImage || userData?.profileImage ? <img src={userData?.author?.profileImage || userData?.profileImage } alt="..." style={{ height: "100%", width: "100%", objectFit: "cover" }} />:<CgProfile style={{ color:"white",objectFit: "cover", height: "100%", width: "100%" }} />}
          </div>
          <div className="d-flex mt-4 justify-content-around text-white">
            <div className="" style={{marginLeft:"12rem"}}>
              <h2>{userData?.author?.name || userData?.name}</h2>
              <p style={{fontSize:'12px',opacity:"0.5"}}>{moment(userData?.author?.createdAt|| userData?.createdAt).format('MMMM Do YYYY')}</p>
           
              <div className="d-flex  row" style={{fontSize:'12px',opacity:"0.5"}}>
                {/* <p>name:{userData?.author?.name || userData?.name ? userData?.author?.name || userData?.name : "No data found"}</p> */}
                <p>email:{userData?.author?.email || userData?.email ? userData?.author?.email || userData?.email : "No data found"}</p>
                <p>gender:{userData?.author?.gender|| userData?.gender ? userData?.author?.gender|| userData?.gender: "Not found"}</p>
                <p>phone:{userData?.author?.phone || userData?.phone?  userData?.author?.phone|| userData?.phone:"not found"}</p>
                <p></p>
                <p style={{fontSize:'12px',opacity:"0.5"}}>UpdateAccount:{moment(userData?.author?.updateAt|| userData?.updateAt).format('MMMM Do YYYY')}</p>
              </div>
            </div>
            <div className="userbtn">
              <button className="btn btn-primary m-1 p-2 fs-5" onClick={handleAlert}>Learn More</button>
              <button className="btn btn-primary m-1 p-2 fs-5" onClick={()=>setUnFollow(!Follow)}>{ Follow ? "Follow":"UnFollow"}</button>
              <button className="btn btn-primary m-1 p-2 fs-5" onClick={handleAlert}>Messages</button>
            </div>

          </div>
        
          <div className="d-flex absolute mt-4 justify-content-center">
            <button className={`btn  btn-dark m-3 px-4 fs-5 `} style={{ borderBottom: skills ? "2px solid #007bff" : "none" }} onClick={()=>{setSkills(true);setAddres(false);setEducation(false);setExperience(false)}}>Skills</button>
            <button className="btn btn-dark m-3 px-4 fs-5"style={{ borderBottom: education ? "2px solid #007bff" : "none" }}  onClick={()=>{setSkills(false);setAddres(false);setEducation(true);setExperience(false)}}>Education</button>
            <button className="btn btn-dark m-3 px-4 fs-5" style={{ borderBottom: experience ? "2px solid #007bff" : "none" }}  onClick={()=>{setSkills(false);setAddres(false);setEducation(false);setExperience(true)}}>Experience</button>
            <button className="btn btn-dark m-3 px-4 fs-5"style={{ borderBottom: address ? "2px solid #007bff" : "none" }}  onClick={()=>{setSkills(false);setAddres(true);setEducation(false);setExperience(false)}}>Address</button>
          </div>
        </div>
        <div className="d-flex m-1" style={{marginLeft:"15rem"}}>
        {
          skills ? (<div className="card w-75 bg-dark text-white border col-12 p-2 active" style={{margin:"auto",padding:"10px",marginTop:"10px", maxHeight: "300px", overflowY: "auto" }}>
         { userData?.skills &&  userData?.skills?.length > 0 ? (
                <div>
                  <p style={{justifyContent:"center",fontWeight:"bold",marginLeft:"20px"}}>Skills</p>
                  <ul>
                    { userData?.skills.map((d,index)=>(
                      <li key={index} style={{listStyle:"none"}}>{d}</li>
                    ))}
                  </ul>
                </div>
              
              ):(
                <div>
                  <p style={{color:"red"}}>Data not found</p>
                </div>
              )}
      </div>):""
        }
       {
        education ?(
          <div className="card w-75 bg-dark text-white border bordercol-12 p-2 " style={{margin:"auto",padding:"10px",marginTop:"10px", maxHeight: "300px", overflowY: "auto" }}>
             {userData?.education && userData?.education?.length > 0 ? (
                <div>
                  <p style={{justifyContent:"center",fontWeight:"bold",marginLeft:"20px"}}>Education</p>
                  <ul>
                    {userData.education.map((d,index)=>(
                      <li key={index}>
                        <p>Degree:{d.degree}</p>
                        <p>description:{d.description}</p>
                       <p>EndDate:{moment(d.endDate).format('MMMM Do YYYY')}</p>
                        <p>SchoolName:{d.schoolName}</p>
                        <p>StartDate:{moment(d.startDate).format('MMMM Do YYYY')}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              
              ):(
                <div>
                <p style={{color:"red"}}>Data not found</p>
              </div>
              )}
      </div>
        ):''
       }
        {
          experience ?(
            <div className="card w-75 bg-dark text-white border col-12 p-2 " style={{margin:"auto",padding:"10px",marginTop:"10px", maxHeight: "300px", overflowY: "auto" }}>
             {userData?.workExperience && userData?.workExperience?.length > 0 ? (
                <div>
                  <p style={{justifyContent:"center",fontWeight:"bold",marginLeft:"20px"}}>workExperience</p>
                  <ul>
                    {userData?.workExperience?.map((d,index)=>(
                      <li key={index}>
                        <p>CompanyName:{d.companyName}</p>
                        <p>Description:{d.description}</p>
                       <p>EndDate:{moment(d.endDate).format('MMMM Do YYYY')}</p>
                        <p>Desgination:{d.designation}</p>
                        <p>Location:{d.location}</p>
                        <p>StartDate:{moment(d.startDate).format('MMMM Do YYYY')}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              
              ):(
                <div>
                <p style={{color:"red"}}>Data not found</p>
              </div>
              )}
      </div>
          ):''
        }
       {
        address?(
          <div className="card w-75 bg-dark text-white border p-2  col-12 height-auto" style={{margin:"auto",padding:"10px",marginTop:"10px", maxHeight: "300px", overflowY: "auto"}}>
          {userData?.address && userData?.address?.length > 0 ? (
                <div>
                  <p style={{justifyContent:"center",fontWeight:"bold",marginLeft:"20px"}}>Address</p>
                  <ul>
                    {userData?.address.map((d,index)=>(
                      <li key={index}>
                        <p>city:{d.city}</p>
                        <p>Country:{d.country}</p>
                        <p>State:{d.state}</p>
                        <p>Street:{d.street}</p>
                        <p>ZipCode:{d.zipCode}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              
              ):(
                <div>
                <p style={{color:"red"}}>Data not found</p>
              </div>
              )}
          
      </div>
        ):''
       }
      </div>
       </div>



   </>
  );
}