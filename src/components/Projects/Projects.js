import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/carRental.svg";
import emotion from "../../Assets/Projects/Translator.png";
import Portfolio from "../../Assets/blue.png";
import { useTranslation } from "react-i18next";
import suicide from "../../Assets/Projects/TaalToolBox.svg";
import hitech from "../../Assets/Projects/hitech.svg";
function Projects() {
	const { t } = useTranslation("projects");
	return (
		<Container style={{ padding: "80px" }}>
			<h1 className="project-heading">
				<strong className="purple">{t("projects")}</strong>
			</h1>
			<p style={{ color: "white" }}>{t("description")} </p>
			<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
				<Col md={4} className="project-card">
					<ProjectCard
						imgPath={leaf}
						isBlog={false}
						title="Car-Rental"
						description={t("car-rental")}
						ghLink="https://car-rental-1f117.web.app/"
					/>
				</Col>

				<Col md={4} className="project-card">
					<ProjectCard
						imgPath={suicide}
						isBlog={false}
						title="TaalToolBox"
						description={t("taalToolBox")}
						ghLink="https://taalToolBox.be/"
					/>
				</Col>

				<Col md={4} className="project-card">
					<ProjectCard
						imgPath={emotion}
						isBlog={false}
						title="Vector Translator"
						description={t("translator")}
						ghLink="https://translator.vector-connect.com/"
					/>
				</Col>
				<Col md={4} className="project-card">
					<ProjectCard
						imgPath={Portfolio}
						isBlog={false}
						title="Portfolio"
						description={t("portfolio")}
						ghLink="https://github.com/HaAymar/Portfolio"
					/>
				</Col>
				<Col md={4} className="project-card">
					<ProjectCard
						imgPath={hitech}
						isBlog={false}
						title="Hitech-Solutions"
						description={t("hitech")}
						ghLink="https://github.com/HaAymar/TFE-HiTech"
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default Projects;
