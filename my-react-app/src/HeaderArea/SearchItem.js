import React, { useContext } from "react";
import { MyContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
// import HeaderArea from "./HeaderArea";

 export default function SearchItem(){
    const{SearchPost ,searchItemResult,searchClicked,setSearchClicked} = useContext(MyContext);
   
   
    const handleCloseModal = () => {
        setSearchClicked(false);
      };
  

    return(
        <>
        {/* <HeaderArea/> */}
        <div className="card card-container" style={{ width: "300px", marginLeft: "12rem", justifyContent: "center", textAlign: "center", zIndex: "100", marginTop: "50px", transform: "translateX(0%)", position: "fixed", maxHeight: "400px", overflowY: "auto" }} onClick={handleCloseModal}>
    {searchClicked && searchItemResult.length > 0 ? (
        <div>
            {searchItemResult.map((result, index) => (
                <div className="cards" key={index} style={{ width: "100%", display: "flex", alignItems: "flex-start" }}>
                    <div className="card-content" onClick={handleCloseModal}>
                        <Link to={`/AllPost/${result.author._id}`}>
                            <p style={{ color: 'black', justifyContent: 'start' }}><CgProfile /> {result.author.name}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    ) : (searchClicked &&
        <div>
            <p>Data Not found</p>
        </div>
    )}
</div>


        </>
    )
 }