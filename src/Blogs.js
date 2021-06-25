import './blogs.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
const Blogs = ({blogs}) => { 
    return (  
        <div className="blogs">
            {blogs.map(blog=>(
            <div className="blog-link" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
             <div className="blog"> 
                    
                    <div className="contentSide">
                        <div className="title">
                            {blog.title}
                        </div>
                        <div className="article">
                        {blog.content}<p></p>
                        </div>
                        <div className="author">
                            {blog.author} 
                        </div>
                    </div>
                    <div className="thumbnail">
                    <img src={logo} alt="Blog Thumbnail" />
                    {/* just for trial */}
                    </div>
                    
              </div>
              </Link></div>
            ))}
            
        </div>
    );
}
 
export default Blogs
