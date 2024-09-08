import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BiLink } from "react-icons/bi";
import { useTranslation } from "react-i18next";
function ProjectCards(props) {
	const { t } = useTranslation("projects");
	return (
		<Card className="project-card-view">
			<Card.Img
				variant="top"
				src={props.imgPath}
				alt="card-img"
				style={{
					width: "200px",
					justifyContent: "center",
					marginLeft: "100px",
				}}
			/>
			<Card.Body>
				<Card.Title style={{ color: "#5F9EA0", fontWeight: "bold" }}>
					{props.title}
				</Card.Title>
				<Card.Text style={{ textAlign: "center" }}>
					{props.description}
				</Card.Text>
				<Button variant="primary" href={props.ghLink} target="_blank">
					<BiLink /> &nbsp;
					{props.isBlog ? "Blog" : t("link")}
				</Button>
				{"\n"}
				{"\n"}
				{!props.isBlog && props.demoLink && (
					<Button
						variant="primary"
						href={props.demoLink}
						target="_blank"
						style={{ marginLeft: "10px" }}
					>
						<CgWebsite /> &nbsp;
						{"Demo"}
					</Button>
				)}
			</Card.Body>
		</Card>
	);
}
export default ProjectCards;
