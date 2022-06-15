import React from "react";
import Router from "next/router";
import styles from "../styles/NotFound.module.scss";

const NotFound = () => {
	return (
		<div className={styles.container}>
			<h1>
				<span>404</span>
				<br />
				Page couldn't be found
			</h1>
			<p>
				The requested page either doesn't exist or you don't have access to it.
			</p>
			<a onClick={() => Router.back()}>Go Back</a>
		</div>
	);
};

export default NotFound;
