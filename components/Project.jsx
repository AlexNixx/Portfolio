import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import Link from "next/link";
import photo from "../public/test2.jpg";
import { shimmer, toBase64 } from "../utils/blureDataUrl";

const Project = () => {
	const projects = [
		{
			index: 1,
			title: "Project 1",
			desctiption:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam obcaecati rem mollitia, beatae quo aperiam eaque aliquid expedita nihil? Adipisci vel molestias illum optio! Doloribus maxime dicta incidunt laudantium ipsa.",
			slug: "proj-1",
		},
		{
			index: 2,
			title: "Project 2",
			desctiption:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam obcaecati rem mollitia, beatae quo aperiam eaque aliquid expedita nihil? Adipisci vel molestias illum optio! Doloribus maxime dicta incidunt laudantium ipsa.",
			slug: "proj-2",
		},
		{
			index: 3,
			title: "Project 3",
			desctiption:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam obcaecati rem mollitia, beatae quo aperiam eaque aliquid expedita nihil? Adipisci vel molestias illum optio! Doloribus maxime dicta incidunt laudantium ipsa.",
			slug: "proj-3",
		},
		{
			index: 4,
			title: "Project 4",
			desctiption:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam obcaecati rem mollitia, beatae quo aperiam eaque aliquid expedita nihil? Adipisci vel molestias illum optio! Doloribus maxime dicta incidunt laudantium ipsa.",
			slug: "proj-4",
		},
		{
			index: 5,
			title: "Project 5",
			desctiption:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam obcaecati rem mollitia, beatae quo aperiam eaque aliquid expedita nihil? Adipisci vel molestias illum optio! Doloribus maxime dicta incidunt laudantium ipsa.",
			slug: "proj-5",
		},
		{
			index: 6,
			title: "Project 6",
			desctiption:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam obcaecati rem mollitia, beatae quo aperiam eaque aliquid expedita nihil? Adipisci vel molestias illum optio! Doloribus maxime dicta incidunt laudantium ipsa.",
			slug: "proj-6",
		},
	];

	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);
	return (
		<div className={styles.conteiner}>
			<h1>What I've been working on</h1>
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
					{projects.map((project) => {
						return (
							<motion.div className={styles.project_cart} key={project.index}>
								<div className={styles.img_conteiner}>
									<Image
										src={photo}
										className={styles.img_cart}
										placeholder="blur"
										blurDataURL={`data:image/svg+xml;base64,${toBase64(
											shimmer(450, 300)
										)}`}
										layout="fill"
										objectFit="cover"
									/>
								</div>
								<h1>{project.title}</h1>
								<p>{project.desctiption}</p>
								<Link href={`/project/${project.slug}`}>
									<a>VIEW PROJECT ›</a>
								</Link>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Project;
