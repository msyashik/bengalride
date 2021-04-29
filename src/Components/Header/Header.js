import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  const verifyEmail = loggedIn.email;

  return (
    <Container>
      <Navbar style={{ background: "transparent" }} expand="sm">
        <Navbar.Brand as={Link} to="/">
          BengalRide
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/destination/BIKE">
              Destination
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Contact
            </Nav.Link>
            <Button
              style={{
                padding: "0% 5%",
                backgroundColor: "#FF6E40",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {verifyEmail ? (
                <Nav.Link as={Link} to="/" style={{ color: "white" }}>
                  {verifyEmail}
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login" style={{ color: "white" }}>
                  Login
                </Nav.Link>
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
