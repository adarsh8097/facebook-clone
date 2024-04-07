import React, { useContext } from "react";
import { MyContext } from "../Context/Context";
import { Link } from "react-router-dom";
// import HeaderArea from "./HeaderArea";

 export default function SearchItem(){
    const{SearchPost ,searchItemResult,searchClicked,setSearchClicked} = useContext(MyContext);
   
   
    const handleCloseModal = () => {
        setSearchClicked(false);
      };
  

    return(
        <>
        {/* <HeaderArea/> */}
        <div className="card card-container" style={{width:"300px",marginLeft:"12rem",justifyContent:"center",textAlign:"center",zIndex:"100",marginTop:"50px",transform:"translate X(0%)",position:"fixed"}}  onClick={handleCloseModal}>
        {searchClicked && searchItemResult.length > 0 ? (searchItemResult.map((result, index) => (
            <div className="cards" key={index} style={{width:"200px",height:"auto"}}>
                <div className="card-content" onClick={handleCloseModal}>
                   <Link to={`/AllPost/${result.author._id}`}>
                    <p>{result.content}</p>
                    <p>Author: {result.author.name}</p>
                    </Link>
                   
                </div>
            </div>
        ))):(searchClicked &&
          <div>
            <p>Data Not found</p>
            
            </div>
        )}
        </div>

        </>
    )
 }