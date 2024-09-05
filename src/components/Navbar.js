import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/blue.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../Translations/index.ts";

function NavBar() {
	const [expand, setExpand] = useState(false);
	const [navColour, setNavColour] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
	const { t } = useTranslation("navBar");

	const handleScroll = () => {
		if (window.scrollY >= 20) {
			setNavColour(true);
		} else {
			setNavColour(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleLanguageChange = (e) => {
		const newLanguage = e.target.value;
		i18n.changeLanguage(newLanguage);
		setSelectedLanguage(newLanguage);
	};

	return (
		<Navbar
			expanded={expand}
			fixed="top"
			expand="md"
			className={navColour ? "navbar sticky" : "navbar"}
		>
			<Container>
				<Navbar.Brand href="/" className="d-flex">
					<Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
						<img
							src={logo}
							className="img-fluid logo"
							alt="brand"
						/>
					</Nav.Link>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => setExpand(!expand)}
					className={expand ? "collapsed" : ""}
				/>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/"
								onClick={() => setExpand(false)}
							>
								{t("home")}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/project"
								onClick={() => setExpand(false)}
							>
								{t("project")}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/skills"
								onClick={() => setExpand(false)}
							>
								{t("skills")}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/experience"
								onClick={() => setExpand(false)}
							>
								{t("experience")}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/contact"
								onClick={() => setExpand(false)}
							>
								{t("contact")}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="d-flex align-items-center pt-2">
							<select
								style={{
									backgroundColor: "#4e83c8",
									color: "white",
									border: "none",
									borderRadius: "4px",
									padding: "5px",
								}}
								value={selectedLanguage}
								onChange={handleLanguageChange}
							>
								<option value="fr">FR</option>
								<option value="en">EN</option>
							</select>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
