import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiPython,
	DiGit,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiNestjs, SiMysql } from "react-icons/si";
// import ProgressBar from "@ramonak/react-progress-bar";

function Skills() {
	const [hoveredIcon, setHoveredIcon] = useState("");

	const handleIconMouseEnter = (iconName) => {
		setHoveredIcon(iconName);
	};

	const handleIconMouseLeave = () => {
		setHoveredIcon("");
	};

	const techIcons = [
		{ name: "JavaScript", icon: <DiJavascript1 /> },
		{ name: "Node.js", icon: <DiNodejs /> },
		{ name: "React", icon: <DiReact /> },
		{ name: "Git", icon: <DiGit /> },
		{ name: "PostgreSQL", icon: <SiPostgresql /> },
		{ name: "Python", icon: <DiPython /> },
		{ name: "TypeScript", icon: <SiTypescript /> },
		{ name: "Nest.js", icon: <SiNestjs /> },
		{ name: "MySQL", icon: <SiMysql /> },
		{ name: "Vue.js", icon: <FaVuejs /> },
	];

	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			{techIcons.map((tech, index) => (
				<Col
					key={index}
					xs={4}
					md={2}
					className="tech-icons"
					onMouseEnter={() => handleIconMouseEnter(tech.name)}
					onMouseLeave={handleIconMouseLeave}
				>
					<div className="icon-wrapper">{tech.icon}</div>
					{hoveredIcon === tech.name && (
						<div className="icon-name" style={{ fontSize: "15px" }}>
							{tech.name}
						</div>
					)}
				</Col>
			))}
		</Row>
	);
}

export default Skills;
