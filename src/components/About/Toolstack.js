import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiPostman,
	SiLinux,
	SiDocker,
	SiFigma,
	SiAdobexd,
	SiJenkins,
} from "react-icons/si";
import ProgressBar from "@ramonak/react-progress-bar";

function Toolstack() {
	const [hoveredIcon, setHoveredIcon] = useState("");

	const handleIconMouseEnter = (iconName) => {
		setHoveredIcon(iconName);
	};

	const handleIconMouseLeave = () => {
		setHoveredIcon("");
	};

	const techIcons = [
		{ name: "VS code", icon: <SiVisualstudiocode /> },
		{ name: "Postman", icon: <SiPostman /> },
		{ name: "Linux", icon: <SiLinux /> },
		{ name: "Docker", icon: <SiDocker /> },
		{ name: "Figma", icon: <SiFigma /> },
		{ name: "AdobeXd", icon: <SiAdobexd /> },
		{ name: "Jenkins", icon: <SiJenkins /> },
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
					<div className="icon-wrapper">
						{tech.icon}
						<ProgressBar
							completed={75} // You can customize this as needed
							bgColor="#5D76DF"
							animateOnRender={true}
							isLabelVisible={false}
						/>
					</div>
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

export default Toolstack;
