import React, { useContext } from 'react';
import { Carousel, Jumbotron } from 'react-bootstrap';
import localStyles from './Home.module.scss';
import { DarkModeContext } from '../../utilites/ThemeProvider';

const Home: React.FC = () => {
	const theme = useContext(DarkModeContext);
	const { background, color, isDark } = theme.mode;
	const { h1, carousel } = localStyles;

	return (
		<Jumbotron fluid className={background}>
			<Carousel
				pause={false}
				fade
				className={isDark ? '' : `${carousel} transition`}
			>
				<Carousel.Item interval={2000}>
					<Carousel.Caption className={color}>
						<h1 className={h1}>Hi!</h1>
						<h2>I'm Jonathan</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<Carousel.Caption className={color}>
						<h2>
							Thanks for stopping by
							<span aria-label='Smiley Face' role='img' className='ml-2'>
								😃
							</span>
						</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3500}>
					<Carousel.Caption className={color}>
						<h2>I'm a software developer in San Francisco</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3500}>
					<Carousel.Caption className={color}>
						<h2>Check out the rest of my site to learn more about me.</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={8000}>
					<Carousel.Caption className={color}>
						<h4>Oh, and here's my resume</h4>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Jumbotron>
	);
};
export default Home;
