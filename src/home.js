import Blogs from "./Blogs"
import './home.css'
import useFetch from "./useFetch"
const Home = () => {
    const url="http://localhost:8000/blogs"     //local json server url
    const {data:blogs,isLoading,error}=useFetch(url);

    return (
        <div className="home">
            
        <header className="AppName">
        My Blog
        </header>
        {blogs && <Blogs blogs={blogs} />}
        {error && <div>{error}</div>}
        {isLoading && <div>Loading Data....</div>}
      </div> 
     );
}
 
export default Home;