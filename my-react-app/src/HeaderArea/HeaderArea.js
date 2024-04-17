import React, { useContext, useState,useEffect } from "react";
import "./HeaderArea.css";
import { AiFillHome, AiOutlineSearch, AiOutlineWallet } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { FaBell, FaFacebookMessenger, FaPlusCircle, FaRegFlag, FaUsers } from "react-icons/fa";
import { Link, NavLink,withRouter} from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import { MyContext } from "../Context/Context";
import SearchItem from "./SearchItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';
function HeaderArea({history }) {
    const [isClicked, setIsClicked] = useState(false);
    const { SearchPost,searchItem, setSearchItem, searchClicked,activeItembutton,setActiveButton,setSearchClicked } = useContext(MyContext);
    const navigate = useNavigate();
    const openbtn = () => {
        setIsClicked(!isClicked);
    };


    function onmesg() {
        toast.error("Network issue can't uploaded your data please try after sometime ");
    }

 
     function handleCloseModal(){
            setSearchClicked(false);
     }

    return (
        <nav>
            <div className="HomePage navbar navbar-expand-lg navbar-light bg-light">
                <div className="header container-fluid">
                    <div className="first-header">
                        <NavLink className="logo" to="/HomePage">
                            <img src="../images/logo-img.png" alt="logo" style={{ height: "80px", padding: "1rem" }} />
                        </NavLink>

                        <div className="Search">
                            <AiOutlineSearch fontSize="2.3rem" style={{ height: "4rem" }} />
                            <input placeholder="Search Facebook" type="Search" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="middle-header" onClick={handleCloseModal}>
                      
                        <NavLink className="Icon navbar__link " to="/HomePage" style={{ borderBottom: activeItembutton === "1" ? "2px solid #007bff" : "none" }} onClick={()=>setActiveButton("1")}>
                            <AiFillHome fontSize="3rem" color="#1877f2" />
                        </NavLink>
                        <NavLink className="Icon navbar__link" activeClassName="navbar__link--active" to="/Flage" style={{ borderBottom: activeItembutton === "2" ? "2px solid #007bff" : "none" }} onClick={()=>setActiveButton("2")}>   
                            <FaRegFlag fontSize="2.5rem" color="black" />
                        </NavLink>
                        <NavLink className="Icon navbar__link" activeClassName="navbar__link--active" to="/MyVideo" style={{ borderBottom: activeItembutton === "3" ? "2px solid #007bff" : "none" }} onClick={()=>setActiveButton("3")}>
                            <MdOndemandVideo fontSize="2.5rem" color="black" />
                        </NavLink>
                        <NavLink className="Icon navbar__link" activeClassName="navbar__link--active" to="/Myfriend" style={{ borderBottom: activeItembutton === "4" ? "2px solid #007bff" : "none" }} onClick={()=>setActiveButton("4")}>
                            <FaUsers fontSize="2.5rem" color="black" />
                        </NavLink>
                        <NavLink className="Icon navbar__link" activeClassName="navbar__link--active" to="/MyMarket" style={{ borderBottom: activeItembutton === "5" ? "2px solid #007bff" : "none" }} onClick={()=>setActiveButton("5")}>
                            <AiOutlineWallet fontSize="2.5rem" color="black" />
                        </NavLink>
                    </div>
                    <div className="third-header">
                        <div className="plus">
                           <Link to="/HomePage"><FaPlusCircle fontSize="2rem" color="black" /></Link>
                        </div>
                        <div className="plus"  onClick={onmesg}>
                            <FaFacebookMessenger fontSize="2rem" />
                            <div className="hoFBBP goNsGa">20</div>
                        </div>
                        <div className="plus" onClick={onmesg}>
                            <FaBell fontSize="2rem" />
                            <div className="hoFBBP goNsGa">40</div>
                        </div>
                        <div className="pluss" onClick={openbtn}>
                            <button id="but1">
                                <img className="imf" src="/images/images.jpg" alt="dp" style={{ height: "45px" }} />
                            </button>
                        </div>
                        {isClicked && (
                            <div id="myupc">
                                <UserProfile />
                            </div>
                        )}
                    </div>
                </div>
                {searchClicked && (
                        <div>
                        <SearchItem />
                        </div>
                     
                )}
            </div>
        </nav>


//   <nav class="navbar navbar-expand-lg navbar-light bg-light HomePage" >
//   <div class="container-fluid header">
//     <a class="navbar-brand" href="#">
//         <div className="first-header"style={{marginRight:"10%"}} >
//             <NavLink className="logo" to="/HomePage">
//                 <img src="../images/logo-img.png" alt="logo" style={{ height: "80px", padding: "1rem" }} />
//             </NavLink>

//             <div className="Search">
//                 <AiOutlineSearch fontSize="2.3rem" style={{ height: "4rem" }} />
//                 <input placeholder="Search Facebook" type="Search" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} required/>
//             </div>
//         </div>
//     </a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" href="#navbarNav" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{marginTop:"-20px"}}>
//       <span class="navbar-toggler-icon" style={{marginTop:"10px"}}>
//        </span>
      
//     </button>
   
//     {/* <div class="collapse" id="collapseExample">
//   <div class="card card-body">
//     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
//   </div>
// </div> */}

//     <div class="collapse navbar-collapse" id="navbarNav">
//     <div className="middle-header" onClick={handleCloseModal}>
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">
//           <NavLink className="Icon navbar__link " to="/HomePage" style={{ borderBottom: activeItembutton === "1" ? "2px solid #007bff" : "none" }} onClick={()=>setActiveButton("1")}>
//              <AiFillHome fontSize="3rem" color="#1877f2" />
//             </NavLink>
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">
//           <NavLink className="Icon navbar__link" activeClassName="navbar__link--active" to="/Flage" style={{ borderBottom: activeItembutton === "2" ? "2px solid #007bff" : "none" }} onClick={()=>setActiveButton("2")}>   
//                             <FaRegFlag fontSize="2.5rem" color="black" />
//                         </NavLink>
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">
//           <NavLink className="Icon navbar__link" activeClassName="navbar__link--active" to="/MyVideo" style={{ borderBottom: activeItembutton === "3" ? "2px solid #007bff" : "none" }} onClick={()=>setActiveButton("3")}>
//                             <MdOndemandVideo fontSize="2.5rem" color="black" />
//           </NavLink>
//           </a>
//         </li>
//         <li className="nav-item">
//             <a className="nav-link" href="#">
//             <NavLink className="Icon navbar__link" activeClassName="navbar__link--active" to="/Myfriend" style={{ borderBottom: activeItembutton === "4" ? "2px solid #007bff" : "none" }} onClick={()=>setActiveButton("4")}>
//                             <FaUsers fontSize="2.5rem" color="black" />
//              </NavLink>
//             </a>
//         </li>

//         <li class="nav-item">
//           <a class="nav-link" href="#">
//           <NavLink className="Icon navbar__link" activeClassName="navbar__link--active" to="/MyMarket" style={{ borderBottom: activeItembutton === "5" ? "2px solid #007bff" : "none" }} onClick={()=>setActiveButton("5")}>
//                             <AiOutlineWallet fontSize="2.5rem" color="black" />
//            </NavLink>
//           </a>
//         </li>
//       </ul>
//       </div>
//     </div>
//     <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav " style={{marginLeft:"20%"}}>
//         <li className="nav-link">
//         <div className="third-header">
//                         <div className="plus">
//                            <Link to="/HomePage"> <FaPlusCircle fontSize="2rem" color="black" /></Link>
//                         </div>
//                         <div className="plus"  onClick={onmesg}>
//                             <FaFacebookMessenger fontSize="2rem" />
//                             <div className="hoFBBP goNsGa">20</div>
//                         </div>
//                         <div className="plus" onClick={onmesg}>
//                             <FaBell fontSize="2rem" />
//                             <div className="hoFBBP goNsGa">40</div>
//                         </div>
//                         <div className="pluss" onClick={openbtn}>
//                             <button id="but1">
//                                 <img className="imf" src="/images/images.jpg" alt="dp" style={{ height: "45px" }} />
//                             </button>
//                         </div>
//                         {isClicked && (
//                             <div id="myupc">
//                                 <UserProfile />
//                             </div>
//                         )}
//                     </div>
//         </li>
//     </ul>
//     </div>
//     {searchClicked && (
//         <div>
//         <SearchItem />
//         </div>
                     
//         )}
//   </div>
// </nav>
 

  
    );
}

export default HeaderArea;
