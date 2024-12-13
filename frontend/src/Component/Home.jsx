import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Models from './Models';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic from '../Assets/about1.gif'
import Image from 'react-bootstrap/Image';
import ranges from '../Data/ranges'
import Skills from './Skills';
import project from '../Data/project'
import AllProject from './AllProject';
import { FaGithub } from "react-icons/fa";
import pic1 from '../Assets/gi (1).gif'
import pic2 from '../Assets/gi (2).gif'
import pic3 from '../Assets/gi (3).gif'
import pdf from '../Assets/SAM _Node & Python.pdf'
import { IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import robot from '../Assets/8440.jpg'
import { TfiLinkedin } from "react-icons/tfi";




const Home = ({theme}) => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1200, 
      easing: 'ease-in-out', 
      once: false,    
    });
  });

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (

    <div>
        <div id="home">
            <Container >
            <Row>
              <Col className='text-section' sm={12} lg={6} md={6} >
              <h1  data-aos="zoom-in">Hi there !</h1>
            <h1 className='text' style={{width:"300px"}}>I'm <span className='name'> Samuvel Reegan , </span></h1>
            <h4 data-aos="zoom-in">Full Stack Developer </h4>
            <p data-aos="zoom-in" style={{width:"320px"}}>I will create a divine, custom-designed website for you, showcasing my skills in a way that will leave you amazed.</p>

              <Row>
                <Col> <button onClick={() => setModalShow(true)}style={{width:"200px",marginTop:"10px"}} className="home_btn" data-aos="zoom-in">Send Mail</button></Col>
                <Col><a href={pdf} download="CV_Samuvel.pdf"><button style={{width:"200px",margin:"10px 0px"}} data-aos="zoom-in">Dowload My CV</button></a></Col>
                <Models  show={modalShow} onHide={() => setModalShow(false)}/>
              </Row>
              
              </Col>
              <Col className='image-section' data-aos="zoom-in" sm={12} lg={6} md={6} ></Col>
            </Row>

          </Container>

       
        </div>

       <div data-aos="fade-up" className='my-4'>
       <marquee scrollamount="10" scrolldelay="50" class="marquee">
        <span>
          <p>REACT JS</p>
          <p>NODE JS</p>
          <p>PYTHON</p>
          <p>DJANGO</p>
          <p>REST API</p>
          <p>DRF</p>
          <p>MYSQL</p>
          <p>MONGODB</p>
          <p>BOOTSTRAP</p>
          <p>FRONTEND</p>
          <p>BACKEND</p>
          <p>FULL_STACK</p>
        </span>
        </marquee>
       </div>

        <div id="about" className='about_page my-5'>
          <h1 className='text-center' style={{fontSize:"3rem"}}  data-aos="zoom-in">ABOUT <span className='title_' data-aos="zoom-out-down">ME</span></h1>

          <Container className='mt-5'>
           <Row>
            <Col sm={12} lg={6} md={6} >
            <Image src={pic} fluid width={"500rem"} data-aos="zoom-in" style={{borderRadius:"20px",boxShadow:"0 0 10px black"}}/>
            </Col>

            <Col sm={12} lg={6} md={6}>
            <h3 data-aos="zoom-in-up" style={{lineHeight:"3rem"}}>
            Enthusiastic Python Developer with six months of experience and a six-month course completion in Python and web development. Dedicated to continuous learning and eager to contribute my skills in creating effective software solutions with in a collaborative team.
            </h3>
            <button style={{width:"200px",margin:"10px 0px"}} data-aos="zoom-in-down" className='any_btn' onClick={() => handleScroll("contact")}>HIRE ME</button>
            </Col>
           </Row>
              
            
          </Container>
        </div>

        <div id="skill" className='my-5'>
        <h1 className='text-center' style={{fontSize:"3rem"}}  data-aos="zoom-in"><span style={{color:`${theme === 'light'? "black" : "white"}`}}>MY</span> <span className='title_' data-aos="zoom-out-down">SKILLS</span></h1>
       <Container>
       <div className='skill_page'>
        {ranges.map((range, index) => (

        <Skills key={index} tool={range.tool.toLowerCase()}  percentage={parseInt(range.know)} theme={theme} />
      ))}
        </div>
       </Container>

        </div>

        <div id='project'>
        <h1 style={{textAlign:"center",fontSize:"3rem",margin:"50px 0px"}}  data-aos="fade-up"><span style={{color:`${theme === 'light'? "black" : "white"}`}}>MY </span><span className='title_' >PROJECTS</span></h1>

        <div style={{display:"flex",justifyContent:'center',flexWrap:"wrap"}} >
          {
           project && project.map((item,index)=>(
              <AllProject pic={item.pic} key={index} project={item.project} hyper={item.hyper} tool={item.language}/>
           ))
          }

         
        </div>

        <div style={{margin:"0px 10%"}}><a href="https://github.com/SAMUVELREEGAN" target='blank'><button className='any_btn' style={{width:"100%"}}>MY GITHUB LINK <FaGithub style={{marginTop:"-5px",fontSize:"20px"}}/></button></a></div>
        </div>


        <div id='blog'>
        <h1 className='text-center my-5' style={{fontSize:"3rem"}} >MY <span className='title_' data-aos="zoom-out-down">BLOGS</span></h1>

        <div className='blog_page'>

            <div className='blog_container' style={{width:"17rem"}} data-aos="zoom-in">
              <img src={pic3} alt="" width={"100%"}/>
              <h5>The Foundations: Frontend, Backend, and Full Stack</h5>
              <div className='blog_info'>
                <h6><span>Frontend Development</span> focuses on the visible part of a website—the design, user interface, and interactions. </h6>
                <h6><span>Backend Development</span> involves managing server-side logic, databases, and APIs.</h6>
              </div>
            </div>

            <div className='blog_container'  style={{width:"17rem"}} data-aos="zoom-in">
              <img src={pic2} alt="" width={"100%"}/>
              <h5>The Importance of Responsive Design </h5>
              <div className='blog_info' style={{margin:"5px"}}>
                <h6>In today’s mobile-first world, responsive design isn’t optional; it’s essential. Frameworks like Bootstrap and CSS simplify creating adaptable layouts. Remember, a user-friendly website is key to retaining visitors and boosting engagement.</h6>
              </div>
            </div>

            <div className='blog_container' style={{width:"17rem"}} data-aos="zoom-in">
              <img src={pic1} alt="" width={"100%"}/>
              <h5>Soft Skills</h5>
              <div className='blog_info' style={{margin:"20px"}}>
                <h6>Problem-Solving: Every project presents unique challenges.</h6>
                <h6>Communication: Whether collaborating with a team or presenting to clients, clear communication is vital.</h6>
              </div>
            </div>

        </div>
        </div>


<div id='contact'>
<Container fluid className='contact_info' data-aos="zoom-in">

  <Row> 
    <Col lg={1} sm={0}/>
     <Col lg={6} sm={9} style={{display:"flex",flexDirection:"column",marginTop:"7%"}}>
        <h2 data-aos="zoom-in">CONTACT ME</h2>
          <div style={{display:"flex",margin:"2% 19%"}} data-aos="zoom-in">
            
            <div className='contact_whatsapp' >
            <a href="https://wa.me/9345532741" target="_blank"  rel="noopener noreferrer" aria-label="Contact on WhatsApp">
              <IoLogoWhatsapp style={{border:"1px solid black",borderRadius:"50%",fontSize:"70px",padding:"15px",margin:"5px"}} className='icon'/>   
            </a>  
            </div>
            <div className='contact_mail'>
               <a href="https://mail.google.com/mail/?view=cm&fs=1&to=samuelreegan372@gmail.com" target="_blank">
              <BiLogoGmail style={{border:"1px solid black",borderRadius:"50%",fontSize:"70px",padding:"15px",margin:"5px"}} className='icon' />
              </a>
              </div> 
            <div className='contact_link'>
               <a href="https://www.linkedin.com/in/samuvel-reegan-p-785a4a2ba/" target="_blank">
              <TfiLinkedin style={{border:"1px solid black",borderRadius:"50%",fontSize:"70px",padding:"10px",margin:"5px"}} className='icon' />
              </a>
              </div> 
          </div>
          <div style={{margin:"5% 27%"}}>
            <h4>Thank You ..❤️</h4>
          </div>
          </Col>
          <Col lg={5} sm={3} data-aos="zoom-in">
        <Image src={robot} fluid  style={{margin:"50px 0px"}}/>
        </Col>
      </Row>
      
     
</Container>

</div>
<div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h3 style={{marginTop:"10px"}}>SAMUVEL REEGAN</h3>
        <div className='footer'>
          <h5 onClick={() => handleScroll("home")}>Home</h5>
          <h5 onClick={() => handleScroll("about")}>About</h5>
          <h5 onClick={() => handleScroll("skills")}>Skills</h5>
          <h5 onClick={() => handleScroll("project")}>Projects</h5>
        </div>
        </div>
        <hr />
        <div style={{display:"flex",justifyContent:"space-between",fontSize:"10px"}}>
          <div>©2025</div>
          <div>Terms of Use  <span style={{margin:"0px 10px"}}>Privacy Policy</span>     </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
