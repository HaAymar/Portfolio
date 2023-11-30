import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/logo-home.svg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home() {
	const { t } = useTranslation("home");
	return (
		<section>
			<Container>
				<Container className="home-content">
					<Row>
						{/* Conditionally render Particles only in the Home component */}

						<Col md={7} className="home-header">
							<h1
								style={{ paddingBottom: 15 }}
								className="heading-name"
							>
								{t("hello")}{" "}
								<span
									className="wave"
									role="img"
									aria-labelledby="wave"
								>
									👋🏻
								</span>
							</h1>

							<h2 className="heading-name-des">
								{t("am")}
								<strong className="main-name">
									{" "}
									Aymar Davy HAKIZIMANA{" "}
								</strong>
								{t("background")}
							</h2>
							<Row>
								<Col md="4" className="footer-body">
									<ul className="footer-icons">
										<li className="social-icons">
											<a
												href="https://github.com/HaAymar"
												style={{ color: "white" }}
												target="_blank"
												rel="noopener noreferrer"
											>
												<AiFillGithub />
											</a>
										</li>
										<li className="social-icons">
											<a
												href="https://twitter.com/HakiAymar16444"
												style={{ color: "white" }}
												target="_blank"
												rel="noopener noreferrer"
											>
												<AiOutlineTwitter />
											</a>
										</li>
										<li className="social-icons">
											<a
												href="https://www.linkedin.com/in/aymar-davy/"
												style={{ color: "white" }}
												target="_blank"
												rel="noopener noreferrer"
											>
												<FaLinkedinIn />
											</a>
										</li>
										<li className="social-icons">
											<a
												href="https://www.instagram.com/aymardavy02/"
												style={{ color: "white" }}
												target="_blank"
												rel="noopener noreferrer"
											>
												<AiFillInstagram />
											</a>
										</li>
									</ul>
								</Col>
							</Row>

							<div style={{ padding: 40, textAlign: "left" }}>
								<Link to="/contact">
									{" "}
									{/* Update the "to" prop with the correct route */}
									<Button
										style={{
											width: "180px",
											height: "50px",
										}}
									>
										{t("contact")}
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
						<div class="scroll-down"></div>
					</Row>
				</Container>
			</Container>
		</section>
	);
}

export default Home;
