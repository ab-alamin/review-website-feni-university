
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle ={
        fontWeight: "bold",
                color: "black",
                backgroundColor: "gray"

    }
    
    
    return (

        <div class="card text-center">
            <div class="card-header">
               <ul class="nav nav-tabs nav-fill card-header-tabs p-5">
                 <li class="nav-item">
                 <NavLink className="p-5"  activeStyle={activeStyle} to ="/home">Home</NavLink>
                 </li>
                <li class="nav-item">
                <NavLink className="p-5"  activeStyle={activeStyle} to="/about">About</NavLink>
                 </li>
                <li class="nav-item">
                <NavLink className="p-5"  activeStyle={activeStyle} to="/services">services</NavLink>
                 </li>
                <li class="nav-item">
                <NavLink className="p-5"  activeStyle={activeStyle} to="/students">students</NavLink>
                 </li>
                 </ul>
             </div>
     

    </div>
             

        
   
    
    );
    
        };

export default Header;

