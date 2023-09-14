import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/carRental.svg";
import emotion from "../../Assets/Projects/Translator.png";
// import editor from "../../Assets/Projects/codeEditor.png";

import suicide from "../../Assets/Projects/TaalToolBox.svg";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Container>
				<h1 className="project-heading">
					<strong className="purple">My Projects</strong>
				</h1>
				<p style={{ color: "white" }}>
					These are the projects I got involved in{" "}
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={leaf}
							isBlog={false}
							title="Car-Rental"
							description="In my second year of my Bac (Bachelor's) program, I embarked on a project with the primary objective of creating a web-based application tailored for a client specializing in car rental services."
							ghLink="https://car-rental-1f117.web.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={suicide}
							isBlog={false}
							title="TaalToolBox"
							description="TaalToolBox is a platform that facilitates language learning, namely Dutch and English, which are the main languages, this platform was designed in the integration project for my last academic year"
							ghLink="https://taalToolBox.be/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={emotion}
							isBlog={false}
							title="Vector Translator"
							description="It is a web application allowing the translation of files present in a folder hierarchy into several languages, including French, English, Italian, German, Dutch and Portuguese."
							ghLink="https://translator.vector-connect.com/"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
