import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Student Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <LinkContainer to="/src/pages/Home.jsx">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="../data/courses.js">
              <Nav.Link>Courses</Nav.Link>
            </LinkContainer>

            <LinkContainer to="../data/news.js">
              <Nav.Link>News</Nav.Link>
            </LinkContainer>

            <LinkContainer to="../pages/Register.jsx">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
