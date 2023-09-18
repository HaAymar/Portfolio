import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo-home.svg";
import { Link } from "react-router-dom";
import Home2 from "./Home2";
import Particles from "../Particle";
import Button from "react-bootstrap/Button";
import ProgressBar from "@ramonak/react-progress-bar";

function Home() {
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
				<Container className="home-content">
					<Row>
						{/* Conditionally render Particles only in the Home component */}
						<Particles />
						<Col md={7} className="home-header">
							<h1
								style={{ paddingBottom: 15 }}
								className="heading-name"
							>
								Hello!{" "}
								<span
									className="wave"
									role="img"
									aria-labelledby="wave"
								>
									👋🏻
								</span>
							</h1>

							<h2 className="heading-name-des">
								I'm
								<strong className="main-name">
									{" "}
									Aymar HAKIZIMANA{" "}
								</strong>
								a Full Stack developer passionate about web and
								application development
							</h2>

							<div style={{ padding: 40, textAlign: "left" }}>
								<Link to="contact">
									<Button
										style={{
											width: "180px",
											height: "50px",
										}}
									>
										Contact Me
									</Button>
								</Link>
							</div>

							<div
								style={{ padding: 50, textAlign: "left" }}
							></div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<img
								src={homeLogo}
								alt="home pic"
								className="img-fluid"
								style={{ maxHeight: "450px" }}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Home;
