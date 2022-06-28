import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.scss";
import avatar from "../public/avatar.svg";
import { shimmer, toBase64 } from "../utils/blureDataUrl";

const About = () => {
	return (
		<article className={styles.conteiner}>
			<div className={styles.main_section}>
				<div className={styles.info}>
					<h1>
						Hey there 👋
						<br />
						I&apos;m Alex.
					</h1>
					<h3>Front-End Developer</h3>
					<p>
						This is my digital space, where I write about the things I&apos;m
						working on and share what I&apos;ve learned.
					</p>
					<button
						onClick={() =>
							(window.location =
								"https://drive.google.com/uc?export=download&id=17tKOhx1MYfXvIFGFKZvj5f8Gnuw1IuCi")
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
					placeholder="blur"
					blurDataURL={`data:image/svg+xml;base64,${toBase64(
						shimmer(300, 300)
					)}`}
				/>
			</div>
		</article>
	);
};

export default About;
