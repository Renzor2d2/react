import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function NotFound() {
	return (
		<>
			<Navbar></Navbar>
			<Hero first={"Not"} second={"Found"}></Hero>
			<Footer></Footer>
		</>
	);
}
