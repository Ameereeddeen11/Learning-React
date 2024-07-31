import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import UserLoggedIn from "./UserGreeting"

function Header(props) {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-teritiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">My React App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="journey/">Journey</Nav.Link>                            
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