import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/blue.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../translations/index.ts";

function NavBar() {
	// const { i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
	const { t } = useTranslation("navBar");
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);
	// const changeLanguage = (lng) => {
	// 	i18n.changeLanguage(lng);
	// };
	function scrollHandler() {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	}

	window.addEventListener("scroll", scrollHandler);

	const chooseLanguage = (e) => {
		e.preventDefault();
		i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
		setSelectedLanguage(e.target.value);
	};
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
					<div className="navbar-toggler-icon"></div>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/"
								onClick={() => updateExpanded(false)}
							>
								{t("home")}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/project"
								onClick={() => updateExpanded(false)}
							>
								{t("project")}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/skills"
								onClick={() => updateExpanded(false)}
							>
								{t("skills")}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/experience"
								onClick={() => updateExpanded(false)}
							>
								{t("experience")}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/contact"
								onClick={() => updateExpanded(false)}
							>
								{t("contact")}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									paddingTop: "15px",
								}}
							>
								<select
									style={{
										backgroundColor: "#4e83c8",
										color: "white",
										border: "none",
										borderRadius: "4px",
									}}
									defaultValue={selectedLanguage}
									onChange={chooseLanguage}
								>
									<option value="fr">FR</option>
									<option value="en">EN</option>
								</select>
							</div>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
