import React, { RefObject } from 'react';
import { Button } from 'react-bootstrap';
import SectionHeader from '../SectionHeader/SectionHeader';

interface Props {
	/**
	 * Section titles and references
	 */
	sections: Record<string, RefObject<HTMLDivElement>>;
	/**
	 * Event handler for scrolling to sections after clicking a nav link
	 */
	handleClick: (sectionReference: React.RefObject<HTMLDivElement>) => void;
}

const About: React.FC<Props> = ({ sections, handleClick }) => (
	<>
		<SectionHeader spanText='About Me' headerText='Who Am I?' />
		<p data-testid='about'>
			<strong>I'm a software developer</strong> at{' '}
			<a
				href='https://khoros.com/'
				target='_blank'
				rel='noopener noreferrer'
				className='transition'
			>
				Khoros
			</a>{' '}
			currently working on the future end user experience for the Khoros
			community platform. I'm passionate about creating clean and engaging user
			interfaces for our customers, and I thoroughly enjoy getting to do so
			while using exciting technologies like React, Typescript, Apollo GraphQL,
			and NextJS.
		</p>
		<p>
			Other technologies I use every day include Javascript, Sass, CSS3,
			Bootstrap, Java, and MySQL. I have previous experience with Ruby, Rails,
			PostgreSQL, MongoDB, Express, and Node. You can view some of my past
			projects{' '}
			<Button
				className='p-0 align-baseline'
				variant='link'
				onClick={() => handleClick(sections['Projects'])}
			>
				below
			</Button>
			.
		</p>
		<p>
			Personally, I spend a lot of my free time cycling around the hills of San
			Francisco. I'm a bit of a sound geek, having degrees in audio technology,
			and playing several instruments. I grew up in Vermont, where I learned to
			be okay with being outdoors and not looking at screens.
		</p>
	</>
);
export default About;
