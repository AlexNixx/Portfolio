import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import logo from "../public/logo.svg";

const Header = () => {
	return (
		<header className={styles.container}>
			<Link href="/">
				<a>
					<Image
						className={styles.logo}
						src={logo}
						height={20}
						width={50}
						alt="logo"
					/>
				</a>
			</Link>
		</header>
	);
};

export default Header;
