import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import { client } from "../lib/client";

const Home = ({ projects }) => {
	return (
		<>
			<About />
			<Skills />
			<Project projects={projects} />
		</>
	);
};

export const getServerSideProps = async () => {
	const projects = await client.fetch(`*[_type == "project"]`);
	return {
		props: { projects },
	};
};

export default Home;
