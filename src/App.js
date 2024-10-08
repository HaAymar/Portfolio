import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home/HomePage";
import AboutMe from "./components/Home/Home2";
import Skills from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import {
	HashRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			<Preloader load={load} />
			<div
				className="App"
				id={load ? "no-scroll" : "scroll"}
				style={{ maxHeight: "100%" }}
			>
				<Navbar />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/project" element={<Projects />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Navigate to="/" />} />
					<Route path="/Experience" element={<Experience />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
