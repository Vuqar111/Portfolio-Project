import React from "react";
import styled from "styled-components";
import homeimg from "./img/model2.jpg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import fileSaver from 'file-saver';
const Home = () => {
  
  const saveFile = () => {
    fileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "../resources/cv.pdf",
      "cv.pdf"
    )
    }
  return (
    <HomeContainer>
      <div className="homediv">
        <div className="homeinfo">
          <h3>
            Digital Product Designer, <br />
            Turning your idea into <br />
            cool product
          </h3>

          <p>
            I am Vugar, experienced Digital Product Designer based on Florida, <br/> I
            am have to help you build your amazing product
          </p>
         <div className="homfoot">
           <div>
           <button type="button" onClick={saveFile}>Download my cv</button>
           </div>
     

<div className="icons">
<i class="fab fa-github" />
<i class="fab fa-linkedin" />
<i class="fab fa-facebook" />
<i class="fab fa-instagram" />
</div>
         </div>
          
        </div>
        <img src={homeimg} alt="homeimg" className="img" />
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  background-color: rgb(50,54,71);

  .homediv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 90vh;
    background-color: rgb(50,54,71);
  }

  .homediv img {
    width: 300px;
    height: 400px;
    background-size: cover;
  }

  .homeinfo {
    width: 45%;
    
  }
  .homeinfo span {
    color: white;
  }
  h3 {
    font-size: 45px;
    color: white;
    margin-top: 40px;
  }
  p {
    margin-top: 10px;
    color: rgb(103,105,120);
  }

  button {
    background-color: rgb(1,204,142);
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 15px;
    font-size: 15px;
  }
  .homfoot {
    display: flex;
    margin-top: 20px;
    
  }
  .icons {
    font-size: 25px;
    color: white;
    margin-left: 20px;
  }

  .icons i {
    padding: 7px;
    cursor: pointer;
  }

  @media (max-width: 756px){  
::-webkit-scrollbar {
    display: none;
    overflow: hidden;
}

.homediv {
  flex-direction: column;
  padding: 10px;
}
h3 {
  font-size: 145%;
}

.homeinfo {
  width: 100%;
  margin-top: 0px;
}

button {
  padding: 10px;
}
.icons {
  margin-left: 10px;
}
.icons i{
  font-size: 12px;
}
  }


  
`;
