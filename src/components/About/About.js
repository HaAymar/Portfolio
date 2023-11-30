import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";
function Skills() {
	const { t } = useTranslation("skills");
	return (
		<Container style={{ padding: "80px", color: "white" }}>
			<Container>
				<h1 className="project-heading">
					<strong className="purple">{t("skills")}</strong>
				</h1>

				<Techstack />

				<h1 className="project-heading">
					<strong className="purple">{t("tools")}</strong>
				</h1>
				<Toolstack />
			</Container>
		</Container>
	);
}

export default Skills;
