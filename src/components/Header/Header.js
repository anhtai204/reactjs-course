import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Hỏi Dân IT</Navbar.Brand> */}
        <NavLink to="/" className='navbar-brand'>Hỏi Dân IT</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/users" className='nav-link'>Users</NavLink>
            <NavLink to="/admins" className='nav-link'>Admin</NavLink>

            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/admins">Admin</Nav.Link> */}
          </Nav>
          <Nav>
            <button className='btn-login' onClick={() => handleLogin()}>
              Log in
            </button>
            <button className='btn-signup'>Sign up</button>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Log in</NavDropdown.Item>
                <NavDropdown.Item href="">
                    Log out
                </NavDropdown.Item>
                <NavDropdown.Item href="">Profile</NavDropdown.Item>
                </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;