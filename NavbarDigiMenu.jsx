import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' // Used for the router
import './NavbarDigiMenu.css'
import { useNavigate } from "react-router-dom";
import Image from './assets/HotelIamge.jpg'



function NavbarDigiMenu() {
  const navigate = useNavigate();

  function logout(){

    const r = confirm("Are you sure to Logout?");


    if(r){
      navigate('/')
    }else{
      return false
    }

  }
  return (
    
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand className='adminText' to="">ADMIN PAGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='eleOfNavbar' to="/Home" >Home</Link>
            <Link className='eleOfNavbar' to="/Food_group" >Food Group</Link>
            <Link className='eleOfNavbar' to="/Qtymast" >Quantity Master</Link>
            <Link className='eleOfNavbar' to="/MenuTable" >Menu Table</Link>
            <Link className='eleOfNavbar' to="/Menucard" >MenuCard</Link>
            <input type="button" className='logout' value='Logout' onClick={logout} name="" id="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDigiMenu;