import React from "react";
import { Container, Row, Col} from "react-bootstrap";

function Footer() {
	return (
		<Container fluid className="footer">
			<Row>
				<Col className="text-center">
					<p className="footer-text" style={{ color: "white" }}>
						Made with <span role="img">❤️</span> by Aymar Davy Hakizimana
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
