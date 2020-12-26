import React, { useContext } from 'react';
import { Button, Carousel, Jumbotron } from 'react-bootstrap';
import localStyles from './Home.module.scss';
import { DarkModeContext } from '../../utilites/ThemeProvider';

const Home: React.FC = () => {
	const theme = useContext(DarkModeContext);
	const { background, color, isDark } = theme.mode || {};
	const { h1, carousel } = localStyles;

	return (
		<Jumbotron fluid className={background} data-testid='home'>
			<Carousel
				pause={false}
				fade
				className={isDark ? '' : `${carousel} transition`}
			>
				<Carousel.Item interval={2000}>
					<Carousel.Caption className={color}>
						<h1 className={h1}>Hi!</h1>
						<h2 className='mb-1'>I'm Jonathan</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<Carousel.Caption className={color}>
						<h2 className='mb-1'>
							Thanks for stopping by
							<span aria-label='Smiley Face' role='img' className='ml-2'>
								😃
							</span>
						</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3500}>
					<Carousel.Caption className={color}>
						<h2 className='mb-1'>
							I'm a software developer based in San Francisco
						</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3500}>
					<Carousel.Caption className={color}>
						<h2 className='mb-1'>
							Check out the rest of my site to learn more about me.
						</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={8000}>
					<Carousel.Caption className={color}>
						<h4 className='mb-3'>Oh, and here's my resume</h4>
						<Button
							variant={`outline-${isDark ? 'light' : 'dark'}`}
							href='https://docs.google.com/document/d/12wndBuWVkX4Hc6_BYDKZFoEdm8er5dSFmWjG1LzIlU0'
							target='_blank'
						>
							View CV
						</Button>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Jumbotron>
	);
};
export default Home;
