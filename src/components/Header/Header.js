import React from 'react';
import {
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Telegram } from '@mui/icons-material';
import resumeData from '../../utils/resumeData';
import './Header.css';
import CustomButton from "../Button/Button";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Navbar expand="lg" sticky='top' className='header'>
      <Container>
        {/* Home link */}
        <Nav.Link as={NavLink} to="/" className='header_navlink'>
          <Navbar.Brand className='header_home'>
            <Home />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='header_left'>
            {/* Resume Link */}
            <Nav.Link
              as={NavLink}
              to="/resume"
              className={pathname === '/resume' ? 'header_link_active' : 'header_link'}
            >
              Resume
            </Nav.Link>

            {/* Portfolio Link */}
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              className={pathname === '/portfolio' ? 'header_link_active' : 'header_link'}
            >
              Portfolio
            </Nav.Link>
          </Nav>
          {/* Contact Link */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={pathname === '/contact' ? 'header_link_active' : 'header_link'}
          >
            Contact
          </Nav.Link>
          <div className='header_left'>
            {Object.keys(resumeData.social).map(key => (
              <a href={resumeData.social[key].link} target='_blank' rel='noopener noreferrer' key={key}>
                {resumeData.social[key].icon}
              </a>
            ))}
            <CustomButton text={'Hire Me'} icon={<Telegram />} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
