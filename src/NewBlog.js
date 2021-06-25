import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./newBlog.css"
import PermissionBox from "./permissionBox";
import handlePermission from "./handlePermission";
const NewBlog = () => {
    const [isLoading,setIsLoading]=useState(false);
    const [permissionBox,setPermissionBox]=useState(false);
    const history=useHistory();
    const handleSubmit=()=>{
        const pass=handlePermission();
        if(pass==="Bhuwan"){
            const form=document.querySelector('#new-blog');
            const blog={title:form.blogTitle.value,content:form.blogContent.value,author:form.blogAuthor.value};
            fetch("http://localhost:8000/blogs",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(blog)
            }).then(()=>{
                setIsLoading(false);
                history.push(`/`);

            });
            form.reset();
        }
    }
    return ( 
        <div className="newBlogPage">
            {permissionBox && <PermissionBox handlePermission={()=>handlePermission()} handleEvent={()=>{handleSubmit()}}/>}
            <h2>Add New Blog</h2>
            <form id="new-blog" onSubmit={e=>{
                e.preventDefault();
                setPermissionBox(true);
            }}>
                <label htmlFor="blogTitle">Title </label>
                <input type="text" id="blogTitle" required/>
                <p></p>
                <label htmlFor="blogAuthor" >Author</label>
                <input type="text" id="blogAuthor" required/>
                <p></p>
                <label htmlFor="blogContent">Content</label>
                <br />
                <textarea name="blogContent" id="blogContent" cols="30" rows="10" required></textarea>
                <p></p>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default NewBlog;