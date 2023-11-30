import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.png";
import Tilt from "react-parallax-tilt";
import Resume from "../../Assets/CV-Aymar.pdf";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

function Home2() {
	const { t } = useTranslation("home");
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>{t("who")}</h1>
						<p className="home-about-body">{t("presentation")}</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img
								src={myImg}
								className="img-fluid"
								alt="avatar"
								style={{ maxHeight: "300px" }}
							/>
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<Button href={Resume} target="_blank" rel="noreferrer">
							{t("cv")}
						</Button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
