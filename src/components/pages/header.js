import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Image ,Dropdown} from "react-bootstrap";
import "./../css/header.css";
import Logo from "./../images/s-10.png";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate()
  function rootPage(){
         history('/')
  }
  return (
    <div >
      <div className="b-navbar">

      <Navbar collapseOnSelect expand="lg" className="header_color">
        <Container fluid>
          <Navbar.Brand href="#home" className="nav_link">
            <Image className="logo-img" src={Logo} alt="" onClick={() =>rootPage()} />
          </Navbar.Brand>
          <Navbar.Toggle
            className="custom_toggler"
            aria-controls="responsive-navbar-nav"
          >
            <i className="fa fa-bars"></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="header-menues">
              <Nav.Link href="#buy" className="nav_link">
                BUY AN APE
              </Nav.Link>
              <Nav.Link href="#roadmap" className="nav_link">
                ROADMAP
              </Nav.Link>
              <Nav.Link href="#team" className="nav_link">
                TEAM
              </Nav.Link>
              <Nav.Link href="#gallery" className="nav_link">
                GALLERY
              </Nav.Link>
              <Nav.Link href="#PROVENANCE" className="nav_link">
                PROVENANCE
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle className="d-heading" id="dropdown-basic">
                  Members
                </Dropdown.Toggle>

                <Dropdown.Menu className='dropdown-menu'>
                  <Dropdown.Item  className="nav_link" href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item  className="nav_link" href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item  className="nav_link" href="#/action-3">
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Item  className="nav_link" href="#/action-3">
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Item  className="nav_link" href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div className="nav_link">
                <i class="fab fa-youtube" aria-hidden="true">
                </i>
              </div>
              <div className="nav_link">
              <i class="fab fa-instagram" aria-hidden="true"></i>

              </div>
              <div className="nav_link">
              <a href="https://discord.com/invite/YYJpvNcB">
              <i class="fab fa-discord" aria-hidden="true"></i>
              </a>
              </div>
              <div className="nav_link">
              <a href="https://twitter.com/solbabyacademy?s=21">
              <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </div>
  );
};

export default Header;
