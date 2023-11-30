import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Access from "../../Assets/access2U.png";
import Phosforea from "../../Assets/phos.png";
import Devday from "../../Assets/devda.png";
import Odoo from "../../Assets/odoo.png";
import Ucl from "../../Assets/ucl.png";
import Ephec from "../../Assets/ephec.png";
import Atelier from "../../Assets/atelier.png";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiGraduateCap } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { FaDev } from "react-icons/fa";
import {
	BsCodeSlash,
	BsFillCalendarWeekFill,
	BsFillFlagFill,
} from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { CgSearchLoading } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import A2u from "../../Assets/a2u.pdf";
import Phos from "../../Assets/phosforea.pdf";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//---------------- DevDay Photos ------------------//
import P1 from "../../Assets/DevDay/p1.jpeg";
import P2 from "../../Assets/DevDay/p2.jpeg";
import P3 from "../../Assets/DevDay/p3.jpeg";

//------------------- Odoo Photos------------------//
import O1 from "../../Assets/Odoo/p1.jpg";
import O2 from "../../Assets/Odoo/p2.jpg";
import O3 from "../../Assets/Odoo/p3.jpg";

//------------------ Open Week photos --------------//
import W1 from "../../Assets/OpenWeek/p1.jpg";
import W2 from "../../Assets/OpenWeek/p2.jpg";
// ------------- CTF -------------- //
import Ctf from "../../Assets/certificat.pdf";
import { useTranslation } from "react-i18next";
function Experience() {
	const { t } = useTranslation("experience");
	const [devDayActive, setdevDayActive] = useState(false);
	const [odooActive, setodooActive] = useState(false);
	const [openWeekActive, setopenWeekActive] = useState(false);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	//----------- DevDay Action --------- //
	const devDayCarousel = () => {
		setdevDayActive(true);
	};

	const devDayClose = () => {
		setdevDayActive(false);
	};
	//------------ Odoo Action ---------//
	const odooCarousel = () => {
		setodooActive(true);
	};

	const odooClose = () => {
		setodooActive(false);
	};
	//------------- Open Week ---------//
	const openWeekCarousel = () => {
		setopenWeekActive(true);
	};

	const openWeekClose = () => {
		setopenWeekActive(false);
	};

	return (
		<Container style={{ padding: "80px" }}>
			<h1 className="project-heading">
				<strong className="purple">{t("experience")}</strong>
			</h1>
			<p style={{ color: "white" }}>
				{t("description")}
				The events and training that I had the opportunity to
				participate in
			</p>
			<VerticalTimeline>
				<VerticalTimelineElement
					style={{ color: "white" }}
					className="vertical-timeline-element--work"
					date="september 2019 - september 2020"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					icon={<GiGraduateCap />}
				>
					<img src={Access} alt="Access2u" />
					<div style={{ color: "black" }}>
						<h3 className="vertical-timeline-element-title">
							Access2University
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							UCL
						</h4>
						<p>{t("a2u")}</p>
					</div>
					<br />
					<Button href={A2u} target="_blank" rel="noreferrer">
						{t("certificate")}
					</Button>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					style={{ color: "white" }}
					className="vertical-timeline-element--work"
					date="3 - 15 April 2023"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					icon={<MdSecurity />}
				>
					<img
						src={Phosforea}
						alt="Phosforea"
						style={{ maxWidth: "200px" }}
					/>
					<div style={{ color: "black" }}>
						<h3 className="vertical-timeline-element-title">
							Cybersecurity awareness
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Phosforea
						</h4>
						<p>{t("phosforea")}</p>
					</div>
					<br />
					<Button href={Phos} target="_blank" rel="noreferrer">
						{t("certificate")}
					</Button>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					style={{ color: "white" }}
					className="vertical-timeline-element--work"
					date="23 November 2021"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					icon={<FaDev />}
				>
					<div style={{ color: "black" }}>
						<img
							src={Devday}
							alt="DevDay"
							style={{ width: "150px" }}
						/>
						<h3 className="vertical-timeline-element-title">
							DevDay
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Louvain-La-Neuve
						</h4>
						<p>{t("devDay")}</p>
					</div>
					<br />
					{!devDayActive ? (
						<Button onClick={devDayCarousel}>{t("photos")}</Button>
					) : (
						<>
							<Button
								onClick={devDayClose}
								style={{ margin: "15px" }}
							>
								{t("close")}
							</Button>
							<Slider {...settings} style={{ color: "black" }}>
								<div>
									<img
										src={P1}
										alt="monImage"
										style={{
											width: "400px",
											maxHeight: "400px",
										}}
									/>
								</div>
								<div>
									<img
										src={P2}
										alt="monImage"
										style={{ width: "400px" }}
									/>
								</div>
								<div>
									<img
										src={P3}
										alt="monImage"
										style={{ width: "400px" }}
									/>
								</div>
							</Slider>
						</>
					)}
				</VerticalTimelineElement>
				<VerticalTimelineElement
					style={{ color: "white" }}
					className="vertical-timeline-element--work"
					date="02 April - 03 April 2022"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					icon={<BsCodeSlash />}
				>
					<div style={{ color: "black" }}>
						<img src={Odoo} alt="Odoo" style={{ width: "150px" }} />

						<h3 className="vertical-timeline-element-title">
							Hackathon Odoo
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							Odoo
						</h4>
						<p>{t("odoo")}</p>
					</div>
					<br />
					{!odooActive ? (
						<Button onClick={odooCarousel}>Photos</Button>
					) : (
						<>
							<Button
								onClick={odooClose}
								style={{ margin: "15px" }}
							>
								{t("close")}
							</Button>
							<Slider {...settings} style={{ color: "black" }}>
								<div>
									<img
										src={O1}
										alt="monImage"
										style={{ width: "400px" }}
									/>
								</div>
								<div>
									<img
										src={O2}
										alt="monImage"
										style={{ width: "400px" }}
									/>
								</div>
								<div>
									<img
										src={O3}
										alt="monImage"
										style={{
											width: "350px",
											maxHeight: "400px",
										}}
									/>
								</div>
							</Slider>
						</>
					)}
				</VerticalTimelineElement>
				<VerticalTimelineElement
					style={{ color: "white" }}
					className="vertical-timeline-element--education"
					date="15 july - 20 july 2022"
					iconStyle={{
						background: "rgb(233, 30, 99)",
						color: "#fff",
					}}
					icon={<BsFillCalendarWeekFill />}
				>
					<div style={{ color: "black" }}>
						<img src={Ucl} alt="Ucl" style={{ width: "150px" }} />
						<h3 className="vertical-timeline-element-title">
							OpenWeek
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							UCL
						</h4>
						<p>{t("openWeek")}</p>
					</div>
					<br />
					{!openWeekActive ? (
						<Button onClick={openWeekCarousel}>
							{t("photos")}
						</Button>
					) : (
						<>
							<Button
								onClick={openWeekClose}
								style={{ margin: "15px" }}
							>
								{t("close")}
							</Button>
							<Slider {...settings} style={{ color: "black" }}>
								<div>
									<img
										src={W1}
										alt="monImage"
										style={{
											width: "400px",
											maxHeight: "400px",
										}}
									/>
								</div>
								<div>
									<img
										src={W2}
										alt="monImage"
										style={{ width: "400px" }}
									/>
								</div>
							</Slider>
						</>
					)}
				</VerticalTimelineElement>
				<VerticalTimelineElement
					style={{ color: "white" }}
					className="vertical-timeline-element--education"
					date="26 february 2022"
					iconStyle={{
						background: "rgb(233, 30, 99)",
						color: "#fff",
					}}
					icon={<BsFillFlagFill />}
				>
					<div style={{ color: "black" }}>
						<img
							src={Ephec}
							alt="Ephec"
							style={{ width: "150px" }}
						/>
						<h3 className="vertical-timeline-element-title">
							Capture the Flag
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							EPHEC
						</h4>
						<p>{t("ctf")}</p>
					</div>
					<br />
					<Button href={Ctf} target="_blank" rel="noreferrer">
						{t("certificate")}
					</Button>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					style={{ color: "white" }}
					className="vertical-timeline-element--education"
					date="june 2021 - August 2021"
					iconStyle={{
						background: "rgb(233, 30, 99)",
						color: "#fff",
					}}
					icon={<GrUserWorker />}
				>
					<div style={{ color: "black" }}>
						<img
							src={Atelier}
							alt="Atelier"
							style={{ width: "150px" }}
						/>
						<h3 className="vertical-timeline-element-title">
							Student Job
						</h3>
						<h4 className="vertical-timeline-element-subtitle">
							L'Atelier
						</h4>
						<p>{t("job")}</p>
					</div>
					<br />
					<Button>{t("certificate")}</Button>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					iconStyle={{
						background: "rgb(16, 204, 82)",
						color: "#fff",
					}}
					icon={<CgSearchLoading />}
				/>
			</VerticalTimeline>
		</Container>
	);
}
export default Experience;
