import React from "react";
import styles from "../../styles/ProjectDeteil.module.scss";
import Project from "../../components/Project";

import { client, urlFor } from "../../lib/client";

const ProjectDeteil = ({ projects, project }) => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={`${styles.intro_conteiner} ${styles.conteiner}`}>
					<h1 className={styles.project_name}>{project?.project_name}</h1>
					<p className={styles.description}>{project?.description}</p>
					<div className={styles.intro_list}>
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
					</div>
					{project?.image && (
						<img
							className={styles.img}
							src={urlFor(project?.image && project?.image[0])}
							alt="title-img"
						/>
					)}
				</div>

				<div className={`${styles.goal_conteiner} ${styles.conteiner}`}>
					<h1 className={styles.header_conteiner}>Project Purpose and Goal</h1>
					<p className={styles.description}>{project?.purpose}</p>
				</div>

				<div className={`${styles.gallery_conteiner} ${styles.conteiner}`}>
					{project?.gallary?.map((img, i) => (
						<img
							key={i}
							className={styles.img}
							src={urlFor(img)}
							alt="gallery-img"
						/>
					))}
				</div>

				<div className={`${styles.problems_conteiner} ${styles.conteiner}`}>
					<h1 className={styles.header_conteiner}>
						Problems and Thought Process
					</h1>
					<p className={styles.description}>{project?.problem}</p>
					{project?.image && (
						<img
							className={styles.img}
							src={urlFor(project?.image && project?.image[1])}
							alt="problem-img"
						/>
					)}
				</div>

				<div className={`${styles.lesson_conteiner} ${styles.conteiner}`}>
					<h1 className={styles.header_conteiner}>Lesson Learned</h1>
					<p className={styles.description}>{project?.lesson}</p>
				</div>
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
