import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(props) {
    const navLinks = props.name.map((item, index) => (
        <Nav.Item><Link to={item.toLowerCase() + "/"}><Nav.Link key={index}>{item}</Nav.Link></Link></Nav.Item>
    ))
    return (
        <>
            <Navbar fixed='top' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Welcome to Amir's Portfolio</Navbar.Brand>
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