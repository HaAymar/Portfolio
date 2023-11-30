import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
function Footer() {
	const { t } = useTranslation("home");
	return (
		<Container fluid className="footer">
			<Row>
				<Col className="text-center">
					<p className="footer-text" style={{ color: "white" }}>
						{t("footer-made")}
						<span role="img">❤️</span>
						{t("footer")}
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
