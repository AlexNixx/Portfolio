import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import logo from "../public/logo.svg";

const Header = () => {
	return (
		<header className={styles.container}>
			<Link href="/">
				<Image
					className={styles.logo}
					src={logo}
					height={20}
					width={50}
				></Image>
			</Link>
		</header>
	);
};

export default Header;
