import React, { useContext, useEffect, useState } from "react";
import { FaCommentAlt, FaRegShareSquare, FaRegThumbsUp } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import './SinglePost.css';
import moment from 'moment';
import AllPost from "../AllPost/AllPots";
import { MyContext } from "../Context/Context";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const SinglePost = ({ post, onClose }) => {
 const{UpvotingCount,CommentPost,comment,CreateComment,createComment,userDetail} = useContext(MyContext);
 const[likes , setlike ] = useState(false);
 const [content,setContent] = useState('');
 const[message , setMessage] = useState(post.commentCount);

   console.log("createcoment",createComment)
  useEffect(()=>{
    CommentPost(post._id);
   
  },[createComment]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') { // Check if content is not empty
        CreateComment(post._id, content);
        setMessage(message+1);
        setContent(''); // Clear the content after submission
    } else {
        // Handle error or provide feedback to the user that content is required
        console.error("Comment content is required.");
    }
};
  
function handleAlert(){
    toast.error("Coming soon");
  }
// console.log("Commentdata",comment);
// console.log("UserDetails",userDetail.name);
    return (
        <>
            {post &&
                <div className="fluid-container" style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                    zIndex: 50,
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex:100
                }}>
                    <div className="modal-content relative" style={{ padding: "20px", borderRadius: "5px", width: "80%", maxWidth: "900px" }}  onClick={(e) => e.stopPropagation()}>
                        <button className="btn btn-danger px-2 py-3" style={{ borderRadius:"50%" ,position: "absolute", top: 0, right: 0, width: "4rem" }} onClick={onClose}>X</button>
                        <div  className=" fluid-container row mt-5">
                            <div className="col-md-8">
                                <div className="d-flex align-items-center text-white">
                                    <div style={{ marginRight: "10px" }}>
                                        {post.author.profileImage ? <img src={post.author.profileImage} alt="profile" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /> : <CgProfile style={{ fontSize: "50px", borderRadius: "50%" }} />}
                                    </div>
                                    <div>
                                        <span>{post.author.name}</span>
                                        <p style={{fontSize:'12px',opacity:"0.5"}}>{moment(post.createdAt).format('MMMM Do YYYY')}</p>
           
                                        {/* Add additional user details here */}
                                    </div>
                                    <div className="" onClick={handleAlert}>
                                        <MdMoreHoriz fontSize="2.5rem" cursor="pointer" />

                                    </div>
                                </div>
                                <div className="ms-2 caption" style={{ color: "white", maxWidth: '550px', overflow: 'hidden', textOverflow: 'linear' }}>
                                <p className="" style={{ display: "inline-block", marginTop:'10px' }}>{post.content}</p>
                            </div>
                                <div className="PostImg" style={{height:"80%",width:"80%"}}>
                                    <img src={post.images} alt="image" height="100%" width="100%" />
                                </div>
                            </div>
                            <div className="col-md-4 mt-5" style={{height:"500px"}}>
                                {/* Add comments, likes, shares section here */}
                                <div className=" border border-white p-3 text-white">
                                <div className="Comment">
                                <div className="Like" likeCount={post.likeCount}  liked={post.liked} onClick={(e)=>{UpvotingCount(post._id);setlike(!likes)}} style={{color: likes ? "blue":""}}>
                               
                                <FaRegThumbsUp style={{color: likes ? "blue":"white"}} fontSize="2.5rem" className="me-1" /> {likes ? post.likeCount+1:post.likeCount}
                                </div> 
                                <div className="Like">
                                    <FaCommentAlt color="white" fontSize="2.5rem" className="me-1"/>
                                    {message}
                                </div>
                                <div className="Like" onClick={handleAlert}>
                                    <FaRegShareSquare color="white" fontSize="2.5rem" className="me-1"/> Share
                                </div>
                                 </div>
                             </div>
     <div className="relative fluid-container border text-white d-flex flex-column justify-content-between" style={{ height: "90%", overflowY: 'auto' }}>
   
    
    <div className="fluid-container">
    <h2 className="mt-3">Comments</h2>
        {comment.map((item, index) => (
            <div key={index}>
            <div className="d-flex">

                <div style={{ marginRight: "5px" }}>
                     <CgProfile style={{ fontSize: "22px", borderRadius: "100%" }} />
                 </div>
                <div className="card w-50 mb-3 bg-light border text-dark " key={index} >
            
                <div className="" style={{fontWeight:"bold"}}>{userDetail.name}</div>
                <div className="ms-5">{item.content}</div>
                
               </div>
             </div>
                     <div className="d-flex justify-content-around w-50 " style={{marginLeft:"20px"}}>
                                 <p style={{fontSize:'12px',opacity:"0.5" ,cursor:"pointer"}}>Like</p>
                               <p style={{fontSize:'12px',opacity:"0.5",cursor:"pointer"}}>reply</p>
                             <p style={{fontSize:'12px',opacity:"0.5"}}>
                           {moment(post.createdAt).format('Do')}
                          </p>
                                                {/* <p><FaEdit /></p>
                                                <p><MdDelete/></p> */}
                     </div>
             
                                           
                         </div>
                                    ))}
                                    </div>
                                    <form className="sticky-bottom mb-0 bg-primary"  style={{ marginBottom:"0" }} 
                                    onSubmit={handleCommentSubmit}>
                                        <div style={{ position: 'relative', width: '100%' }}>
                                            <textarea id="commentInput" className="form-control border bg-dark text-white fs-2" placeholder="Write a comment..." type="text" value={content} onChange={(e) => setContent(e.target.value)} />
                                            <button type="submit" className="btn btn-primary" style={{ position: 'absolute', right: '5px', bottom: '5px' }}>Send</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* <AllPost post={post}/> */}
        </>
    )

}

export default SinglePost;
