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
                <div className="MyPage  w-25 col-sm-12 col-md-9 col-12 bg-light text-white height-auto" style={{zIndex:"0",marginTop:"2rem"}}>
                   <div className="Mypagedata position-fixed "> 
                   <MyPage />
                   </div>
                </div>

                <div className="col-sm-12 col-md-12 col-12 m-2" style={{ display: "flex", flexDirection: "column", overflow: "hidden", marginRight:"30%" }}>
                    <div className="card-container row" style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "10rem" }}>
                        {postPhoto && postPhoto.slice(0, 30).map((d, index) => (
                            <div key={index} className="card row" style={{ maxWidth: "300px", maxHeight: "300px", margin: "10px", backgroundColor: "#343a40" }}>
                                <div className="card-body text-white">
                                    <div className="">
                                        <img src={d.image} alt="flag-item" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                    </div>
                                    <p>Id: {d.id}</p>
                                    <p>Title: {d.title}</p>
                                    <p>Content: {d.content}</p>
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
