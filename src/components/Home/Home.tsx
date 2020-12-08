import React from 'react';
import { Carousel, Jumbotron } from 'react-bootstrap';
import localStyles from './Home.module.scss';

const Home: React.FC = () => {
	return (
		<Jumbotron fluid className='bg-light'>
			<Carousel pause={false} fade interval={3500}>
				<Carousel.Item>
					<Carousel.Caption>
						<h1>Hi!</h1>
						<h2>I'm Jonathan</h2>
						<p>Thanks for stopping by 😃</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Carousel.Caption>
						<h3>Is</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Carousel.Caption>
						<h3>Here</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Jumbotron>
	);
};
export default Home;
