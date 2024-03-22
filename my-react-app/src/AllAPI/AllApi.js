import React, { useEffect, useState } from "react";
import HeaderArea from "../HeaderArea/HeaderArea";
import { FaStar } from "react-icons/fa6";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Mymarket(){
    const[market , setMarket] = useState([]);
     const MyMarketPlace =()=>{
        try{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setMarket(json);
                console.log(json)
            })

        }catch(error){
            console.log("error not found Market",error);
        }
     }

     useEffect(()=>{
        MyMarketPlace();
     },[]);

    // return(
    //     <>
    //     <h1>This is new Market placeholder</h1> 
    //     <div className="card">
    //             <div className="col-sm-12 col-md-12 col-3 m-2" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
    //                 <div className="card-container row " style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "5rem" }}>
    //                     {Array.isArray(market) && market.map((friend, index) => (
    //                         <div key={index} className="card row" style={{ maxWidth: "300px", maxHeight: "380px", margin: "10px", backgroundColor: "#343a40" }}>
    //                             <div className="card-body text-white">
    //                                 {/* <div className=""> */}
    //                                     <img src={friend.image} alt="friend" style={{ maxWidth: "100%", maxHeight: "100%" }} />
    //                                 {/* </div> */}
    //                                 {/* <p>Id: {friend.id}</p> */}
    //                                 <p>Name: {friend.title}</p>
    //                                 <p>Category:{friend.category}</p>
    //                                 <p>Price:{friend.price}</p>
    //                                 {/* <p>Rating:{friend.reating}</p> */}
    //                                 <div className="d-flex flex-column gap-2 p-2 m-2 fw-bold"> 
    //                                 <button className="btn btn-primary p-3 m-2"  style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>Buy Now</button>
    //                                 {/* <p>Content: {friend.description}</p> */}
    //                                 {/* <button className="btn btn-secondary p-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>DELET</button> */}
    //                                 </div>
    //                                 {/* <p>Thumbnail: {friend.thumbnail}</p> */}
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )

    function onalert(){
      toast.error("comming soon");
    }

    return (
        <>
         <ToastContainer/>
           <HeaderArea/>
            <div className="card bg-black p-5">
                <div className="col-sm-12 col-md-12 col-12 m-2" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <div className="card-container row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "5rem" }}>
                        {Array.isArray(market) && market.map((item, index) => (
                            <div key={index} className="card" style={{ width: "300px", margin: "10px", backgroundColor: "#343a40" }}>
                                <div className="card-body text-white">
                                    <div className="image-container" style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                                        <img src={item.image} alt="item" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                    </div>
                                    <p>Name: {item.title}</p>
                                    <p>Category: {item.category}</p>
                                    <p>Price: {item.price} &#8377;</p>
                                    <p>Rating:<FaStar  style={{color:"yellow",fontSize:"2rem"}}/> {item.rating.rate} ({item.rating.count} reviews)</p>
                                    </div>
                                    <div className="d-flex flex-column gap-2 p-2 m-2 fw-bold">
                                        <button className="btn btn-primary p-3 m-2" style={{ fontWeight: 'bold', fontSize: '1.4rem' }} onClick={onalert}>Buy Now</button>
                                    </div>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MyNextShop/>
        </>
    )

}

export function MyNextShop(){
    const[nextShop, setNextShop] = useState([]);

      function MyNewShop(){
        try{
            fetch('https://dummyjson.com/products?limit=150')
            .then(res => res.json())
            .then(json => {
                 setNextShop(json.products);
                console.log("newShop",json);
            })
        }catch(error){
            console.log("Product not Found",error);
        }
      }

      useEffect(()=>{
        MyNewShop();
      },[]);

      function onalert(){
       alert("comming soon");
    }


    return(
       <>
       {/* <ToastContainer/> */}
      <div className="card bg-black p-5">
                <div className="col-sm-12 col-md-12 col-12 m-2" style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <div className="card-container row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "5rem" }}>
                        {Array.isArray(nextShop) && nextShop.map((item, index) => (
                            <div key={index} className="card" style={{ width: "300px", margin: "10px", backgroundColor: "#343a40" }}>
                                <div className="card-body text-white">
                                    <div className="image-container" style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                                        <img src={item.thumbnail} alt="item" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                    </div>
                                    <p>Name: {item.brand}</p>
                                    <p>Category: {item.category}</p>
                                    <p>Price: {item.price} &#8377;</p>
                                    <p>Rating:<FaStar  style={{color:"yellow",fontSize:"2rem"}}/> {item.rating} (reviews)</p>
                                    <p>Stock:{item.stock} items</p>
                                    </div>
                                    <div className="d-flex flex-column gap-2 p-2 m-2 fw-bold">
                                        <button className="btn btn-primary p-3 m-2" style={{ fontWeight: 'bold', fontSize: '1.4rem' }} onClick={onalert}>Buy Now</button>
                                    </div>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
       </>
    )
}