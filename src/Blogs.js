import React from 'react'
import styled from 'styled-components';
import {blogs} from './data';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Blog = () => {
    return (
        <BlogContainer id="blogs" >
            <h2>See My  Latest Blog Post <br /> Article to Read</h2>
            <main className="blogmain"  id="blogs">
             {blogs.map((blog) => {
                 const {id, title, paragraph, url,date} = blog;
                 return <article key={id}>
                 <div className="blog" data-aos="zoom-in">
                 <h3>{title}</h3> 
                 <p>{paragraph}</p>
                 <div className="blogfooter">
                     <p>{date}</p>
                     <a href={url}>Read</a>
                 </div>
                 </div>
                 </article>
             })}   
                
                
            </main> 
              

        </BlogContainer>
    )
}

export default Blog;


const BlogContainer = styled.div`

background-color: rgb(50,54,71);
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
h2 {
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    color: white;
    margin-top: 80px;
}

.blogmain {
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}

article {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.blog {
    width: 400px;
    height: auto;
    padding: 30px;
    background-color: rgb(40,42,55);
}
 
h3 {
    color: white;
}
p {
    color: rgb(103,105,120);
}

.blogfooter {
    padding-top: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
a {
    text-decoration: none;
    color: white;
    background: rgb(1,204,142);
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;

}

@media (max-width: 756px){  
::-webkit-scrollbar {
    display: none;
    overflow: hidden;
}


.blogmain {width: 100%;
  flex-direction: column;
}
}
`;