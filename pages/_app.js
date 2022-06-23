import "../styles/globals.scss";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Alex Sliusarenko - Front End Developer</title>
				<link rel="shortcut icon" href="favicon.ico" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
