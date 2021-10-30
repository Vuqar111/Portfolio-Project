import React from "react";
import styled from "styled-components";
import model2 from "./img/model.jpeg";
const About = () => {
  return (
    <AboutContainer>
      <div className="aboutinfo">
        <img src={model2} alt="aboutimg" />
        <div className="abouthelp">
        <h1>A Lit About Me</h1>
          <h2>
            Need Creativ Design? <br /> I can help you!
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text,
          </p>
        </div>
      </div>
    </AboutContainer>
  );
};
export default About;

const AboutContainer = styled.div`
  background-color: rgb(40, 42, 55);
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 25px;

  h1 {
    font-size: 2rem;
    color: #1A9D7E;
  }
  .aboutinfo {
      width: 100%;
      align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 50px;
  }
  img {
    max-width: 400px;
    width: 100%;
    height: auto;
    background-size: cover;
    margin-left: 70px;
  }
  .aboutinfo h2 {
    color: white;
    font-size: 35px;
  }
   
   .abouthelp {
       width: 55%;
   }

   .abouthelp p {
       margin-top: 20px;
       color: rgb(103,105,120);
       font-size: 15px;
   }
   

   @media (max-width: 756px){

::-webkit-scrollbar {
    display: none;
    overflow: hidden;
}
img {
  display: none;
}
.aboutinfo {
 flex-direction: column;
 padding: 0px;
}

.abouthelp {
  width: 95%;
}
.aboutinfo h2 {
  font-size: 20px;
}
}
`;
