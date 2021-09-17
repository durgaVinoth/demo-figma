import React  from 'react';
import './App.css'
import Home from './component/home';
import Box from './component/box';
import Practice from './component/practice';
import Business from './component/bussiness';
import Contact from './component/contact';
import Footer from './component/footer';


function App() {
  return (
    <div>
      <Home/>
      <Box/>
    <Practice/>
    <Business/>
    <Contact/>
    <Footer/>
    </div>
    
  );
}

export default App;
