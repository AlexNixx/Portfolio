import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.scss";
import avatar from "../public/avatar.svg";

const About = () => {
	return (
		<div className={styles.conteiner}>
			<div className={styles.info}>
				<h1>
					Hey there 👋
					<br />
					I'm Alex.
				</h1>
				<h3>
					Front-End Developer <span>from Ukraine</span>
				</h3>
				<p>
					This is my digital space, where I write about the things I'm working
					on and share what I've learned.
				</p>
				{/* <a href="/public/NAME.txt" download>
					<button>Download CV</button>
				</a> */}
				<button
					onClick={() =>
						// (window.location =
						// 	"https://drive.google.com/uc?export=download&id=17tKOhx1MYfXvIFGFKZvj5f8Gnuw1IuCi")
						console.log("Download")
					}
					className={styles.button}
				>
					Download CV
				</button>
			</div>
			<Image
				src={avatar}
				height={300}
				width={300}
				className={styles.avatar}
			></Image>
		</div>
	);
};

export default About;
