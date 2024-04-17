import React, { useContext, useState } from "react";
import { MyContext } from "../Context/Context";
 
export default function MyPage(){
    const {projectID,userToken} = useContext(MyContext);
    console.log("ProjectId",projectID);
    console.log("ProjectToken",userToken);
    const[postTitle,setPostTitle] = useState('');
    const[postDescription , setPostDescription] = useState('');
    const[postImage ,setPostImageFile] = useState(null);


     const CreatePage= async(e)=>{
        e.preventDefault();
        try{
            console.log("adarsh")
            const formData = new FormData();
               formData.append("name",postTitle);
               formData.append("description",postDescription);
            //    formData.append("images",postImage);
            await fetch('https://academics.newtonschool.co/api/v1/facebook/channel/', {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'projectID': projectID,
                    
                },
                body: formData,
                    // 'images': 'postImage',
               
            })
            .then((response)=>response.json())

            .then((data)=>{
                console.log(data);

                if(data.status === "success"){
                    alert(data.message);
                }else{
                    alert(data.message)
                }
            
            });

            
        }catch(error){
            alert(error.message);
            console.log("Page not create",error);
        }

     }

     const handleFileInputChange = (e) => {

        const selectedFile = e.target.files[0];
        
        setPostImageFile(selectedFile);
        
        };

    
     return (
        <>
        
            <form className="container-fluid" onSubmit={CreatePage}>
                <div className="card w-100 p-3 m-1 mt-5 p-5" style={{height:"auto"}}>
                <div className="form-group mt-4 ">
                    <label htmlFor="exampleInputEmail1" className="p-3" style={{fontSize:"25px",fontWeight:"bold"}}>Create a Page</label>
                     <div>
                        <p>Your Page is where people go to learn more about you. Make sure that yours has all of the information they may need.</p>
                     </div>

                    <input 
                        type="text" 
                        className="form-control p-4" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Page name (required)" 
                        required 
                        onChange={(e) => setPostTitle(e.target.value)}
                        style={{fontSize:"15px"}}
                    />
                   
                </div>
                <div className="form-group ">
                    <label htmlFor="exampleInputPassword1"></label>
                    <small id="emailHelp" className="form-text text-muted">
                    Use the name of your business, brand or organisation, or a name that helps explain your Page.
                    </small>

                    <input 
                        type="text" 
                        className="form-control p-4" 
                        id="exampleInputPassword1" 
                        placeholder="Category Page"
                        required
                        onChange={(e) => setPostDescription(e.target.value)}
                        style={{fontSize:"15px"}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputFile"></label>
                    <small id="emailHelp" className="form-text text-muted">
                    Enter a category that best describes you.
                    </small>
                    <input
                        type="text" 
                        className="form-control-file p-5" 
                        id="exampleInputFile" 
                        placeholder="Bio "
                        required
                        style={{fontSize:"15px"}}
                    />
                </div>
                Tell people a little about what you do.
                <button type="submit" className="btn btn-primary p-4 m-5 "   style={{fontSize:"15px"}}>Submit</button>
                </div>
            </form>
        </>
    );
    
}