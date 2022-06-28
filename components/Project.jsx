import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/Project.module.scss";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Project = ({ projects, title = "What I've been working on" }) => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();
	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<article className={styles.conteiner}>
			<h1>{title}</h1>
			<motion.div
				ref={carousel}
				className={styles.carousel}
				whileTap={{ cursor: "grabbing" }}
			>
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className={styles.inner_carousel}
				>
					{projects?.map((project) => {
						return (
							<div key={project._id} className={styles.project_cart}>
								<div className={styles.content}>
									<img
										src={urlFor(project?.title_img)}
										className={styles.img_cart}
									/>
									<h1>{project.project_name}</h1>
									<p>{project.short_description}</p>
								</div>
								<div className={styles.link}>
									<Link href={`/project/${project.slug.current}`}>
										<a>VIEW PROJECT ›</a>
									</Link>
								</div>
							</div>
						);
					})}
				</motion.div>
			</motion.div>
		</article>
	);
};

export default Project;
