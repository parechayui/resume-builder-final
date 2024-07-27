/* eslint-disable i18next/no-literal-string */
import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.module.css';
import ResumeContext from '@/components/Context/ResumeContext';
import GenericModal from '../SharedComponent/GenericModal.component';
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {
 
  const templates = [{ name: 'Template 1' }, { name: 'Template 2' }];
  const colours = [{ name: 'Red' }, { name: 'Blue' }];
  

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown
              title={`TEMPLATES (${templates.length})`}
              id="basic-nav-dropdown"
            >
              {templates.map((template, index) => (
                <NavDropdown.Item key={index} href={`#template${index}`}>
                  {template.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="COLOURS" id="basic-nav-dropdown">
              {colours.map((colour, index) => (
                <NavDropdown.Item key={index} href={`#colour${index}`}>
                  {colour.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <FaUserCircle className="me-2" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
