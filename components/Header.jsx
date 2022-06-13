import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import logo from "../public/logo.svg";

const Header = () => {
	return (
		<div className={styles.container}>
			<Image src={logo} height={20} width={50}></Image>
		</div>
	);
};

export default Header;
