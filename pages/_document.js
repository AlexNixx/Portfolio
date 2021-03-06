import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="React Front-end developer portfolio"
				/>
				<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
