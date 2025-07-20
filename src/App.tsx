import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
	  <main>
		  <Navbar />
		  <Hero />
		  <section id="about" className="w-full h-screen bg-red-500">
			<h2>About</h2>
		  </section>
		</main>
	);
}

export default App
