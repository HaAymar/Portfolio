import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

const Contact = () => {
	const form = useRef();
	const [isEmailSent, setIsEmailSent] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_n454248",
				"template_269bk9o",
				form.current,
				"M_7DpamNSAaW_z5Po"
			)
			.then(
				(result) => {
					console.log(result.text);
					setIsEmailSent(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<Container style={{ padding: "80px" }}>
			<Container style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<h1 className="project-heading">
					<strong className="purple">Contact Me </strong>
				</h1>
				<p style={{ color: "white" }}>
					Send me an email for any question
				</p>
				<StyledContactForm>
					{isEmailSent ? (
						<div style={{ color: "green" }}>
							Email sent successfully!
						</div>
					) : (
						<form ref={form} onSubmit={sendEmail}>
							<label style={{ color: "white" }}>Name</label>
							<input type="text" name="user_name" />
							<label style={{ color: "white" }}>Email</label>
							<input type="email" name="user_email" />
							<label style={{ color: "white" }}>Message</label>
							<textarea name="message" />
							<input type="submit" value="Send" />
						</form>
					)}
					<ul
						style={{
							display: "flex",

							justifyContent: "center",
							paddingRight: "70px",
							paddingTop: "25px",
						}}
					>
						<li className="social-icons">
							<a
								href=" "
								target="_blank"
								rel="noreferrer"
								className="icon-colour  home-social-icons"
							>
								<MdOutlineAlternateEmail className="social-icon" />
							</a>
						</li>
						<li className="social-icons">
							<a
								href=" "
								target="_blank"
								rel="noreferrer"
								className="icon-colour  home-social-icons"
							>
								<BiCurrentLocation className="social-icon" />
							</a>
						</li>
						<li className="social-icons">
							<a
								href=" "
								target="_blank"
								rel="noreferrer"
								className="icon-colour home-social-icons"
							>
								<BsFillTelephoneFill className="social-icon" />
							</a>
						</li>
					</ul>
				</StyledContactForm>
			</Container>
		</Container>
	);
};

export default Contact;

const StyledContactForm = styled.div`
	width: 400px;
	 
	form {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		font-size: 16px;

		input {
			width: 100%;
			height: 35px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);

			&:focus {
				border: 2px solid rgb(33, 150, 243);
			}
		}

		textarea {
			max-width: 100%;
			min-width: 100%;
			width: 100%;
			max-height: 100px;
			min-height: 100px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);

			&:focus {
				border: 2px solid rgb(33, 150, 243);
			}
		}

		label {
			margin-top: 1rem;
		}

		input[type="submit"] {
			margin-top: 2rem;
			cursor: pointer;
			background: rgb(33, 150, 243);
			color: white;
			border: none;
		}
	}
`;
