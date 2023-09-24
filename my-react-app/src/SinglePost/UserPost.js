// import React, { useEffect, useState } from "react";
//import {useAppSelector} from 'hooks';
//import SinglePost from "./SinglePost";
//import UserProfile from "../UserProfile/UserProfile";


//  const userDetail = JSON.parse(localStorage.getItem("userDetails")|| "{}");

    // useEffect(()=>{
        
    //     fetch('https://academics.newtonschool.co/api/v1/facebook/post/',{

    //     headers:{
    //         Authorization: `Bearer ${userDetail.token}`,
    //         projectId: "f104bi07c490",

    //     },
    //      body:{
    //         title : 'postTitle',
    //         content : 'postContent',
    //         images : 'postImage',
    //      }
    //     })

        

        
    // })

     
    // const {posts} = useAppSelector((state)=>state.posts);

    // const sortedPosts = [...posts].sort((a,b)=>{
    //     return b.createdAt.getTime()-a.createdAt.getTime();
    // });

    // return(
    //     <div className="psotsSection">
    //         <div className="contentArea">
    //             <div style={{marginTop:'10px', maxHeight:'100%'}}>
    //                 {
    //                     sortedPosts.map((posts) =>(
    //                         <SinglePost  
    //                          user ={posts.createdAt}
    //                          posts ={posts}
    //                          key={posts.id}
                            
    //                         />

    //                     ))
    //                 }
    //             </div>
    //             <div className="endofSection">

    //             </div>
    //         </div>
    //     </div>
    // )

//     function UserPost(){
//         const[post, setPost] = useState([]);

//         useEffect(()=>{
//             fetch('https://academics.newtonschool.co/api/v1/facebook/post/',{
//                 mathod: "POST",
//                 headers:{
//                     Authorization: `Bearer ${userDetail.token}`,
//                    projectId: "f104bi07c490",

//                 },
//                  body : JSON.stringify({
//                     'title': 'postTitle',
//                     'content': 'postContent',
//                     'images': 'postImage', 
//                 })
//             }).then((resp)=>resp.json())

//             .then((data)=>setPost(data.data))
//         },[]);

//         return(
//             <div>
//                 helo rani.
//             </div>
//         )
        

// }

// export default UserPost;


// @ts-nocheck
import React, { useRef, useState } from "react";
import style from "./NewPost.module.css";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

function NewPost() {
  const userDetails = localStorage.getItem("userDetails");
  const [postHeading, setPostHeading] = useState("");
  const [fileInput, setFileInput] = useState([]);
  const chooseImageInputRef = useRef();
  const [newPostImage, setNewPostImage] = useState();
  // const [inputEmpty , setInputEmpty] = useState("");
  const uploadPost = async () => {
    var myHeaders = new Headers();
    const parseUserDetails = JSON.parse(userDetails);
    myHeaders.append("projectId", "9fc41adjs85k");
    myHeaders.append("Authorization", `Bearer ${parseUserDetails.token}`);

    var formdata = new FormData();
    formdata.append("title", postHeading);
    formdata.append("content", postHeading);
    formdata.append("images", fileInput[0], "abc-abc.jpg");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/facebook/post/",
      requestOptions
    );
    const result = await response.json();
    if (response.status >= 400) {
      console.log(result.message || "post not fetch");
      return;
    } else {
      setFileInput("");
      setPostHeading("");
      setNewPostImage("");
    }
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log(result)})
    // .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className={style.postSection}>
        <div className={style.postSection_Profile}>
          <span>
            <img
              src="https://scontent.fblr22-1.fna.fbcdn.net/v/t1.6435-9/193568038_618569472433760_6264659855323861090_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CkwNUOWYB1IAX9iEnSC&_nc_ht=scontent.fblr22-1.fna&oh=00_AfDwJmNFB_sQ_7CXWBP3rPO57zk5Mmlhf7izpmsCVZsf_A&oe=6524A4CC"
              alt="pofile"
            />
          </span>
          <textarea
            rows={postHeading?.split("\n").length || 1}
            className={style.postInput1}
            id="post"
            name="post"
            placeholder="What's on your mind Ashok? "
            value={postHeading}
            onChange={(e) => {
              setPostHeading(e.target.value);
            }}
          />
          <button
            className={style.PostButton}
            type="button"
            onClick={uploadPost}
          >
            Submit
          </button>
        </div>

        {newPostImage && (
          <>
            <div
              className={style.crossOnImg}
              onClick={() => {
                setFileInput([]);
                setNewPostImage("");
              }}
            >
              X
            </div>
            <img src={newPostImage} className={`${style.uploadImg}`} />
          </>
        )}
        <hr></hr>
        <div className={style.AddActivity}>
          <div className={style.AddActivity_button}>
            <button disabled>
              <VideocamOutlinedIcon style={{ color: "red" }} />
              <span>Live Video</span>
            </button>
          </div>
          <div
            className={`${style.AddActivity_button} ${
              !!fileInput?.length && style.AddActivity_button_disabled
            }`}
            onClick={() => {
              if (chooseImageInputRef.current && !fileInput?.length) {
                chooseImageInputRef.current.click();
              }
            }}
          >
            <button
            // disabled={!!fileInput?.length}
            >
              <PhotoLibraryOutlinedIcon style={{ color: "green" }} />
              <span>Photo/Video</span>
            </button>
          </div>
          <input
            type="file"
            ref={chooseImageInputRef}
            className={style.choose_file_input}
            onChange={(e) => {
              setFileInput(e.target.files ?? []);

              setNewPostImage(URL.createObjectURL(e.target.files[0]));
            }}
            accept="image/*"
          />

          <div className={style.AddActivity_button}>
            <button disabled>
              <SentimentSatisfiedOutlinedIcon style={{ color: "yellow" }} />
              <span>Feeling/Activity</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPost;