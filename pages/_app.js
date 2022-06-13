import "../styles/globals.css";
import Head from "next/head";
import Layout from "../component/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Gadgets shop</title>
				{/* <link rel="shortcut icon" href="assets/favicon.ico" /> */}
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
