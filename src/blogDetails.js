import {useHistory, useParams } from "react-router-dom";
import FullBlogDOM from "./fullBlogStructure";
import useFetch from "./useFetch";
import PermissionBox from "./permissionBox";
import { useState } from "react";
import handlePermission from "./handlePermission";

const BlogDetails = () => {
    const [permissionBox,setPermissionBox]=useState(false);
    const history=useHistory();
    const handleDelete=(id)=>{
        const pass=handlePermission();
        if(pass==="Bhuwan"){
            fetch(url+id,{ 
                method:"DELETE"
            }).then(()=>{
                history.push('/');
            });
        }
    }
    const url="http://localhost:8000/blogs/"
    const {id}=useParams();
    const {data,isLoading,error}=useFetch(url+id);
    return ( 
        <div className="fullBlogPage">
            {isLoading && <div>Loading......</div>}
            {error && <div>{error}</div>}
            {permissionBox && <PermissionBox handlePermission={()=>{handlePermission()}} handleEvent={()=>{handleDelete(id)}}/>}
           {data && <FullBlogDOM blog={data} handleDelete={()=>{setPermissionBox(true)}} />}
           
        </div>
     );
}
 
export {BlogDetails as default}