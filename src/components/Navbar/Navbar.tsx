import React, { RefObject, useContext } from 'react';
import { Container, Nav, Navbar, NavbarProps } from 'react-bootstrap';
import { ReactComponent as GitIcon } from '../../graphics/github-original.svg';
import { ReactComponent as LinkedinIcon } from '../../graphics/linkedin.svg';
import { DarkModeContext } from '../../utilites/ThemeProvider';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import localStyles from './Navbar.module.scss';

interface Props extends NavbarProps {
	/**
	 * Section titles and references
	 */
	sections: Record<string, RefObject<HTMLDivElement>>;
	/**
	 * Function that enables scrolling to a section on nav link selection
	 */
	handleScroll: (sectionReference: React.RefObject<HTMLDivElement>) => void;
}

const NavbarExtended: React.FC<Props> = ({ sections, handleScroll }) => {
	const theme = useContext(DarkModeContext);
	const { background, color, isDark } = theme.mode;

	const setTheme = (darkMode: DarkModeContext) => {
		const isDark = darkMode.mode.isDark;
		darkMode.dispatch(!isDark);
	};

	const renderNavLinks = (): React.ReactElement[] => {
		return Object.keys(sections).map((section: string) => (
			<Nav.Link eventKey={section}>{section}</Nav.Link>
		));
	};

	return (
		<Navbar
			bg={isDark ? 'dark' : 'light'}
			className={localStyles.transition}
			expand={'lg'}
			collapseOnSelect
			variant={isDark ? 'dark' : 'light'}
		>
			<Container>
				<Navbar.Brand href='#home' className={localStyles.brand}>
					Jonathan Bridges
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					className={localStyles.toggle}
				/>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='https://github.com/jonathanbridges' target='_blank'>
							<GitIcon
								className={isDark ? localStyles.icon : localStyles.iconinverted}
							/>
						</Nav.Link>
						<Nav.Link
							href='https://www.linkedin.com/in/bridgesjonathan/'
							target='_blank'
						>
							<LinkedinIcon
								className={isDark ? localStyles.icon : localStyles.iconinverted}
							/>
						</Nav.Link>
						<Navbar.Text className={`${localStyles['darktoggle']} nav-link`}>
							Dark Mode
							<DarkModeToggle onClick={() => setTheme(theme)} isDark={isDark} />
						</Navbar.Text>
					</Nav>
					<Nav
						defaultActiveKey='Home'
						onSelect={(section: string) => handleScroll(sections[section])}
					>
						{renderNavLinks()}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default NavbarExtended;
