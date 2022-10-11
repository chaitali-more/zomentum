import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'font-awesome/css/font-awesome.min.css';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><img src='logo.png' alt ="logo" className='img-fluid'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className='align-items-center'>
          <Nav.Link href="#" className='nav_link'>Features</Nav.Link>
          <Nav.Link href="#" className='nav_link'>Integrations</Nav.Link>
          <Nav.Link href="#" className='nav_link'>Pricing</Nav.Link>
          <Nav.Link href="#" className='nav_link'>Company</Nav.Link>
          <Nav.Link href="#" className='nav_link'>Blog</Nav.Link>

          <Nav.Link href="#" className=' btn_primary nav_link'>Get a demo</Nav.Link>

          <Nav.Link href="#" className='nav_link'><i className="fa fa-user pe-2"> </i>Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;