import './blogDetails.css';
const FullBlogDOM = ({blog,handleDelete}) => {
    return ( 
        <article className="full-blog">
            <header className="blog-title">
                <h3>
                    {blog.title}
                </h3>
            </header>
            <div className="author">
                {blog.author}
            </div>
            <div className="content">
                {blog.content}
            </div>
            <button className="delete" onClick={handleDelete}>
               Delete
           </button>
        </article>
     );
}
 
export default FullBlogDOM;