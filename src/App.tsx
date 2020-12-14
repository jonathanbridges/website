import React, { createRef, useContext, useEffect } from 'react';
import AOS from 'aos';
import './styles/App.scss';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';
import { DarkModeContext } from './utilites/ThemeProvider';
import NavbarExtended from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Mondrian from './components/Mondrian/Mondrian';

const App: React.FC = () => {
	const theme = useContext(DarkModeContext);
	const { color, background } = theme.mode;

	/**
	 * Initialize the AOS library @link http://michalsnik.github.io/aos/
	 */
	useEffect(() => {
		AOS.init({
			delay: 25,
			duration: 500,
			easing: 'ease-in-sine'
		});
	}, []);

	/**
	 * Section titles and refs used to render links and scroll to sections in the navbar.
	 */
	const sections: Record<string, React.RefObject<HTMLDivElement>> = {
		Home: createRef<HTMLDivElement>(),
		About: createRef<HTMLDivElement>(),
		Skills: createRef<HTMLDivElement>(),
		Experience: createRef<HTMLDivElement>(),
		Projects: createRef<HTMLDivElement>(),
		Contact: createRef<HTMLDivElement>()
	};

	/**
	 * Event handler for scrolling to sections after clicking a nav link
	 */
	const handleClick = (sectionReference: React.RefObject<HTMLDivElement>) => {
		if (sectionReference && sectionReference.current) {
			sectionReference.current.scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
		}
	};

	return (
		<>
			<header>
				<NavbarExtended sections={sections} handleClick={handleClick} />
			</header>
			<main className={`${background} ${color}`} ref={sections['Home']}>
				<Home />
				<Container>
					<section ref={sections['About']} data-aos='fade-left'>
						<About sections={sections} handleClick={handleClick} />
					</section>
					<section ref={sections['Skills']} data-aos='fade-right'>
						<Skills />
					</section>
					<section ref={sections['Experience']}>
						<Experience />
					</section>
					<section ref={sections['Projects']}>
						<Projects />
					</section>
					<section ref={sections['Contact']}>
						<Contact />
					</section>
					<Mondrian />
				</Container>
			</main>
		</>
	);
};

export default App;
