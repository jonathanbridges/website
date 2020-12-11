import React from 'react';
import localStyles from './SectionHeader.module.scss';

interface Props {
	/**
	 * Text to render in the section span
	 */
	spanText: string;
	/**
	 * Text to render in the section h2
	 */
	headerText: string;
	/**
	 * Whether or not to animate the h2
	 */
	useHeaderAnimation?: boolean;
}

const SectionHeader: React.FC<Props> = ({
	spanText,
	headerText,
	useHeaderAnimation
}) => {
	const { span, header } = localStyles;
	return (
		<>
			<span className={span}>{spanText}</span>
			{!useHeaderAnimation && <h2 className={header}>{headerText}</h2>}
			{useHeaderAnimation && (
				<h2
					data-aos='fade-up'
					data-aos-easing='ease-in'
					data-aos-duration='250'
					className={header}
				>
					{headerText}
				</h2>
			)}
		</>
	);
};
export default SectionHeader;
