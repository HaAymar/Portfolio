import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo-home.svg";
import { Link } from "react-router-dom";
import Home2 from "./Home2";
import Home from "./Home";
import Particles from "../Particle";
import Button from "react-bootstrap/Button";
import ProgressBar from "@ramonak/react-progress-bar";

function HomePage() {
	const downloadCv = (url) => {
		const aTag = document.createElement("a");
		aTag.href = url;
		aTag.setAttribute("download", "Resume");
		document.body.appendChild(aTag);
		aTag.click();
		aTag.remove();
	};

	return (
		<section>
			<Container>
				<Home />
				<Home2 />
			</Container>
		</section>
	);
}

export default HomePage;
