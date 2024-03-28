import React, { useContext, useEffect, useState } from "react";
//import { getHeaderWithProjectId } from "../Svg/Configer";
import SinglePost from '../SinglePost/SinglePost';
import { FaCommentAlt, FaRegShareSquare, FaRegThumbsUp } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import './AllPost.css';
import moment from 'moment';
import { CgProfile } from "react-icons/cg";
// import {UpvotingCount} from '../AllAPI/AllApi';
import { MyContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const AllPost = () => {
    const [postDetail, setPostDetails] = useState([]);
    // const[ispost, setIsPost] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const{ setPostUser,UpvotingCount,likes,createComment,editPost} = useContext(MyContext);


   console.log("likesCount",likes);
    useEffect(() => {
      fetch(
        "https://academics.newtonschool.co/api/v1/facebook/post/?limit=100",
        {
          method: "GET",
          headers: {
            projectId: "f104bi07c490",
          },
        }
      )
        .then((resp) => resp.json())
        .then((data) => {
         
          setPostUser(data.data);
          console.log(data);
          setPostDetails(data.data)
         
        });
    }, [likes,createComment,editPost]);

    const handlePostClick = (post) => {
      setSelectedPost(post);
  };

  const handleClose = () => {
      setSelectedPost(null);
  };

  // console.log("postDetailPeoduct",postUser);
   function handleAlert(){
     toast.error("Comming soon");
   }
    return (
      <div>
        <ToastContainer/>
        {postDetail && postDetail.map((post) => 
        <div key={post._id} className="Posted">
        <div className="poster">
            <div className="Simplilearn">
                
                                <div style={{ marginRight: "10px" }}>
                                  <Link to={`/AllPost/${post.author._id}`}>
                                        {post.author.profileImage ? <img src={post.author.profileImage} alt="profile" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /> : <CgProfile style={{ fontSize: "50px", borderRadius: "50%" }} />}
                                        </Link>
                                    </div>
                    <span style={{marginTop:'3px'}}>{post.author.name}
                    <p style={{fontSize:'12px',opacity:"0.5"}}>{moment(post.createdAt).format('MMMM Do YYYY')}</p>
           
                    </span>

             </div>
            <div className="Simple-para">
           
                  
            </div>
            
            
            <div className="edit">
                <MdMoreHoriz fontSize="2.5rem" cursor="pointer" onClick={handleAlert}/>
            </div>
         </div>
        <div className="caption" >
        <p>{post.content}</p>
        </div>
        <br></br>
        {post?.images ? (<div className="PostImg" style={{cursor:"pointer"}} onClick={(e) => handlePostClick(post)}>
        <img src={post.images} alt="image" />
        
        </div>):(
          <div>
             <p>Data Not Found</p>
            </div>
        ) }
        

        <div className="Comment">
            <div className="Like" likeCount={post.likeCount}  liked={post.liked} onClick={(e)=>UpvotingCount(post._id)}>
             <FaRegThumbsUp color="grey" fontSize="2rem"/> {post.likeCount}
            </div>
            <div className="Like" onClick={(e) => handlePostClick(post)}>
                <FaCommentAlt color="grey"fontSize="2rem" />
                 {post.commentCount}
            </div>
            <div className="Like" onClick={handleAlert} >
                <FaRegShareSquare color="grey" fontSize="2rem"/> Share
            </div>
            
        </div>

    </div>
        )}
        {selectedPost && (
                <SinglePost post={selectedPost} onClose={handleClose} />
            )}
          
      </div>
    );
  };

export default AllPost;