import React from "react";
// import {FaBars} from "react-icons/fa";
// import {ImCross} from "react-icons/im"
import { NavLink } from 'react-router-dom';

const Nav=()=>{
    
    return(
        <nav class="nav">
            <label class="logo">INVICTUS</label>
            <ul>
                <li><NavLink className="navitems" to="/">Home</NavLink></li>
                <li><NavLink className="navitems" to="/about">About Us</NavLink></li>
                <li><NavLink className="navitems" to="/service">Service</NavLink></li>
                <li><NavLink className="navitems" to="/event">Event</NavLink></li>
                <li><NavLink className="navitems" to="/contact">Contact</NavLink></li>
               <li><NavLink className="navitems" to="/reviews">Reviews</NavLink></li>
               <li><NavLink className="navitems" to="/login">Login</NavLink></li>
               
            </ul>
           
        </nav>
    )
}
export default Nav;
