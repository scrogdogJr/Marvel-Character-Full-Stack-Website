import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'; // proper way to import...just like how you import components in React
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(){
    return (
        <Navbar expand="lg" className="mb-4" style={{backgroundColor: '#e23636'}}>
        <Navbar.Brand as={NavLink} to="/" className='ms-2'><img src='media/Marvel_Logo.png' alt='Marvel Logo' width={138} height={58}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" activeclassname="active" className='mx-2 fw-medium fs-5'>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/characters" activeclassname="active" className='mx-2 fw-medium fs-5'>Characters</Nav.Link>
            <NavDropdown title="Character Creation" id="basic-nav-dropdown" activeclassname="active" className='mx-2 fw-medium fs-5'>
                <NavDropdown.Item as={NavLink} to="/add_character" activeclassname="active" className='fw-medium fs-5'>Add Character</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/edit_character" activeclassname="active" className='fw-medium fs-5'>Edit Character</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;