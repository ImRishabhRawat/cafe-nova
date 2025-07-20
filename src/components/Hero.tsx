import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
	useGSAP(() => {
		// The error occurs because SplitText is not a static method on the gsap object.
		// Instead, you should use the SplitText constructor directly (imported from "gsap/all").
		// Also, the option key is "type", not "tpye".
		// Additionally, SplitText returns an object with arrays for chars, words, lines, etc.
		// Add type annotations for better clarity.

		const heroSplit = new SplitText(".title", {
			type: "chars,words",
		});
		const paragraphSplit = new SplitText(".subtitle", {
			type: "lines",
		});

		// Add type for char as HTMLElement
		heroSplit.chars?.forEach((char) => char.classList.add("text-gradient"));

		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.05,
		});

		gsap.from(paragraphSplit.lines, {
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.05,
			delay: 0.5,
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '#hero',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				markers: true,
			}
		})
			.to('.right-leaf', { y: 200 }, 0)
			.to('.left-leaf', { y: -200 }, 0)
		
	});
	return (
		<>
			<section id="hero" className="noisy">
				<h1 className="title">MOJITO</h1>

				<img
					src="/images/hero-left-leaf.png"
					alt="leaf-left"
					className="left-leaf"
				/>
				<img
					src="/images/hero-right-leaf.png"
					alt="leaf-right"
					className="right-leaf"
				/>

				<div className="body">
					<div className="content">
						<div className="space-y-5 hidden md:block">
							<p>Cool. Crisp. Classic.</p>
							<p className="subtitle">
								Sip the Sprit <br />
								of Summer
							</p>
						</div>
						<div className="view-cocktails">
							<p className="subtitle ">
								Every cocktail on our menu is a blend of premium ingredients,
								creative flair, and timeless recipes — designed to delight your
								senses.
							</p>
							<a href="#cocktails">View Cocktails</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
