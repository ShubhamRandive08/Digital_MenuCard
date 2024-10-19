import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' // Used for the router
import About from './About';
import Contact from './Contact';
import Home from './Home';

export default function Navb() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link  to="/home">Home</Link>
            <Link  to="/about">About</Link>
            <Link  to="/contact">Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
