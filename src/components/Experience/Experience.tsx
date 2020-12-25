import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ReactComponent as CodeIcon } from '../../graphics/code.svg';
import { ReactComponent as SupportIcon } from '../../graphics/support.svg';
import { ReactComponent as BriefcaseIcon } from '../../graphics/briefcase-line.svg';
import { ReactComponent as MicIcon } from '../../graphics/microphone-line.svg';
import localStyles from './Experience.module.scss';

const Experience: React.FC = () => {
	const { article, label, icon, wrapper } = localStyles;

	return (
		<>
			<SectionHeader
				spanText='Experience'
				headerText={'Work Experience'}
				useHeaderAnimation
			/>
			<div className={wrapper}>
				<article className={article}>
					<div className={`${icon} bg-custom-khoros`}>
						<CodeIcon />
					</div>
					<div
						className={label}
						data-aos='fade-left'
						data-aos-easing='ease-in-sine'
						data-aos-duration='300'
					>
						<h6>
							Software Engineer I at{' '}
							<a
								href='https://khoros.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								Khoros
							</a>{' '}
						</h6>
						<span>2020-present</span>
					</div>
				</article>
				<article className={article}>
					<div className={`${icon} bg-custom-brandly`}>
						<CodeIcon />
					</div>
					<div
						className={label}
						data-aos='fade-left'
						data-aos-easing='ease-in-sine'
						data-aos-duration='300'
					>
						<h6>
							Software Developer at{' '}
							<a
								href='https://www.brandly.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								Brandly
							</a>{' '}
						</h6>
						<span>2019-2020</span>
						<p>
							As a freelance developer for Brandly, I worked on new features
							like pagination on admin order histories, bug fixes, and mobile
							design.
						</p>
					</div>
				</article>
				<article className={article}>
					<div className={`${icon} bg-custom-tint`}>
						<SupportIcon />
					</div>
					<div
						className={label}
						data-aos='fade-right'
						data-aos-easing='ease-in-sine'
						data-aos-duration='300'
					>
						<h6>
							Customer Support Technical Lead at{' '}
							<a
								href='https://www.tintup.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								TINT
							</a>{' '}
						</h6>
						<span>2015-2018</span>
						<p>
							I had full autonomy over the client experience at TINT. When I
							wasn't assisting clients with web implementations of our software,
							I worked with Engineering closely, attending standups and
							meetings, reporting and tracking bugs in PivotalTracker, creating
							and running QA Tests, and creating API documentation.
						</p>
						<p>
							I managed the conversion to Zendesk and implemented live chat,
							greatly reducing our response time and contact rate during the
							process.
						</p>
					</div>
				</article>
				<article className={article}>
					<div className={`${icon} bg-custom-stitch-fix`}>
						<SupportIcon />
					</div>
					<div
						className={label}
						data-aos='fade-left'
						data-aos-easing='ease-in-sine'
						data-aos-duration='300'
					>
						<h6>
							Client Experience / Operations Associate at{' '}
							<a
								href='https://www.stitchfix.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								Stitch Fix
							</a>{' '}
						</h6>
						<span>2014-2015</span>
						<p>
							At Stitch Fix I wholly embraced a customer centric mindset, and
							made several improvements to CX processes on the operational
							level. I implemented a priority ticket structure in Zendesk, wrote
							Marketing approved copy for help desk replies, and trained new
							hires in Austin headquarters.
						</p>
						<p>
							Other operational tasks involved disputing chargebacks, processing
							truant shipments, analyzing billing discrepancies, and reconciling
							accounts.
						</p>
						<p>
							Out of a team that scaled from 20 to over 300 agents, I routinely
							led the CX team by total ticket solves, while retaining a 98%
							positive rating on tickets with client ratings.
						</p>
					</div>
				</article>
				<article className={article}>
					<div className={`${icon} bg-custom-frb`}>
						<BriefcaseIcon className='mt-n1' />
					</div>
					<div
						className={label}
						data-aos='fade-up'
						data-aos-easing='ease-in-sine'
						data-aos-duration='300'
					>
						<h6>
							Purchasing Specialist at{' '}
							<a
								href='https://www.firstrepublic.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								First Republic Bank
							</a>{' '}
						</h6>
						<span>2012-2013</span>
						<p>
							Working in First Republic's Purchasing Department, I ordered
							tangible assets for our corporate HQ and nationwide branches. I
							worked closely with our Facilities department, managing several
							vendors, and coordinating subcontractors. I also administered
							employee access for UPS CampusShip, Staples Advantage, GroupTrak
							and other online accounts.
						</p>
					</div>
				</article>
				<article className={article}>
					<div className={`${icon} bg-custom-digifx`}>
						<MicIcon />
					</div>
					<div
						className={label}
						data-aos='fade-left'
						data-aos-easing='ease-in-sine'
						data-aos-duration='300'
					>
						<h6>
							Editor / Audio Engineer at{' '}
							<a
								href='https://digifx.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								DigiFX
							</a>{' '}
						</h6>
						<span>2009-2010</span>
						<p>
							While at DigiFX I worked primarily on eLearning modules that were
							used as training materials in the nuclear industry. I proofed and
							revised scripts prior to recording sessions, recorded and edited
							audio, and performed voice overs.
						</p>
					</div>
				</article>
				<article className={article}>
					<div className={`${icon} bg-custom-soundtrack`}>
						<MicIcon />
					</div>
					<div
						className={label}
						data-aos='fade-left'
						data-aos-easing='ease-in-sine'
						data-aos-duration='300'
					>
						<h6>
							Studio Assistant at{' '}
							<a
								href='http://soundtrackgroup.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Soundtrack Boston
							</a>{' '}
						</h6>
						<span>2008-2009</span>
						<p>
							Soundtrack Boston is the premier post-production facility in New
							England. While there I worked as a studio assistant, and provided
							coverage for the duplication room, machine room, client services,
							and wherever else I was needed.
						</p>
					</div>
				</article>
				<article className='timeline-entry begin'>
					<div className={icon}></div>
				</article>
			</div>
		</>
	);
};
export default Experience;
