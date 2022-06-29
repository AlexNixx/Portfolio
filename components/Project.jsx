import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import styles from "../styles/Project.module.scss";
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";
import { urlFor } from "../lib/client";

const Project = ({ projects, title = "What I've been working on" }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1200 },
			items: 3,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1200, min: 495 },
			items: 2,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 495, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};
	const CustomDot = ({ onMove, index, onClick, active }) => {
		return (
			<li
				className={active ? `${styles.active}` : `${styles.inactive}`}
				onClick={() => onClick()}
			>
				{active ? <FaDotCircle /> : <FaRegDotCircle />}
			</li>
		);
	};
	return (
		<div className={styles.conteiner}>
			<h1>{title}</h1>
			<Carousel
				responsive={responsive}
				infinite
				showDots
				ssr
				className={styles.slider_container}
				arrows={false}
				autoPlay={true}
				autoPlaySpeed={7000}
				customDot={<CustomDot />}
			>
				{projects?.map((project) => {
					return (
						<div key={project._id} className={styles.project_cart}>
							<div className={styles.content}>
								<img
									src={urlFor(project?.title_img)}
									className={styles.img_cart}
									alt="title-img"
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
			</Carousel>
		</div>
	);
};

export default Project;
