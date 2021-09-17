import React from 'react';
import Navbar from './navbar';

const Home = ()=>{
    return<div className="banner">
        <Navbar/>
        <div className="banner_content">
            <div className="container">
                <div className="banner_text"> 
                <h1><b>Empower <br/> Your Business</b></h1>
                <p>We Know how large object will add  
                 but thing on a small Scale</p>
                 <div className="banner_btn">
                     <a href="/" className="btn btn-one"> Get Quotes</a>
                     <a href="/" className="btn btn-two"> Learn More</a>
            </div>
                 </div>
            </div>
        </div>
      
    </div>
}



export default Home;