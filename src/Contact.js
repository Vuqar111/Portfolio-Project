import React from 'react'
import styled from 'styled-components'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Contact = () => {
    return (
        <ContactContainer>
            <div className="contact" data-aos="zoom-in">

              <h2>Got and idea? Tell me and let's work <br/>together <span>make it happened</span></h2>
            <div className="inputbtn">
            <input type="text"  placeholder="your email here"/>
            <button type="button">Contact Me</button>
            </div>
           

            </div>
        </ContactContainer>
    )
}

export default Contact


const ContactContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: rgb(50,54,71);
padding-bottom: 20px;
.contact {
    background-color: rgb(40,42,55);
    padding: 40px;
}
h2 {
    text-align: center;
    color: white;
    font-size: 35px;
}
h2 span {
    color: rgb(23,156,121);
}

.inputbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}

input {
    max-width: 300px;
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    background: rgb(50,54,71);
}
button {
 max-width: 100px;
 width: 100%;
 padding: 10px;
 padding-left: 15px;
 padding-right: 15px;
 cursor: pointer;
 border: none;
 outline: none;
 background: rgb(1,204,142);
 color: white;
}


@media (max-width: 756px){  
::-webkit-scrollbar {
    display: none;
    overflow: hidden;
}
.contact {
    padding: 10px;
}

.inputbtn {
    margin-top: 25px;
    padding-bottom: 30px;
}
h2 {
    font-size: 20px;
}

button {
    max-width: 80px;
    padding: 10px;
    padding-left: 0px;
    padding-right: 0px;
    
}

}

`