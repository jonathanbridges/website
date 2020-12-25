import React, { useContext } from 'react';
import localStyles from './Projects.module.scss';
import { DarkModeContext } from '../../utilites/ThemeProvider';
import { ReactComponent as EyeIcon } from '../../graphics/eye.svg';
import { ReactComponent as GithubIcon } from '../../graphics/github-original.svg';
import SectionHeader from '../SectionHeader/SectionHeader';

const Projects: React.FC = () => {
	const theme = useContext(DarkModeContext);
	const { isDark } = theme.mode;
	const { grid, project, description, button, light, dark } = localStyles;

	/**
	 * Enum used by the renderProjectButton function
	 */
	enum ProjectButtonType {
		'Live',
		'Github'
	}

	/**
	 * Functinon that renders the buttons for a project
	 *
	 * @param href The external link
	 * @param type The button type
	 */
	const renderProjectButton = (
		href: string,
		type: ProjectButtonType
	): React.ReactElement => {
		const linkClassName = isDark
			? 'btn btn-dark btn-sm'
			: 'btn btn-light btn-sm';
		return (
			<span>
				<a
					href={href}
					target='blank'
					rel='noopener noreferrer'
					className={`${linkClassName} ${button}`}
				>
					{type === ProjectButtonType.Live && (
						<>
							<EyeIcon className={!isDark ? '' : dark} /> Live
						</>
					)}
					{type === ProjectButtonType.Github && (
						<>
							<GithubIcon className={!isDark ? light : dark} /> Github
						</>
					)}
				</a>
			</span>
		);
	};

	return (
		<>
			<SectionHeader spanText='My Work' headerText='Past Projects' />
			<div className={grid}>
				<div data-aos='fade-right'>
					<div
						className={project}
						style={{ backgroundImage: 'url(images/clickcamp-preview.png)' }}
					>
						<div className={description}>
							<h3>
								<a
									href='https://click-camp.herokuapp.com'
									target='blank'
									rel='noopener noreferrer'
									className='text-white'
								>
									ClickCamp
								</a>
							</h3>
							<p>A single-page web app inspired by HipCamp</p>
							<p>
								Ruby on Rails, ReactJS, Redux, PostgreSQL, GoogleMaps API,
								Amazon S3
							</p>
							<p className='icon'>
								{renderProjectButton(
									'https://click-camp.herokuapp.com',
									ProjectButtonType.Live
								)}
								{renderProjectButton(
									'https://github.com/jonathanbridges/click-camp',
									ProjectButtonType.Github
								)}
							</p>
						</div>
					</div>
				</div>
				<div data-aos='fade-left'>
					<div
						className={project}
						style={{ backgroundImage: 'url(images/twitter-preview.png)' }}
					>
						<div className={description}>
							<h3>
								<a
									href='https://twitter-geotrends.herokuapp.com'
									target='_blank'
									rel='noopener noreferrer'
									className='text-white'
								>
									Twitter GeoTrends
								</a>
							</h3>
							<p>A data visualization of trending items on Twitter</p>
							<p>d3, ExpressJS</p>
							<p className='icon'>
								{renderProjectButton(
									'https://twitter-geotrends.herokuapp.com',
									ProjectButtonType.Live
								)}
								{renderProjectButton(
									'https://github.com/jonathanbridges/twitter-geotrends',
									ProjectButtonType.Github
								)}
							</p>
						</div>
					</div>
				</div>
				<div data-aos='fade-up'>
					<div
						className={project}
						style={{ backgroundImage: 'url(images/spacey-preview.png)' }}
					>
						<div className={description}>
							<h3>
								<a
									href='https://spacey-aa.herokuapp.com'
									target='blank'
									rel='noopener noreferrer'
									className='text-white'
								>
									Spacey
								</a>
							</h3>
							<p>
								A single-page website that aggregates space industry content
							</p>
							<p>MongoDB, ExpressJS, ReactJS, Node</p>
							<p className='icon'>
								{renderProjectButton(
									'https://spacey-aa.herokuapp.com',
									ProjectButtonType.Live
								)}
								{renderProjectButton(
									'https://github.com/jonathanbridges/spacey',
									ProjectButtonType.Github
								)}
							</p>
						</div>
					</div>
				</div>
				<div data-aos='fade-down'>
					<div
						className={project}
						style={{ backgroundImage: 'url(images/winter-preview.jpg)' }}
					>
						<div className={description}>
							<h3>
								<a
									href='https://winterdesignbuild.com'
									target='blank'
									rel='noopener noreferrer'
									className='text-white'
								>
									Winter Design Build
								</a>
							</h3>
							<p>A portfolio website built using create-react-app</p>
							<p>ReactJS, HTML, CSS</p>
							<p className='icon'>
								{renderProjectButton(
									'https://winterdesignbuild.com',
									ProjectButtonType.Live
								)}
								{renderProjectButton(
									'https://github.com/jonathanbridges/winter-design-build/',
									ProjectButtonType.Github
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Projects;
