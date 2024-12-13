import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Headers = ({toggleTheme,theme}) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
    <Navbar expand="md" className="bg-body-light mt-1">
      <Container fluid>
        <Navbar.Brand href="/" className="nav_logo w-75 d-flex ps-lg-5">
          <h3 className="nav_name">
            <span className="text-gray">Mr</span> Developer . 
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id="offcanvasNavbarLabel" >
              Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='nav_body'>
            <Nav className="justify-content-end flex-grow-1 pe-3 mx-3">
              <Nav.Link  onClick={() => handleScroll("home")} className="me-2 nav_name">
                Home
              </Nav.Link>
              <Nav.Link  onClick={() => handleScroll("about")} className="me-2 nav_name">
                About
              </Nav.Link>
              <Nav.Link  onClick={() => handleScroll("skill")} className="me-2 nav_name">
                Skills
              </Nav.Link>
              <Nav.Link  onClick={() => handleScroll("project")} className="me-2 nav_name">
                Projects
              </Nav.Link>
              <Nav.Link  onClick={() => handleScroll("blog")} className="me-2 nav_name">
                Blogs
              </Nav.Link>
              <Nav.Link  onClick={() => handleScroll("contact")} className="me-2 nav_name">
                Contact
              </Nav.Link>
              <Nav.Link  className="me-2 nav_name">
              <button onClick={toggleTheme} className='dark_btn'> {theme === 'light' ? <BsFillMoonStarsFill style={{fontSize:"20px"}} /> : <IoMdSunny style={{color:"orange",fontSize:"20px"}} />} </button>
              </Nav.Link>
             
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      
    </Navbar>
  <hr className='hr_'/>
  </div>
  );
};

export default Headers;
