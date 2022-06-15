import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet="utf-8" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap"
					rel="stylesheet"
				/>

				<meta
					name="description"
					content="React Front-end developer portfolio"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
