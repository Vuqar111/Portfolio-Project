import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Home from './Home';
import About from "./About";
import Contact from './Contact';
import {FaAngleUp} from 'react-icons/fa';
import './App.css';
import Works from "./Works";
import Blogs from "./Blogs";
const App = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {


    
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
        <div>
       <Navbar />
       <Home />
       <About />
       <Works />
       <Blogs />
       <Contact />

    </div>

    {showButton && (
          <FaAngleUp id="icon" onClick={scrollToTop} className="back-to-top" />

)}
    </div>

  );
};
export default App;


