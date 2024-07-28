import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Header(props) {
    const navLinks = props.name.map((item, index) => (
        <Nav.Item><Nav.Link key={index} href={'#' + item.toLowerCase()}>{item}</Nav.Link></Nav.Item>
    ))
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>Amiriddin Abdullaev</Navbar.Brand>
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