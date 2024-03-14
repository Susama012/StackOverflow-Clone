import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import search from '../../assets/magnifying-glass-solid.svg';
import Avatar from '../../component/Avatar/Avatar';
import './Navbar.css'

const Navbar = () => {
    var User = 123
    return(
        <nav className="main-nav">
            <div className="navbar">
               <Link to='/' className="nav-item nav-btn">
               <img src={logo} alt="logo" />
               </Link>
               <Link to='/' className="nav-item nav-btn">About</Link>
               <Link to='/' className="nav-item nav-btn">Products</Link>
               <Link to='/' className="nav-item nav-btn">For Teams</Link>
               <form>
                 <input type="text" placeholder="Search..."/>
                 <img src={search} alt="search" width="18" className="search-icon"/>
               </form>

               {User === null ?
                  <Link to='/Auth' className="nav-item nav-links">Log in</Link> : 
                  <>
                    { <Avatar bagroundColor ="#009dff" px="10px" py="7px" borderRadius="50%" > <Link to='/User' style={{color:'red', textDecoration:'none'}}>S</Link> </Avatar>  }  
                    <button className='nav-item nav-links'>Log Out</button>
                  </>
               }
            </div>
        </nav>
    )
}
export default Navbar