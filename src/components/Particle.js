import React from "react";
import Particles from "react-tsparticles";

function Particle() {
	return (
		<Particles
			id="tsparticles"
			params={{
				particles: {
					number: {
						value: 80, // Decrease the number of particles
						density: {
							enable: true,
							value_area: 800, // Decrease the value_area to make particles closer
						},
					},
					shape: {
						type: "circle", // Change the shape to circle
						stroke: {
							width: 0,
							color: "#000000",
						},
						polygon: {
							nb_sides: 5, // Change the number of polygon sides (only for polygon shape)
						},
					},
					size: {
						value: 3, // Increase the size of particles
						random: true, // Randomize the size
					},
					opacity: {
						value: 0.5, // Change the opacity
						random: true, // Randomize the opacity
						anim: {
							enable: true,
							speed: 1,
							opacity_min: 0.1,
							sync: false,
						},
					},
					line_linked: {
						enable: true,
						distance: 150, // Increase the distance between connected particles
						color: "#000000", // Change the line color
						opacity: 0.4, // Change the line opacity
						width: 1, // Change the line width
					},
					move: {
						enable: true,
						speed: 1, // Increase the particle speed
						direction: "none", // Change the direction to "none"
						random: true, // Randomize the direction
						straight: false, // Allow particles to move in a curve
						out_mode: "out", // Change out_mode to "out"
						bounce: false, // Disable bouncing off the container edges
					},
				},
				interactivity: {
					detect_on: "canvas",
					events: {
						onhover: {
							enable: true,
							mode: "repulse", // Change the hover interaction to repulse
						},
						onclick: {
							enable: true,
							mode: "push",
						},
					},
					modes: {
						repulse: {
							distance: 100, // Increase the repulse distance
							duration: 0.4, // Decrease the duration
						},
					},
				},
				retina_detect: true,
			}}
		/>
	);
}

export default Particle;
