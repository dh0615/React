import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import netflix from "../img/netflix_720.png";

const Navigation = () => {
  return (
    <Navbar className="navBar" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <img src="https://cromidi.cafe24.com/netflix/netflix.png" width={100} />
        {/* <img src={netflix} width={100} /> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/movies" className="nav-item">
              Movies
            </Link>
            <Link to="/" className="nav-item">
              TV
            </Link>
            <Link to="/" className="nav-item">
              Sports
            </Link>
            <Link to="/" className="nav-item">
              Entertainment
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
