import Link from "next/link";
import Image from "next/image";
import styles from "../styles/About.module.scss";
import { motion } from "framer-motion";
import { shimmer, toBase64 } from "../utils/blureDataUrl";
import avatar from "../public/avatar.svg";

const About = () => {
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
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}
			className={styles.conteiner}
		>
			<div className={styles.main_section}>
				<div className={styles.info}>
					<motion.h1 custom={1} variants={TextAnimation}>
						Hey there
						<motion.span
							animate={{ rotate: 20 }}
							transition={{
								yoyo: Infinity,
								from: 0,
								duration: 0.2,
								ease: "easeInOut",
								type: "tween",
							}}
						>
							👋
						</motion.span>
						<br />
						I&apos;m Alex.
					</motion.h1>
					<motion.h3 custom={2} variants={TextAnimation}>
						Front-End Developer
					</motion.h3>
					<motion.p custom={3} variants={TextAnimation}>
						This is my digital space, where I write about the things I&apos;m
						working on and share what I&apos;ve learned.
					</motion.p>
					<motion.button
						custom={3}
						variants={TextAnimation}
						onClick={() => (window.location = "")}
						className={styles.button}
					>
						Download CV
					</motion.button>
				</div>
				<motion.div custom={1} variants={ImgAnimation}>
					<Image
						src={avatar}
						alt="avatar"
						height={300}
						width={400}
						priority={true}
						className={styles.avatar}
						blurDataURL={`data:image/svg+xml;base64,${toBase64(
							shimmer(400, 300)
						)}`}
					/>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default About;
