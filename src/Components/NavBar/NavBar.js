import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    return (
        <div>
          <div>
         <li>
            <Link to="/">Home</Link>
         </li>

         <li>
            <Link to="/">Tv Shows</Link>
         </li>

         <li>
            <Link to="/">Movies</Link>
         </li>

         <li>
            <Link to="/">New & Popular</Link>
         </li>

         <li>
            <Link to="/">MyList</Link>
         </li>

         <li>
            <Link to="/">Browse by Languages</Link>
         </li>

         </div>

         <div>
           <button>Search</button>
         <li>
            <Link to="/">Children</Link>
         </li>

         <button>Notify</button>

         <button>Profile</button>

         </div>

        </div>
    )
}

export default NavBar;