import React from "react";
import styles from "../styles/Skills.module.scss";
import { motion } from "framer-motion";
import {
	SiReact,
	SiNextdotjs,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiSass,
	SiStyledcomponents,
	SiMaterialui,
	SiGit,
} from "react-icons/si";

const Skills = () => {
	const TextAnimation = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 },
		}),
	};
	const TextAnimationReverse = {
		hidden: {
			x: 100,
			opacity: 0,
		},
		visible: (custom) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 },
		}),
	};

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}
			className={styles.conteiner}
		>
			<motion.h1 custom={1} variants={TextAnimation}>
				My Skills
			</motion.h1>
			<motion.p custom={1} variants={TextAnimation}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
				suscipit labore doloribus voluptas vel eius hic ab harum consequatur,
				officia ratione quibusdam vero quod mollitia eos, modi rerum inventore
				dolor!
			</motion.p>
			<ul className={styles.skills}>
				<motion.li custom={1} variants={TextAnimation}>
					<SiHtml5 />
					HTML5
				</motion.li>
				<motion.li custom={1} variants={TextAnimationReverse}>
					<SiCss3 />
					CSS3
				</motion.li>

				<motion.li custom={1} variants={TextAnimation}>
					<SiJavascript />
					JavaScript
				</motion.li>
				<motion.li custom={1} variants={TextAnimationReverse}>
					<SiTypescript />
					TypeScript
				</motion.li>
				<motion.li custom={1} variants={TextAnimation}>
					<SiReact />
					React
				</motion.li>
				<motion.li custom={1} variants={TextAnimationReverse}>
					<SiNextdotjs />
					Next.JS
				</motion.li>
				<motion.li custom={1} variants={TextAnimation}>
					<SiSass />
					SCSS
				</motion.li>
				<motion.li custom={1} variants={TextAnimationReverse}>
					<SiStyledcomponents />
					Styled-Components
				</motion.li>
				<motion.li custom={1} variants={TextAnimation}>
					<SiMaterialui />
					MUI
				</motion.li>
				<motion.li custom={1} variants={TextAnimationReverse}>
					<SiGit />
					Git
				</motion.li>
			</ul>
		</motion.section>
	);
};

export default Skills;
