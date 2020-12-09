import React, { useContext } from 'react';
import { Carousel, Jumbotron } from 'react-bootstrap';
import localStyles from './Home.module.scss';
import { DarkModeContext } from '../../utilites/ThemeProvider';

const Home: React.FC = () => {
	const theme = useContext(DarkModeContext);
	const { background, color, isDark } = theme.mode;
	const bgClassName = isDark ? 'bg-dark transition' : 'bg-light transition';
	const textClassName = isDark
		? 'text-light transition'
		: 'text-dark transition';
	const { h1, light } = localStyles;

	return (
		<Jumbotron fluid className={bgClassName}>
			<Carousel fade className={isDark ? '' : `${light} transition`}>
				<Carousel.Item interval={2000}>
					<Carousel.Caption>
						<h1 className={`${textClassName} ${h1}`}>Hi!</h1>
						<h2 className={textClassName}>I'm Jonathan</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<Carousel.Caption>
						<h2 className={textClassName}>Thanks for stopping by 😃</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3500}>
					<Carousel.Caption>
						<h2 className={textClassName}>
							I'm a software developer in San Francisco
						</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3500}>
					<Carousel.Caption>
						<h2 className={textClassName}>
							Check out the rest of my site to learn more about me.
						</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={8000}>
					<Carousel.Caption>
						<h3 className={textClassName}>Oh, and here's my résumé</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Jumbotron>
	);
};
export default Home;
