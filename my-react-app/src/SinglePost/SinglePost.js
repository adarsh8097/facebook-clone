import React, { useState } from "react";
import { FaCommentAlt, FaRegShareSquare, FaRegThumbsUp } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import './SinglePost.css';
//import { useNavigate } from "react-router-dom";
const userDetail = JSON.parse(localStorage.getItem("userDetails")|| "{}");

//const navigate = useNavigate();
const  SinglePost =({item})=>{

     const[count,setCount] = useState(0);

    const handleLikeClick = (itemId) => {
      
          if (item.id === itemId) {
            // Toggle the liked state
            const newLikeCount = item.liked
              ? item.likeCount - 1
              : item.likeCount + 1;
            return { ...item, likeCount: newLikeCount, liked: !item.liked };
          }
          return item;
       
    }
    const handleLoginModal = ()=>{
        if(userDetail){
         setCount(count+1);
        }// }else{
        //  navigate('/login');
        // }
     }

    

    
    return(

        
     <div className="Posted">
        <div className="poster">
            <div className="Simplilearn">
                
                    <img src={item.author.profileImage} alt="profile"></img>
                    
                    
                    <span>{item.author.name}</span>
                
            </div>
            <div className="Simple-para">
           
            </div>
            
            <div className="edit">
                <MdMoreHoriz fontSize="2.5rem" cursor="pointer"/>
            </div>
         </div>
        <div className="caption">
        <p>{item.content}</p>
        </div>
        <br></br>
        <div className="PostImg">
        <img src={item.channel.image} alt="image" />
        
        </div>

        <div className="Comment">
            <div className="Like" likeCount={item.likeCount} onClick={()=>handleLoginModal} liked={item.liked}>
             <FaRegThumbsUp color="grey" fontSize="1.5rem"/> {item.likeCount}
            </div>
            <div className="Like">
                <FaCommentAlt color="grey"/>
                 {item.commentCount}
            </div>
            <div className="Like">
                <FaRegShareSquare color="grey" /> Share
            </div>
        </div>

    </div>

    )

}

export default SinglePost ;