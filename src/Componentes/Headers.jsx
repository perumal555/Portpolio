import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headers = () => {
    const handleScroll=(id)=>{
        const element = document.getElementById(id);
        if(element){
          element.scrollIntoView({behavior:'smooth'})
        }
      }
  return (
    <>
        <Navbar expand="lg" className="nav">
            <Container>
                <Navbar.Brand href="/" className='logo'>Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto  list" >
                        <Nav.Link onClick={()=>handleScroll('cantant')}>Home</Nav.Link>
                        <Nav.Link onClick={()=>handleScroll('about')}>About</Nav.Link>
                        <Nav.Link onClick={()=>handleScroll('skills')}>Skills</Nav.Link>
                        <Nav.Link onClick={()=>handleScroll('project')}>Project</Nav.Link>
                        <Nav.Link onClick={()=>handleScroll('blog')}>Service</Nav.Link>
                        <Nav.Link onClick={()=>handleScroll('contact')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Headers