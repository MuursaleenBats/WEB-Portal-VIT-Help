import React from "react";
import Link from "next/link";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function AdminNavbar() {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <Link href="/">
            <span>
              <NavbarBrand href="#pablo">
                <img
                  alt="..."
                  src={require("assets/img/brand/VITLogo.png")}
                />
              </NavbarBrand>
            </span>
          </Link>
        
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
