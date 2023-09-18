import React from "react";
import { Container } from "react-bootstrap";

import Home2 from "./Home2";
import Home from "./Home";

function HomePage() {
	return (
		<section>
			<Container>
				<Home />
				<Home2 />
			</Container>
		</section>
	);
}

export default HomePage;
