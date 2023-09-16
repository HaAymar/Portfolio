import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skills() {
	return (
		<Container style={{ padding: "80px", color: "white" }}>
			<Container>
				<h1 className="project-heading">
					<strong className="purple">My Skills </strong>
				</h1>

				<Techstack />

				<h1 className="project-heading">
					<strong className="purple">Tools</strong>
				</h1>
				<Toolstack />
			</Container>
		</Container>
	);
}

export default Skills;
