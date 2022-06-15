import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import logo from "../public/logo.svg";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.sub_container}>
				<h1>Let's start chatting</h1>
				<p>
					That's my contact below, i'll glad to help you! <br />
					You can reach me any time🙂
				</p>
				<a href="mailto: alexnix.mail@gmail.com">alexnix.mail@gmail.com</a>
			</div>
			<div className={styles.container}>
				<Image src={logo} height={20} width={50}></Image>
				<ul className={styles.social}>
					<li>
						<a
							title="Github Repository"
							href="https://github.com/AlexNixx"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							title="LinkedIn profile"
							href="https://www.linkedin.com/in/aleksandr-sliusarenko-a609b6230/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</li>
					<li>
						<a
							title="Telegram link"
							href="https://t.me/alwaysasha"
							target="_blank"
							rel="noreferrer"
						>
							Telegram
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
