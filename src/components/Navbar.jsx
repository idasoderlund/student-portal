import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import "../App.css";

function NavigationBar() {
  return (
    <Navbar style={{ backgroundColor: "#EEEFE0" }}>
      <Container>
        <Navbar.Brand
          style={{
            fontSize: "30px",
            fontWeight: "1500",
            fontFamily: "'Poiret One', sans-serif",
            textDecoration: "underline",
          }}
        >
          Student Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Nav.Link
              to="/"
              as={Link}
              className="nav-link"
              style={{
                fontFamily: "'Poiret One', sans-serif",
                fontSize: "20px",
                backgroundColor: "#D1D8BE",
                margin: "4px 8px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              to="/courses"
              as={Link}
              className="nav-link"
              style={{
                fontFamily: "'Poiret One', sans-serif",
                fontSize: "20px",
                backgroundColor: "#D1D8BE",
                margin: "4px",
                borderRadius: "8px",
                padding: "5px 10px",
                boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
              }}
            >
              Courses
            </Nav.Link>

            <Nav.Link
              as={Link}
              className="nav-link"
              to="/news"
              style={{
                fontSize: "20px",
                fontFamily: "'Poiret One', sans-serif",
                backgroundColor: "#D1D8BE",
                margin: "4px",
                borderRadius: "8px",
                padding: "5px 10px",
                boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
              }}
            >
              News
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/register"
              className="nav-link"
              style={{
                fontSize: "20px",
                fontFamily: "'Poiret One', sans-serif",
                backgroundColor: "#D1D8BE",
                margin: "4px",
                borderRadius: "8px",
                padding: "5px 10px",
                boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
              }}
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
