import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Navigation = () => (
  <Navbar>
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img src="logo.png" width="40px" /> Meadowlark Travel
      </Navbar.Brand>

      <Nav>
        <Nav.Link as={Link} to="/newsletter">
          News Letter
        </Nav.Link>

        <Nav.Link as={Link} to="/photo">
          Photo
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
