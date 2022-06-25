import React from "react";
import styles from "../../styles/ProjectDeteil.module.scss";
import Project from "../../components/Project";
import Image from "next/image";
import titlePhoto from "../../public/title-1.jpeg";
import gallaryPhoto1 from "../../public/gallary-1.jpg";
import gallaryPhoto2 from "../../public/gallary-2.jpg";
import gallaryPhoto3 from "../../public/gallary-3.jpg";
import finishPhoto from "../../public/finish-1.jpeg";
import { shimmer, toBase64 } from "../../utils/blureDataUrl";

const ProjectDeteil = () => {
	return (
		<>
			<div className={styles.wrapper}>
				{/* intro */}
				<div className={`${styles.intro_conteiner} ${styles.conteiner}`}>
					<h1 className={styles.project_name}>Project</h1>
					<p className={styles.description}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Reiciendis, animi? Sunt quibusdam accusamus atque corrupti inventore
						soluta, quia cupiditate autem minus explicabo, adipisci consequuntur
						delectus voluptas aut iste! Assumenda, nam?
					</p>
					<div className={styles.intro_list}>
						<ul>
							<li>Stack</li>
							<li>React</li>
							<li>Framer Motion</li>
							<li>Netlify</li>
						</ul>
						<ul>
							<li>Code</li>
							<li className={styles.li_link}>
								<a href="https://github.com/AlexNixx/Portfolio" target="_blank">
									Repository
								</a>
							</li>
						</ul>
						<ul>
							<li>Live</li>
							<li className={styles.li_link}>
								<a href="https://github.com/AlexNixx/Portfolio" target="_blank">
									View site
								</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.img_intro} ${styles.img_conteiner}`}>
						<Image
							src={titlePhoto}
							className={styles.img}
							placeholder="blur"
							blurDataURL={`data:image/svg+xml;base64,${toBase64(
								shimmer(450, 300)
							)}`}
							layout="fill"
						/>
					</div>
				</div>

				{/* Goal */}
				<div className={`${styles.goal_conteiner} ${styles.conteiner}`}>
					<h1 className={styles.header_conteiner}>Project Purpose and Goal</h1>
					<p className={styles.description}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Reiciendis, animi? Sunt quibusdam accusamus atque corrupti inventore
						soluta, quia cupiditate autem minus explicabo, adipisci consequuntur
						delectus voluptas aut iste! Assumenda, nam?
					</p>
				</div>

				{/* Gallary */}
				<div className={`${styles.gallery_conteiner} ${styles.conteiner}`}>
					<div className={styles.parent}>
						<div className={`${styles.div1} ${styles.img_conteiner}`}>
							<Image
								src={gallaryPhoto1}
								className={styles.img}
								placeholder="blur"
								blurDataURL={`data:image/svg+xml;base64,${toBase64(
									shimmer(450, 300)
								)}`}
								layout="fill"
							/>
						</div>
						<div className={`${styles.div2} ${styles.img_conteiner}`}>
							<Image
								src={gallaryPhoto2}
								className={styles.img}
								placeholder="blur"
								blurDataURL={`data:image/svg+xml;base64,${toBase64(
									shimmer(450, 300)
								)}`}
								layout="fill"
							/>
						</div>
						<div className={`${styles.div3} ${styles.img_conteiner}`}>
							<Image
								src={gallaryPhoto3}
								className={styles.img}
								placeholder="blur"
								blurDataURL={`data:image/svg+xml;base64,${toBase64(
									shimmer(450, 300)
								)}`}
								layout="fill"
							/>
						</div>
					</div>
				</div>

				{/* Problem */}
				<div className={`${styles.problems_conteiner} ${styles.conteiner}`}>
					<h1 className={styles.header_conteiner}>
						Problems and Thought Process
					</h1>
					<p className={styles.description}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Reiciendis, animi? Sunt quibusdam accusamus atque corrupti inventore
						soluta, quia cupiditate autem minus explicabo, adipisci consequuntur
						delectus voluptas aut iste! Assumenda, nam?
					</p>
					<div className={styles.img_conteiner}>
						<Image
							src={finishPhoto}
							className={styles.img}
							placeholder="blur"
							blurDataURL={`data:image/svg+xml;base64,${toBase64(
								shimmer(450, 300)
							)}`}
							layout="fill"
						/>
					</div>
				</div>

				{/* Lesson */}
				<div className={`${styles.lesson_conteiner} ${styles.conteiner}`}>
					<h1 className={styles.header_conteiner}>Lesson Learned</h1>
					<p className={styles.description}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Reiciendis, animi? Sunt quibusdam accusamus atque corrupti inventore
						soluta, quia cupiditate autem minus explicabo, adipisci consequuntur
						delectus voluptas aut iste! Assumenda, nam?
					</p>
				</div>

				{/* End */}
			</div>

			{/* Project */}
			<Project title="Other Project" />
		</>
	);
};

export default ProjectDeteil;
