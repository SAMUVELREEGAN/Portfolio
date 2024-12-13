import React, { useEffect } from 'react'
import Image from 'react-bootstrap/Image';
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllProject = ({pic,project,hyper,tool}) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1200, 
      easing: 'ease-in-out', 
      once: false,    
    });
  });
  return (
    <div data-aos="zoom-in">
      <div style={{margin:"20px",padding:"5px",}} className='pro_container'  >
        
        <div style={{width:"17rem"}}><Image src={pic} alt="" width={"100%"} fluid className='pro_image'/>

        <div className='pro_info'>
        
          <p>{tool.map((item,index)=>(<p key={index}>{item.toUpperCase()}</p>))}</p>
          <a href={hyper} target='blank'>GET LINK <span style={{fontSize:"25px"}}> <FaGithub /></span></a>
        </div>
        </div>

        <div className='pro_name '><p>{project.toUpperCase()}</p></div>
       
      </div>
    </div>
  )
}

export default AllProject