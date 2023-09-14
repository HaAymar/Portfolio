import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Access from "../../Assets/access2U.png";
import Phosforea from "../../Assets/phos.png";
import Devday from "../../Assets/devday.png";

const Carousel = () => {
	const [carouselActive, setCarouselActive] = useState(false);

	// Configuration des options du carrousel
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	// Fonction pour activer le carrousel
	const activateCarousel = () => {
		setCarouselActive(true);
	};

	return (
		<div>
			<h1>Carrousel de photos</h1>
		 
				<button onClick={activateCarousel}>Very soon</button>
			 
		</div>
	);
};

export default Carousel;
