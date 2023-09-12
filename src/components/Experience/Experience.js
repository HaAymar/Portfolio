import React from "react";
import { Container } from "react-bootstrap";
import Access from "../../Assets/access2U.png";
import Phosforea from "../../Assets/phos.png";
import Devday from "../../Assets/devday.png";
import Odoo from "../../Assets/odoo.png";
import Ucl from "../../Assets/ucl.png";
import Ephec from "../../Assets/ephec.png";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {GiGraduateCap} from "react-icons/gi";
import {MdSecurity} from "react-icons/md";
import {FaDev} from "react-icons/fa";
import {BsCodeSlash, BsFillCalendarWeekFill, BsFillFlagFill} from "react-icons/bs"

function Experience() {
	return (
		<Container style={{ padding: "100px" }}>
			<h1 className="project-heading">
				<strong className="purple">Experiences</strong>
			</h1>
			<p style={{ color: "white" }}>
				The events and training that I had the opportunity to
				participate in
			</p>
			<VerticalTimeline>
				<VerticalTimelineElement
          style = {{color: "white"}}
					className="vertical-timeline-element--work"
					date="2019 - 2020"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					icon={<GiGraduateCap />}
				>
          <img src={Access} alt="image Access2u"/>
          <div style = {{color: "black"}}>
					<h3 className="vertical-timeline-element-title">
						Access2University
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						UCL
					</h4>
					<p>
						This is a program organized by UCL for asylum seekers wishing to study university.
					</p>
          </div>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="April 2023"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					icon={<MdSecurity />}
				>
          <img src={Phosforea} alt="image Phosforea" style = {{maxWidth : "200px"}}/>
					<h3 className="vertical-timeline-element-title">
						Cybersecurity awareness
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Phosforea
					</h4>
					<p>
					It is a training course which aims to
          Facilitate the discovery of cybersecurity issues
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2008 - 2010"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					icon={<FaDev/>}
				>
           <img src={Devday} alt="image DevDay" style = {{width : "150px"}}/>
					<h3 className="vertical-timeline-element-title">
						DevDay
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Louvain-La-Neuve
					</h4>
					<p>User Experience, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2006 - 2008"
					iconStyle={{
						background: "rgb(33, 150, 243)",
						color: "#fff",
					}}
					icon={<BsCodeSlash />}
				>
          <img src={Odoo} alt="image Odoo" style = {{width : "150px"}}/>
					<h3 className="vertical-timeline-element-title">
						Hackathon Odoo
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Odoo
					</h4>
					<p>I participated in an Odoo Hackathon for 48 hours on the theme "Education of tomorrow"</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="April 2013"
					iconStyle={{
						background: "rgb(233, 30, 99)",
						color: "#fff",
					}}
					icon={<BsFillCalendarWeekFill/>}  
 
				>
          <img src={Ucl} alt="image Odoo" style = {{width : "150px"}}/>
					<h3 className="vertical-timeline-element-title">
						OpenWeek
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						UCL
					</h4>
					<p>Strategy, Social Media</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="November 2012"
					iconStyle={{
						background: "rgb(233, 30, 99)",
						color: "#fff",
					}}
					icon={<BsFillFlagFill />}
				>
          <img src={Ephec} alt="image Ephec" style = {{width : "150px"}}/>
					<h3 className="vertical-timeline-element-title">
						Capture the Flag
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						EPHEC
					</h4>
					<p>Creative Direction, User Experience, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2002 - 2006"
					iconStyle={{
						background: "rgb(233, 30, 99)",
						color: "#fff",
					}}
					// icon={<SchoolIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Bachelor of Science in Interactive Digital Media Visual
						Imaging
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Bachelor Degree
					</h4>
					<p>Creative Direction, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					iconStyle={{
						background: "rgb(16, 204, 82)",
						color: "#fff",
					}}
					// icon={<StarIcon />}
				/>
			</VerticalTimeline>
		</Container>
	);
}
export default Experience;
