import React, { useContext, useEffect, useState } from "react";
import HeaderArea from "../HeaderArea/HeaderArea";
import MainArea from "../MainArea/MainArea";
import { MyContext } from "../Context/Context";
import { FaTwitter } from "react-icons/fa";
import MyPage from "../CreatingPage/CreatingPage";
import './Flage.css';


const FlagePost = () => {
    const { projectID } = useContext(MyContext);
    const [postPhoto, setPostPhoto] = useState(null);

    const handleFlage = () => {
        try {
            fetch('https://jsonplaceholder.org/posts')
                .then(response => response.json())
                .then(json => {
                    if (Array.isArray(json)) {
                        setPostPhoto(json);
                        console.log(json);
                    } else {
                        setPostPhoto([json]); // Wrap non-array response in an array
                    }
                });

        } catch (error) {
            console.log("Data not found", error);
        }
    };

    useEffect(() => {
        handleFlage();
    }, []);

    return (
        <>
            <HeaderArea />
            <div className="flage">
                {/* MyPage component fixed to the left side */}
                <div className="MyPage w-100 col-sm-12 col-md-12 col-12 bg-light text-white height-auto" style={{zIndex:"0",marginTop:"2rem"}}>
    <div className="Mypagedata"> 
        <MyPage style={{width:"100%"}}/>
    </div>
</div>


                <div className="col-sm-12 col-md-12 col-12  bg-dark" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <div className="card-container row" style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10rem" }}>
                        {Array.isArray(postPhoto) && postPhoto.map((d, index) => (
                            <div key={index} className="card row bg-white " style={{ maxWidth: "300px", maxHeight: "auto", margin: "10px", backgroundColor: "#343a40",border:"2px solid skyblue",radius:"1rem" }}>
                                <div className="card-body text-dark p-2">
                                    <div className="">
                                        <img src={d.image} alt="flag-item" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                    </div>
                                    <p className="p-2 fw-bold fs-4" style={{color:"grey",fontFamily:"sans-serif",textTransform:"uppercase",fontSize:'0.8rem'}}>Author:{d.slug}</p>
                                    <hr></hr>
                                    <p style={{color:"grey",opacity:"0.8",fontSize:"1.2rem"}}>Status:{d.status}</p>
                                    <p style={{color:"grey",opacity:"0.8",fontSize:"1.2rem"}}>PblishDate:{d.publishedAt}</p>
                                    <hr></hr>
                                    <p style={{fontWeight:"bold",color:"gray"}}>Id: {d.id}</p>
                                    <p style={{color:"gray",fontFamily:"sans-serif"}}>Title: {d.title}</p>
                                    
                                    {/* <hr></hr> */}
                                    {/* <p>Content: {d.content}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FlagePost;
