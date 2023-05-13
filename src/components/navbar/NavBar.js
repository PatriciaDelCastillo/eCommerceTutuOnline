import React from "react";
import CartWidget from "../../cart/CartWidget";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { categories } from "../data/categories";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className="containers">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ul ">
              <NavLink className="links" to="/">
                Home
              </NavLink>

              <NavDropdown title="Catalogo" id="dropdown">
                {categories.map((item) => (
                  <NavDropdown.Item className="dropdown-content">
                    <Link key={item.id} to={item.route}>
                      {item.title}
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link className="links">Oferta</Nav.Link>
              <Nav.Link className="links">Envios</Nav.Link>
              <Nav.Link className="links">Ayuda</Nav.Link>
            </Nav>
            <Nav className=" navregistro " id="links">
              <Nav.Link className="links" href="#/">
                Registro
              </Nav.Link>
              <Nav.Link className="links" href="#/">
                Login
              </Nav.Link>
              <Nav.Link className="links" href="#/">
                Mis Compras
              </Nav.Link>

              <NavLink to="/cart" className="links">
                <CartWidget />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
