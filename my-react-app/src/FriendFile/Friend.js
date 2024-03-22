import React, { useEffect, useState } from "react";
import HeaderArea from "../HeaderArea/HeaderArea";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function MyFriend() {
    const [friends, setFriends] = useState([]);
   
    const fetchFriends = () => {
        try {
            fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=135')
                .then(response => response.json())
                .then(data => {
                    setFriends(data.photos);
                    console.log(data.photos);
                });
        } catch (error) {
            console.log("Friend not found", error);
        }
    }

    useEffect(() => {
        fetchFriends();
    }, []);

    function AddFriend(){
        toast.success("Friend Add SuccessFully");
      }

      function DeleteFriend(){
        toast.error("Friend delete SuccessFully");
      }

    return (
        <div>
            <ToastContainer/>
            <HeaderArea/>
            <h1>This is new friend</h1>
            <div className="card bg-dark p-5">
                <div className="col-sm-12 col-md-12 col-12 m-2" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <div className="card-container row " style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "2rem" }}>
                        {friends.map((friend, index) => (
                            <div key={index} className="card row" style={{ maxWidth: "300px", maxHeight: "380px", margin: "10px", backgroundColor: "#343a40" }}>
                                <div className="card-body text-white">
                                    {/* <div className=""> */}
                                        <img src={friend.url} alt="friend" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                    {/* </div> */}
                                    {/* <p>Id: {friend.id}</p> */}
                                    <p>Name: {friend.title}</p>
                                    <div className="d-flex flex-column gap-2 p-2 m-2 fw-bold"> 
                                    <button className="btn btn-primary p-3 m-2"  style={{ fontWeight: 'bold', fontSize: '1.4rem' }} onClick={AddFriend}>Add Friend</button>
                                    {/* <p>Content: {friend.description}</p> */}
                                    <button className="btn btn-secondary p-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }} onClick={DeleteFriend}>DELETE</button>
                                    </div>
                                    {/* <p>Thumbnail: {friend.thumbnail}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          
        </div>
    );
}

