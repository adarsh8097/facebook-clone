import React from "react";
//import { Link } from "react-router-dom";
import './UserProfile.css';
import ThemeProvider from "../Theme/ThemeProvider";
import { Navigate,Link} from "react-router-dom";
 const navigate = Navigate;
 //import UserPost from 'SinglePost/UserPost';
 const userDetail = JSON.parse(localStorage.getItem("userDetails")|| "{}");
 console.log(userDetail);
 
// const logout=()=>{
//     localStorage.removeItem('userDetails');
//     // setLogin('false');
//     alert('logut Successfully !');
//      navigate('/LoginPage');
//  }

function UserProfile(){
     const close =()=>{
      //  document.getElementById('bt').style.display ='none';
     }
    //  const logout=()=>{
    //     localStorage.removeItem('userDetails');
    //     // setLogin('false');
    //     alert('logut Successfully !');
    //      navigate('/LoginPage');
    //  }
     
    return(
         <div>
           {/* <div className="upc" id="myupc">
                        <button className="btn1" onClick={close}> X </button>
                        <button className="cblp">
                        <div className="upc_section" >
                            <div className=" dp_profile">
                             <div id="img-preview"></div>
                          <input type="file"  placeholder="choose" id="choose-file" />
                          <label for="choose-file">Choose file</label>
                        </div>
                        <Link to="#">UserProfile</Link>
                        </div>
                        </button>
                        <div className="upc_section" >
                        <Link to="#">Setting</Link>
                        </div>
                        <div className="upc_section" >
                        <Link to="#">Dispaly</Link>
                        </div>
                        <div className="upc_section" >
                        <Link to="#">UserProfile</Link>
                        </div>
                        
                        
             </div> */}
           

             <div className="main_body" id="bt">
             
               <div className="body-T">
             {/* <button className="btn1"  onClick={close}> X </button>*/}
                <div className="body-form" style={{transform:"translate X(0%)"}}  >
                <div className="header-title">
                    <button className="btn-1">
                     <div className="header-content">
                        <div className="header-content-box">
                        <span className="header-text">
                            <div className="content-body">
                                <img className="img-sum profileimg" src="images/images.jpg" alt="profile"/>
                                <div className="test-body">
                                   <span className="text-1">{userDetail.name}</span>
                                    <span className="text-2">See your profile</span>

                                 </div>
                             </div>
                        </span>
                        <div className="line1"></div>
                        </div>
                     </div>
                    </button>
                </div>
                <div className="abc">
                    <button className="cde">
                     <div className="fgh">
                        <button className="ijk">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z" clip-rule="evenodd"></path></svg>

                        </button>
                        <div className="lmn">
                            <span className="opq">Dispaly Preferences <ThemeProvider/> </span>
                        </div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                     </div>
                    </button>
                </div>
                <div className="abc">
                    <button className="cde">
                     <div className="fgh">
                        <button className="ijk">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"></path></svg>
                        </button>
                        <div className="lmn">
                            <span className="opq">Help and support</span>
                        </div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                     </div>
                    </button>
                </div>
                <div className="abc">
                    <button className="cde">
                     <div className="fgh">
                        <button className="ijk">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M416.3 256c0-21 13.1-38.9 31.7-46.1-4.9-20.5-13-39.7-23.7-57.1-6.4 2.8-13.2 4.3-20.1 4.3-12.6 0-25.2-4.8-34.9-14.4-14.9-14.9-18.2-36.8-10.2-55-17.3-10.7-36.6-18.8-57-23.7C295 82.5 277 95.7 256 95.7S217 82.5 209.9 64c-20.5 4.9-39.7 13-57.1 23.7 8.1 18.1 4.7 40.1-10.2 55-9.6 9.6-22.3 14.4-34.9 14.4-6.9 0-13.7-1.4-20.1-4.3C77 170.3 68.9 189.5 64 210c18.5 7.1 31.7 25 31.7 46.1 0 21-13.1 38.9-31.6 46.1 4.9 20.5 13 39.7 23.7 57.1 6.4-2.8 13.2-4.2 20-4.2 12.6 0 25.2 4.8 34.9 14.4 14.8 14.8 18.2 36.8 10.2 54.9 17.4 10.7 36.7 18.8 57.1 23.7 7.1-18.5 25-31.6 46-31.6s38.9 13.1 46 31.6c20.5-4.9 39.7-13 57.1-23.7-8-18.1-4.6-40 10.2-54.9 9.6-9.6 22.2-14.4 34.9-14.4 6.8 0 13.7 1.4 20 4.2 10.7-17.4 18.8-36.7 23.7-57.1-18.4-7.2-31.6-25.1-31.6-46.2zm-159.4 79.9c-44.3 0-80-35.9-80-80s35.7-80 80-80 80 35.9 80 80-35.7 80-80 80z"></path></svg>
                         </button>
                        <div className="lmn">
                            <span className="opq">Sattings and Privacity</span>
                        </div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                     </div>
                    </button>
                </div>

                <div className="abc">
                    <button className="cde">
                     <div className="fgh">
                        <button className="ijk" >
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5zm10-6l5-4-5-4v3H9v2h6v3z"></path></g></svg>
                         </button>
                       <div className="lmn">
                      <Link to="/LoginPage">  <span className="opq">Logout</span> </Link> 
                        </div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                     </div>
                    </button>
                </div>
                <div className="cmd">
                    <span className="dmg">
                   Privacity - Terms - Advertising - Ad Choices - Cookies - More - Facebook 2020
                    </span>

                </div>
                </div>
               </div>
             </div>
         </div>
    )
}

export default  UserProfile;