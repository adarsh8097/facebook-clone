import React, { useEffect, useState } from "react";
//import { getHeaderWithProjectId } from "../Svg/Configer";
import SinglePost from '../SinglePost/SinglePost';


const AllPost = () => {
    const [postDetail, setPostDetails] = useState([]);
  
    useEffect(() => {
      fetch(
        "https://academics.newtonschool.co/api/v1/facebook/post/?limit=1000",
        {
          method: "GET",
          headers: {
            projectId: "f104bi07c490",
          },
        }
      )
        .then((resp) => resp.json())
        .then((data) => setPostDetails(data.data));
    }, []);
    return (
      <div>
        {postDetail && postDetail.map((post) => <SinglePost item ={post} />)}
      </div>
    );
  };

export default AllPost;