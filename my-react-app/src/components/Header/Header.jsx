import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import UserLoggedIn from "./UserGreeting"
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-teritiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">My React App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/"><Nav.Link>Home</Nav.Link></Link>
                            <Link to="journey/"><Nav.Link>Journey</Nav.Link></Link>                            
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <UserLoggedIn name="Amir" isLoggedIn={true}></UserLoggedIn>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}



export default Header