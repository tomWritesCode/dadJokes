import React, { Component } from "react";
import styled from "styled-components";

import GitHub from "../assets/github.png";
import Twitter from "../assets/twitter.png";

const GitHubLink = "https://github.com/tomWritesCode/dadJokes";
const TwitterLink = "https://twitter.com/tomWritesCode?lang=en";

const FooterBanner = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 10px 0;
	color: white;
	text-align: center;
	background: linear-gradient(
		177deg,
		rgba(3, 109, 205, 1) 0%,
		rgba(68, 227, 220, 1) 100%
	);

	@media (max-width: 768px) {
		display: none;
	}

	h3 {
		font-size: 18px;
		margin-bottom: 0;
		display: inline-block;
	}
`;

const Image = styled.img`
	max-height: 50px;
	margin-bottom: 0;
	transition: ease-in-out 200ms;
	filter: grayscale(100%);

	&:hover {
		transform: scale(1.2);
		filter: grayscale(0);
		transition: ease-in-out 200ms;
	}
`;

export default class Footer extends Component {
	render() {
		return (
			<FooterBanner>
				<a href={TwitterLink} target="_blank">
					<Image src={Twitter} alt="Twitter Logo" />
				</a>
				<h3>
					Powered by Gatsby, Netlify, half a bottle of wine, and a terrible
					sense of humor....
				</h3>
				<a href={GitHubLink} target="_blank">
					<Image src={GitHub} alt="GitHub Logo" />
				</a>
			</FooterBanner>
		);
	}
}
