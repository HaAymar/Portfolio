import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.png";
import Tilt from "react-parallax-tilt";
import Resume from "../../Assets/CV-Aymar.pdf";
import Button from "react-bootstrap/Button";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>WHO AM I</h1>
						<p className="home-about-body">
							I am a passionate student with a keen interest in
							coding, particularly in the field of web
							development. My love for technology and the web has
							driven me to constantly explore and expand my
							knowledge in this domain. As a student, I am
							committed to honing my skills and staying up-to-date
							with the latest trends and advancements in web
							development.
						</p>
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
							Download My CV
						</Button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
