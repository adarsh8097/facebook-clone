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
import { Card, Button } from 'react-bootstrap'; 





const AllPost = () => {
    const [postDetail, setPostDetails] = useState([]);
    const[isLiked, setIsLiked] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
   

    const{ setPostUser,UpvotingCount,likes,createComment,editPost,isdeletePost , setDeltePost,deletePost,setOpen,} = useContext(MyContext);

   

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
    }, [likes,createComment,editPost,isdeletePost]);


    const handlePostClick = (post) => {
       setOpen(true);
      setSelectedPost(post);
  };

  const handleClose = () => {
      setSelectedPost(null);
  };

  // console.log("postDetailPeoduct",postUser);
   function handleAlert(){
     toast.error("Coming soon");
   }

   const handleLike = ()=>{
    // UpvotingCount(postId);
    setIsLiked(!isLiked);
   }

   
 return (
      <>
        <ToastContainer/>
        {/* <div className="container"> */}
        {postDetail && postDetail.map((post) => 
         
        <div key={post._id} className="card m-3">
        <div className="poster card-header" style={{width:"100%"}}>
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
            
            
            <div className="edit" style={{marginTop:"30px"}}>
                <MdMoreHoriz fontSize="2.5rem" cursor="pointer" onClick={()=>{
                  deletePost(post._id);
                  // setDeltePost(true);


                }}/>
            </div>
          
           
         </div>
        <div className="caption card-body" >
        <p>{post.content}</p>
        
        <br></br>
        <div className="" style={{ cursor: "pointer", width: "100%", height: "100%", maxWidth: "100%" }}>
        {post?.images ? (<div className="PostImg" style={{ cursor: "pointer", width: "100%", height: "100%", maxWidth: "100%" }} onClick={(e) => handlePostClick(post)}>
        <img src={post.images} alt="image"  style={{ width: "100%", height: "100%", maxWidth: "100%" }} />
        
        </div>):(
          <div>
             <p>Data Not Found</p>
            </div>

        ) }
        </div>
        </div>

        <div className="Comment card-footer">
            {/* <div className="Like" likeCount={post.likeCount}  liked={post.liked} onClick={(e)=>UpvotingCount(post._id)}>
             <FaRegThumbsUp color={post.liked ? 'blue' : 'grey'} fontSize="2rem" onClick={handleLike} /> 
               {isLiked ? `${post.likeCount-1}`: `${post.likeCount}`}
            </div> */}
            <div className="Like" likeCount={post.likeCount} liked={post.liked} onClick={()=>UpvotingCount(post._id)}>
                            <FaRegThumbsUp color={post.isLiked ? 'blue':'grey'} fontSize="2rem"/>
                            {post.isLiked ? `${post.likeCount}`: `${post.likeCount}`}
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
          
      {/* </div> */}
      </>

    );
  };

export default AllPost;