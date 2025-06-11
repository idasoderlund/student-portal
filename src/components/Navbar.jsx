import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import "../App.css";

function NavigationBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar
      className="navbar-container"
      style={{
        backgroundColor: "#EEEFE0",
        /*display: "flex",
        justifyContent: "space-around",
        alignItems: "center",*/
      }}
    >
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

        <Navbar.Collapse className="desktop-nav">
          <div className="nav-large-screens">
            <Nav
              className="nav-links-container"
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Nav.Link
                to="/"
                as={Link}
                className="nav-link1"
                style={{
                  fontFamily: "'Poiret One', sans-serif",
                  fontSize: "20px",
                  backgroundColor: "#D1D8BE",
                  margin: "4px 8px",
                  marginLeft: "80px",
                  marginRight: "60px",
                  borderRadius: "8px",
                  boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
                }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                to="/courses"
                as={Link}
                className="nav-link2"
                style={{
                  fontFamily: "'Poiret One', sans-serif",
                  fontSize: "20px",
                  backgroundColor: "#D1D8BE",
                  margin: "4px",
                  marginLeft: "60px",
                  marginRight: "60px",
                  borderRadius: "8px",
                  padding: "5px 10px",
                  boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
                }}
              >
                Courses
              </Nav.Link>

              <Nav.Link
                as={Link}
                className="nav-link3"
                to="/news"
                style={{
                  fontSize: "20px",
                  fontFamily: "'Poiret One', sans-serif",
                  backgroundColor: "#D1D8BE",
                  margin: "4px",
                  marginLeft: "60px",
                  marginRight: "80px",
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
                className="nav-link4"
                style={{
                  fontSize: "20px",
                  fontFamily: "'Poiret One', sans-serif",
                  backgroundColor: "#D1D8BE",
                  margin: "4px",
                  marginLeft: "60px",
                  marginRight: "0",
                  borderRadius: "8px",
                  padding: "5px 10px",
                  boxShadow: "2px 4px 8px rgba(0,0,0,0.7)",
                }}
              >
                Registration
              </Nav.Link>
            </Nav>
          </div>

          <div
            className="responsiveMenu"
            onClick={toggleMobileMenu}
            aria-label="toggle menu"
            aria-expanded={isMobileMenuOpen}
            role="button"
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <Link
                to="/"
                className="mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/news"
                className="mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                to="/register"
                className="mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Registration
              </Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
