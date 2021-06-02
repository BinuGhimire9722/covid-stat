import React from "react";
import { 
    Navbar, Container, Nav,
} from "react-bootstrap";
class NavbarPage extends React.Component{
    render() {
        return <div>
            
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">Covid-Stat</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav >
                <Nav.Link href="#home">Home</Nav.Link>    
                </Nav>  
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </div>
    }
}

export default NavbarPage;