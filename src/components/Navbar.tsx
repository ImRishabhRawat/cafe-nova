import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants'
import logo from '/images/logo.png'
import gsap from 'gsap'

const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
                scrub: true,
            }
        });

        navTween.fromTo(
					"nav",
					{ backgroundColor: "transparent" },
					{
						backgroundColor: "#00000050",
						backdropFilter: "blur(10px)",
						duration: 1,
						ease: "power1.inOut",
					}
				);
    })
  return (
		<nav>
			<div>
				<a href="#home" className="flex items-center gap-2">
					<img src={logo} alt="logo" />
					<p>Cafe Nova</p>
				</a>

				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar
