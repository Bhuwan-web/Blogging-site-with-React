import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                {/* <img src="./logo.svg" alt="logo" /> */}
               <div><Link to="/">Logo</Link></div>
            </div>
            <div className="menu">
                <ul>  
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/newBlog">Add Blog</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;