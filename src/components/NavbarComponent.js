import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 
  
function NavbarComponent() { 
	    return ( 
		            <Navbar collapseOnSelect expand="lg"
		                    className="" style={{ "background-color": "#00A0FB", "backdrop-filter": "blur(5px)" }}> 
		                <Container> 
		                    <Navbar.Brand href="#home" style={{ "color": "#ffffff" }}> 
		                        Welcome 
		                    </Navbar.Brand> 
		                    <Navbar.Toggle 
		                        aria-controls="responsive-navbar-nav" /> 
		                    <Navbar.Collapse id="responsive-navbar-nav">
		                        <Nav className="ms-auto"> 
		                            <Nav.Link href="#AboutMe"style={{ "color": "#ffffff" }}> 
		                                About Me 
		                            </Nav.Link> 
		                            <Nav.Link href="#custss"style={{ "color": "#ffffff" }}> 
		                                Customer Stories 
		                            </Nav.Link> 
		                            <Nav.Link href="#certs"style={{ "color": "#ffffff" }}> 
		                                Certifications 
		                            </Nav.Link> 
		                            <Nav.Link href="#Resume"style={{ "color": "#ffffff" }}> 
		                                Resume 
		                            </Nav.Link> 
		                            <Nav.Link href="#Projects"style={{ "color": "#ffffff" }}> 
		                                Projects 
		                            </Nav.Link> 
		                            <Nav.Link href="#Contact"style={{ "color": "#ffffff" }}> 
		                                Contact Me
		                            </Nav.Link> 
		                        </Nav> 
		                    </Navbar.Collapse> 
		                </Container> 
		            </Navbar> 
		        ); 
} 
  
export default NavbarComponent;
