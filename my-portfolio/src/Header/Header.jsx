import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(props) {
    const navLinks = props.name.map((item, index) => (
        <Link key={index} to={item.toLowerCase() + "/"} className='nav-link'>{item}</Link>
    ))
    return (
        <>
            <Navbar fixed='top' bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to="home/" className='nav-link'><Navbar.Brand>Welcome to Amir's Portfolio</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            {navLinks}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>       
    )
}

export default Header;