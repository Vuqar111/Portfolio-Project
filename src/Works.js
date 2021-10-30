import React from "react";
import styled from "styled-components";
import {FaAngleRight} from 'react-icons/fa';
import { works } from "./data";
import img from './img/op.png';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Works = () => {
  return (
    <WorkContainer>
      <div className="workslogan">
        <h3>
          Check out <br /> My Recent Works
        </h3>
        <p>
          Here is my recent works, every project will be <br />
          deployed you with the study
        </p>
      </div>
      <main className="projects">
        {works.map((work) => {
          const { id, url, title} = work;
          return <article key={id}>
             <div className="project" data-aos="flip-left">
             <img src={img} className="workimg" alt="workimg" />
             <div className="workinfo">
             <h2>{title}</h2>
                <a href={url}><FaAngleRight /></a> 
 
             </div>
              </div>
          </article>
          ;
        })}
      </main>
    </WorkContainer>
  );
};

export default Works;

const WorkContainer = styled.div`
  background-color: rgb(40,42,55);
  height: auto;
  display: flex;
  flex-direction: column;

  .workslogan {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  h3 {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
  p {
    color: rgb(103,105,120);
    padding-top: 15px;
  }
img {
  width: 100%;
  height: auto;
}
  .projects {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    
  }
  .project {
    width: 300px;
    height: 230px;
    background: rgb(50,54,71);
    margin: 20px;
  }

  .workinfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  .workinfo h2 {
    color: white;
  }


  .workinfo a {
    padding: 8px;
    padding-left: 25px;
    padding-right: 25px;
    color: white;
    background: rgb(1,204,142);
    font-size: 20px;
  }

  @media (max-width: 756px){

   
::-webkit-scrollbar {
    display: none;
    overflow: hidden;
}
 

}
`;
