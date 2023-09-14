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
			{!carouselActive ? (
				<button onClick={activateCarousel}>Activer le carrousel</button>
			) : (
				<Slider {...settings}>
					<div>
						<img src={Access} alt="Image 1" />
					</div>
					<div>
						<img src={Phosforea} alt="Image 2" />
					</div>
					<div>
						<img src={Devday} alt="Image 3" />
					</div>
				</Slider>
			)}
		</div>
	);
};

export default Carousel;
