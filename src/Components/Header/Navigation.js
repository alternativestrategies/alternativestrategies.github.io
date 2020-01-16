import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import pdf from '../../resume.pdf';

const Navigation = () => {
    return (
      <Navbar expand="md" className='pb-4'>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
            <Nav.Link href="#showcase">
                Work</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
             <Nav.Link href={pdf} target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
              {/* <Nav.Link href="#pdf" target='_blank' >Resume</Nav.Link> */}
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
         
    )
}

export default Navigation;