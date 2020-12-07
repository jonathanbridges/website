import React from 'react';
import { Form } from 'react-bootstrap';
import { ReactComponent as SunIcon } from '../../graphics/sun.svg';
import { ReactComponent as MoonIcon } from '../../graphics/moon.svg';
import localStyles from './DarkModeToggle.module.scss';

interface Props {
	/*
	 * Whether or not dark node is currently enabled.
	 */
	isDark: boolean;
	/*
	 * @callback function.
	 */
	onClick: () => void;
}

const DarkModeToggle: React.FC<Props> = ({ isDark, onClick }) => {
	return (
		<Form className={`${localStyles.form} px-2`}>
			<Form.Check
				custom
				type='switch'
				checked={isDark}
				id='custom-switch'
				label={
					isDark ? (
						<MoonIcon className={localStyles.moon} />
					) : (
						<SunIcon className={localStyles.sun} />
					)
				}
				onChange={onClick}
			/>
		</Form>
	);
};

export default DarkModeToggle;
