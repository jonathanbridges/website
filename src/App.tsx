import React, { createRef } from 'react';
import { Container } from 'react-bootstrap';
import './styles/App.scss';
import NavbarExtended from './components/Navbar/Navbar';
import { DarkModeProvider } from './utilites/ThemeProvider';
import About from './components/About/About';
import Mondrian from './components/Mondrian/Mondrian';
import Home from './components/Home/Home';

const App: React.FC = () => {
	/**
	 * Section titles and refs used to render links and scroll to sections in the navbar.
	 */
	const sections: Record<string, React.RefObject<HTMLDivElement>> = {
		Home: createRef<HTMLDivElement>(),
		About: createRef<HTMLDivElement>(),
		Skills: createRef<HTMLDivElement>(),
		Projects: createRef<HTMLDivElement>(),
		Experience: createRef<HTMLDivElement>(),
		Contact: createRef<HTMLDivElement>()
	};

	/**
	 * Event handler for scrolling to sections
	 */
	const handleScroll = (sectionReference: React.RefObject<HTMLDivElement>) => {
		if (sectionReference && sectionReference.current) {
			sectionReference.current.scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
		}
	};

	return (
		<DarkModeProvider>
			<header className={'sticky-top'}>
				<NavbarExtended sections={sections} handleScroll={handleScroll} />
			</header>
			<main ref={sections['Home']}>
				<Home />
				<Container>
					<Mondrian />
					<section>
						<h2>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</h2>
					</section>
					<section>
						<h2>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</h2>
					</section>
					<section>
						<h2>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</h2>
					</section>
					<section>
						<h2>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</h2>
					</section>
					<About sectionReference={sections['About']} />
					<section>
						<h2>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</h2>
					</section>{' '}
					<section>
						<h2>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</h2>
					</section>{' '}
					<section>
						<h2>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</h2>
					</section>{' '}
					<section>
						<h2>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</h2>
					</section>
				</Container>
			</main>
		</DarkModeProvider>
	);
};

export default App;
