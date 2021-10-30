import React, { useState } from "react";
import { navs } from "./data";
import styled from "styled-components";
import  {Link} from "react-router-dom";
const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    
  return (
    <NavContainer>
      <div className="navcontainer">
        
          <h2>
            Vugar <span>Hasanov</span>
          </h2>
          <div  onClick={()=> setNavbar(!navbar)} className="hamburgerspan">
         <div></div>
        <div></div>
        <div></div>
         </div>
        <div className={`${navbar ? 'navli navactive' : 'navli'}`}>
         {navs.map((nav) => {
             const {id, url, title} = nav;
             return (
              <ul>
                  <li key={id}>
                      <a href={url}>{title}</a>
                  </li>
              </ul>
             )
         })}
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
 background-color: rgb(50,54,71);
a {
    text-decoration: none;
    
}

li {
    list-style: none;
    padding: 18px;
}
.navcontainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: auto;
    
}
h2 {
    margin-left: 0px;
    color: white;
}
h2 span {
color: #1A9D7E;
}
.navli {
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-left: 20px;
}

.navbar div {
 width: 15px;
 height: 3px;
 background-color: white;
 padding-top: 5px;
}
.navli a {
    color: white;
}
.navli a:hover {
    color: #1A9D7E;
}
.navli ul::last-child {
    background-color: red; 
    padding: 10px;
}
.hamburgerspan {
    width: 35px;
    height: 30px;
    display: none;
}
.hamburgerspan div {
    width: 35px;
    height: 3px;
    background-color: #1A9D7E;
    color: white;
    margin-top: 7px;
}
@media (max-width: 756px){  
::-webkit-scrollbar {
    display: none;
    overflow: hidden;
}
.navli {
    width: 25%;
}
.navli  {
    display: none;
}
.navactive {
display: block;
}
.navactive ul {
    margin-top: 20px;
    background-color: red;
}

h2 {
    margin-left: 10px;
}
.hamburgerspan {
    display: block;
    cursor: pointer;
}
}



`;
