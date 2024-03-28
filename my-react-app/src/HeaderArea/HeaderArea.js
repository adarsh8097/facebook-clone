import React, { useContext, useState } from "react";
import "./HeaderArea.css";
import { AiFillHome, AiOutlineSearch, AiOutlineWallet } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { FaBell, FaFacebookMessenger, FaPlusCircle, FaRegFlag, FaUsers } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import { MyContext } from "../Context/Context";
import SearchItem from "./SearchItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HeaderArea() {
    const [isClicked, setIsClicked] = useState(false);
    const { searchItem, setSearchItem, searchClicked,activeItembutton,setActiveButton } = useContext(MyContext);

    const openbtn = () => {
        setIsClicked(!isClicked);
    };

    function onmesg() {
        toast.error("Network issue can't uploaded your data please try after sometime ");
    }

    return (
        <nav>
            <div className="HomePage">
                <div className="header">
                    <div className="first-header">
                        <NavLink className="logo" to="/HomePage">
                            <img src="../images/logo-img.png" alt="logo" style={{ height: "80px", padding: "1rem" }} />
                        </NavLink>

                        <div className="Search">
                            <AiOutlineSearch fontSize="2.3rem" style={{ height: "4rem" }} />
                            <input placeholder="Search Facebook" type="Search" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
                        </div>
                    </div>
                    <div className="middle-header">
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
                           <Link to="/HomePage"> <FaPlusCircle fontSize="2rem" color="black" /></Link>
                        </div>
                        <div className="plus">
                            <FaFacebookMessenger fontSize="2rem" onClick={onmesg} />
                            <div className="hoFBBP goNsGa">20</div>
                        </div>
                        <div className="plus">
                            <FaBell fontSize="2rem" onClick={onmesg} />
                            <div className="hoFBBP goNsGa">40</div>
                        </div>
                        <div className="pluss">
                            <button id="but1" onClick={openbtn}>
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
                {searchClicked && <SearchItem />}
            </div>
        </nav>
    );
}

export default HeaderArea;
