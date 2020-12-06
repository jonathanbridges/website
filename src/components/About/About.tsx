import React, { useContext } from 'react';
import { DarkModeContext } from '../../utilites/ThemeProvider';

interface Props {
	sectionReference: React.RefObject<HTMLDivElement>;
}

const About: React.FC<Props> = ({ sectionReference }) => {
	const theme = useContext(DarkModeContext);
	const { background, color, isDark } = theme.mode;

	return (
		<section ref={sectionReference} className={isDark ? 'bg-dark' : 'bg-light'}>
			<h1>Here's some filler text</h1>
		</section>
	);
};
export default About;
