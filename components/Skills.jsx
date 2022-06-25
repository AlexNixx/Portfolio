import React from "react";
import styles from "../styles/Skills.module.scss";
import {
	SiReact,
	SiRedux,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiSass,
	SiStyledcomponents,
	SiGit,
} from "react-icons/si";

const Skills = () => {
	return (
		<article className={styles.conteiner}>
			<h1>My Skills</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
				suscipit labore doloribus voluptas vel eius hic ab harum consequatur,
				officia ratione quibusdam vero quod mollitia eos, modi rerum inventore
				dolor!
			</p>
			<ul className={styles.skills}>
				<li>
					<SiHtml5 />
					HTML5
				</li>
				<li>
					<SiCss3 />
					CSS3
				</li>
				<li>
					<SiSass />
					SASS
				</li>
				<li>
					<SiJavascript />
					JavaScript
				</li>
				<li>
					<SiReact />
					React
				</li>
				<li>
					<SiRedux />
					Redux
				</li>
				<li>
					<SiGit />
					Git
				</li>
				<li>
					<SiStyledcomponents />
					Styled-Components
				</li>
			</ul>
		</article>
	);
};

export default Skills;
