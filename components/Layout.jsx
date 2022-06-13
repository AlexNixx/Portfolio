import Header from "./Header";
import Footer from "./Footer";
// import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => (
	// <div className={styles.container}>
	<div>
		<Header />
		{/* <main className={styles.site_content}>{children}</main> */}
		<main>{children}</main>
		<Footer />
	</div>
);

export default Layout;
