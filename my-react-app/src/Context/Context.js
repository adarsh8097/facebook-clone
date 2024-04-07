import React,{useState,createContext,useContext, useEffect} from "react";

 export const MyContext = createContext();
//  export const userDetail = JSON.parse(localStorage.getItem("userdetails")|| "{}");
//  export const userToken = JSON.parse(sessionStorage.getItem("userTokens")|| "{}");
//  console.log(userDetail);
export let projectID = "f104bi07c490";

export const MyContextProvider =({children})=>{
    const[postuser , setPostUser] = useState([]);
    const [userDetail,setUserDetail] = useState({})
    const [userToken,setUserToken] = useState('');
    const[likes , setLikes] = useState(0);
    const[comment , setComment] = useState([]);
    const[createComment , setCreateComment] = useState([]);
    const[updateCommnetpost , SetUpdateCommnetPost] = useState([]);
    const[createPost , setCreatePost] = useState([]);
    const[searchItemResult , setSearchItemResult] = useState([]);
    const[searchClicked, setSearchClicked] = useState(false);
    const[searchItem , setSearchItem] = useState('');
    const[editPost , setEditPost] = useState(false); 
    const[activeItembutton , setActiveButton] = useState("1");
    useEffect(() => {
        // Initialize user detail and token from local storage only once when component mounts
        const storedUserDetail = JSON.parse(localStorage.getItem("userdetails")) || {};
        const storedUserToken = JSON.parse(sessionStorage.getItem("userTokens")) || '';
        console.log("DataUserdetailFound",storedUserDetail);
        console.log("UserDetaikesToken",storedUserToken);
        setUserDetail(storedUserDetail);
        setUserToken(storedUserToken);
    }, []);
    function UpvotingCount(id){
        console.log("Id", id);
        try{
            fetch(`https://academics.newtonschool.co/api/v1/facebook/like/${id}`,{
                method:'POST',
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'projectID': `${projectID}`,
    
                },
                body:{"isLiked":true}
            })
           
            .then((response)=> response.json())
            .then((data)=> {
               setLikes(data);
               
                console.log(data);
            });
        }catch(error){
            console.log(error.message);
        }
     }

     const CommentPost =(postId)=>{
   
        try{
    
        fetch(`https://academics.newtonschool.co/api/v1/facebook/post/${postId}/comments`,{
                method:'GET',
        headers: {
            'Authorization': `Bearer ${userToken}`,
            'projectID': projectID,
        }
        })
        .then((response)=>response.json())
        .then((data)=>{
            setComment(data.data);
            console.log(data)});
    
        }catch(error){
            console.log(error.message);
        }
    
       }
       
    //    const CreateComment =async(postId,content)=>{
    //      console.log("PostId",postId);
    //      console.log("Content",content);
    //     try{
    //         await fetch(`https://academics.newtonschool.co/api/v1/facebook/comment/${postId}`, {
    //             method:'POST',
    //                 headers: {
    //                     'Authorization': `Bearer ${userDetail.token}`,
    //                     'projectID': projectID,
    //                 }, 
    //                 body: {
    //                     'content': content,
    //                 }
    //             })
    //             .then((response)=>response.json())
    //             .then((data)=> {
    //                 setCreateComment(data.data);
    //                 console.log(data)
    //             });
    //     }catch(error){
    //         console.log('Not created',error);
    //     }
    //    }

    const CreateComment = async (postId, content) => {
        console.log("PostId", postId);
        console.log("Content", content);
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/comment/${postId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'projectID': projectID,
                    'Content-Type': 'application/json', // Specify content type as JSON
                },
                body: JSON.stringify({ // Convert data to JSON string
                    'content': content,
                })
            });
            const data = await response.json();
            setCreateComment(data);
            console.log(data);
        } catch (error) {
            console.log('Not created', error);
        }
    }
    
    const UpdateComment =(postId,content)=>{
        try{
            fetch(`https://academics.newtonschool.co/api/v1/facebook/comment/${postId}`, {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                    'projectID': projectID,
                    'Content-Type': 'application/json', 
                    }, 
                    body: JSON.stringify({
                        'content': content,
                    })
                })
                .then((response)=>response.json())
                .then((data)=>{
                     SetUpdateCommnetPost(data,data);
                    console.log(data)
                });

        }catch(error){
            console.log("Data not Update..", error);
        }
    }

    const CreatingPost = async(formData)=>{
      
      console.log("FormData",formData);
        try{
           await fetch('https://academics.newtonschool.co/api/v1/facebook/post/',{  
                method:'POST',  
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'projectID': projectID,
                    'Content-Type': 'application/json',
                    },
                    body:formData,
                })
                .then((response)=>response.json())
                .then((data)=>{
                    setCreatePost(data.data);
                    console.log(data);
                })
        }catch(error){
          console.log("Your post not Created.",error);
        }
    }

    useEffect(() => {
        if (searchItem.trim() !== '') {
            SearchPost(searchItem);
            
        } else {
            setSearchItemResult([]);
             // Clear search results if search box is empty
            setSearchClicked(false); // Set searchClicked to false when search box is empty
        }
    }, [searchItem]);

    const SearchPost =(author)=>{
      
        try{
            fetch(`https://academics.newtonschool.co/api/v1/facebook/post?search={"content":"${author}"}`,{
                 method:"GET",
                headers: {
                    'projectID': projectID,

                }
            })
            .then((response)=>response.json())
            .then((data)=>{
               
                 setSearchItemResult(data.data);
                 console.log("SearchData",data.data);
                 setSearchClicked(true);
               
                
            });

        }catch(error){
            console.log("Not Match Item Post",error);
        }

    

    }


    return(
        <MyContext.Provider value={{postuser,setPostUser,likes,setLikes,comment,setComment,UpvotingCount,CommentPost,
        CreateComment,createComment,UpdateComment,CreatingPost,createPost,projectID,userDetail,
        userToken,SearchPost,searchItemResult,searchClicked, setSearchItem,searchItem,setEditPost,editPost,activeItembutton,setActiveButton,setUserDetail,setUserToken,setSearchClicked}}>
            {children}
        </MyContext.Provider>
    );
}

 