import React from "react";
import styles from "../../styles/ProjectDeteil.module.scss";
import Project from "../../components/Project";
import { motion } from "framer-motion";
import { client, urlFor } from "../../lib/client";

const ProjectDeteil = ({ projects, project }) => {
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
	const ImgAnimation = {
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
		<>
			<div className={styles.wrapper}>
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2, once: true }}
					className={`${styles.intro_conteiner} ${styles.conteiner}`}
				>
					<motion.h1
						custom={1}
						variants={TextAnimation}
						className={styles.project_name}
					>
						{project?.project_name}
					</motion.h1>
					<motion.p
						custom={2}
						variants={TextAnimation}
						className={styles.description}
					>
						{project?.description}
					</motion.p>
					<motion.div
						custom={3}
						variants={TextAnimation}
						className={styles.intro_list}
					>
						<ul>
							<li>Stack</li>
							{project?.stack?.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
						<ul>
							<li>Code</li>
							<li className={styles.li_link}>
								<a href={project?.github} target="_blank" rel="noreferrer">
									Repository
								</a>
							</li>
						</ul>
						<ul>
							<li>Live</li>
							<li className={styles.li_link}>
								<a href={project?.live} target="_blank" rel="noreferrer">
									View site
								</a>
							</li>
						</ul>
					</motion.div>
					{project?.image && (
						<motion.img
							custom={3}
							variants={ImgAnimation}
							className={styles.img}
							src={urlFor(project?.image && project?.image[0])}
							alt="title-img"
						/>
					)}
				</motion.section>

				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2, once: true }}
					className={`${styles.goal_conteiner} ${styles.conteiner}`}
				>
					<motion.h1
						custom={1}
						variants={TextAnimation}
						className={styles.header_conteiner}
					>
						Project Purpose and Goal
					</motion.h1>
					<motion.p
						custom={1}
						variants={TextAnimationReverse}
						className={styles.description}
					>
						{project?.purpose}
					</motion.p>
				</motion.section>

				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2, once: true }}
					className={`${styles.gallery_conteiner} ${styles.conteiner}`}
				>
					{project?.gallary?.map((img, i) => (
						<motion.img
							key={i}
							className={styles.img}
							src={urlFor(img)}
							alt="gallery-img"
							custom={i}
							variants={ImgAnimation}
						/>
					))}
				</motion.section>

				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2, once: true }}
					className={`${styles.problems_conteiner} ${styles.conteiner}`}
				>
					<motion.h1
						custom={1}
						variants={TextAnimation}
						className={styles.header_conteiner}
					>
						Problems and Thought Process
					</motion.h1>
					<motion.p
						custom={2}
						variants={TextAnimationReverse}
						className={styles.description}
					>
						{project?.problem}
					</motion.p>
					{project?.image && (
						<motion.img
							className={styles.img}
							src={urlFor(project?.image && project?.image[1])}
							alt="problem-img"
							custom={3}
							variants={ImgAnimation}
						/>
					)}
				</motion.section>

				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2, once: true }}
					className={`${styles.lesson_conteiner} ${styles.conteiner}`}
				>
					<motion.h1
						custom={1}
						variants={TextAnimation}
						className={styles.header_conteiner}
					>
						Lesson Learned
					</motion.h1>
					<motion.p
						custom={2}
						variants={TextAnimation}
						className={styles.description}
					>
						{project?.lesson}
					</motion.p>
				</motion.section>
			</div>

			<Project projects={projects} title="Other Project" />
		</>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "project"] {
	  slug {
		current
	  }
	}
	`;

	const projects = await client.fetch(query);

	const paths = projects.map((project) => ({
		params: {
			slug: project.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "project" && slug.current == '${slug}'][0]`;
	const projectsQuery = '*[_type == "project"]';

	const project = await client.fetch(query);
	const projects = await client.fetch(projectsQuery);

	console.log(project);

	return {
		props: { projects, project },
	};
};

export default ProjectDeteil;
