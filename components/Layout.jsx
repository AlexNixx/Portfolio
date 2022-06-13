import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => (
	<div className={styles.container}>
		<Header />
		<main className={styles.site_content}>{children}</main>
		<Footer />
	</div>
);

export default Layout;
