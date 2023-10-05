import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/blue.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

	return (
		<Navbar
			expanded={expand}
			fixed="top"
			expand="md"
			className={navColour ? "sticky" : "navbar"}
		>
			<Container>
				<Navbar.Brand href="/" className="d-flex">
					<Nav.Link
						as={Link}
						to="/"
						onClick={() => updateExpanded(false)}
					>
						<img
							src={logo}
							className="img-fluid logo"
							alt="brand"
						/>
					</Nav.Link>
				</Navbar.Brand>
			      <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(!expand);
          }}
          className={expand ? "collapsed" : ""}
        >
					  <div className="navbar-toggler-icon">
						{GiHamburgerMenu}
					  </div>
					   
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/"
								onClick={() => updateExpanded(false)}
							>
								Home
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/project"
								onClick={() => updateExpanded(false)}
							>
								Projects
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/skills"
								onClick={() => updateExpanded(false)}
							>
								Skills
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/experience"
								onClick={() => updateExpanded(false)}
							>
								Experience
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/contact"
								onClick={() => updateExpanded(false)}
							>
								Contact
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
