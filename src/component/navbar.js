import React from 'react';

const Navbar = ()=>{
    return<div className="navbar">
       <div className="navbar_text">
            <div className="heading">
                <h1>Indicorp</h1>
            </div>
            <ul className="navbar_ul">
                <li><a href="/">Home</a> </li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Product</a> </li>
                <li> <a href="/">Contact</a></li>
            </ul>
       </div>
    </div>
}



export default Navbar;