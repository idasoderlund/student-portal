import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Student Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link to="/">Home</Nav.Link>

            <Nav.Link to="/courses">Courses</Nav.Link>

            <Nav.Link to="/news">News</Nav.Link>

            <Nav.Link to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
