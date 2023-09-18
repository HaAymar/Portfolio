import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
	return (
		<Container fluid className="footer">
			<div className="footer-div">
				<p className="footer-text" style={{ color: "white" }}>
					Made with <span role="img">❤️</span> by Aymar Hakizimana
				</p>
			</div>
		</Container>
	);
}

export default Footer;
