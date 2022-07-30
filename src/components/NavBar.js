import CartWidget from "./CartWidget";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Link to="/">
                    <Navbar.Brand>Coder-Shop</Navbar.Brand>
                </Link> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav>Home</Nav>
                        <Nav>Link</Nav>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
                        <Link to="/category/perifericos">Perifericos</Link>
                        <Link to="/category/Placas-de-video">
                            Placas de Video
                        </Link>
                        <Link to="/category/Procesadores">Procesadores</Link>
                        {/* </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
};
export default NavBar;
