import React, { useState, useMemo } from 'react';
import localStyles from './Mondrian.module.scss';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import getColor from '../../helpers/colorHelper';
import { colors } from '../../helpers/definitionsHelper';

/**
 * An easter egg of of Mondrian's unfinished New York City 3 using CSS grid
 *
 * @link https://www.museothyssen.org/en/collection/artists/mondrian-piet/new-york-city-3-unfinished
 */
const Mondrian: React.FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const { button, body, shadow } = localStyles;

	/**
	 * Function used to generate and style grid items.
	 */
	const MemoizedGridItems: React.ReactElement[] = useMemo(() => {
		const items: React.ReactElement[] = [];
		for (let row: number = 1; row < 16; row++) {
			for (let col: number = 1; col < 22; col++) {
				const backgroundColor: string = getColor(col, row);
				items.push(
					<div
						key={`${row}-${col}-${backgroundColor}`}
						style={{
							backgroundColor: colors[backgroundColor]
						}}
						className={backgroundColor === 'transparent' ? shadow : undefined}
					/>
				);
			}
		}
		return items;
	}, [shadow]);

	/**
	 * Callback used to toggle modal visibility.
	 */
	const toggleShowModal = (): void => {
		setShowModal(!showModal);
	};

	return (
		<>
			<Button onClick={toggleShowModal} className={button}>
				What are you looking here for anyways?
			</Button>
			<Modal centered show={showModal} onHide={toggleShowModal}>
				<OverlayTrigger
					placement='top'
					overlay={
						<Tooltip id='title'>
							A CSS grid version of Mondrian's New York City 3
						</Tooltip>
					}
				>
					<a
						href='https://www.museothyssen.org/en/collection/artists/mondrian-piet/new-york-city-3-unfinished'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Modal.Body className={body}>{MemoizedGridItems}</Modal.Body>
					</a>
				</OverlayTrigger>
			</Modal>
		</>
	);
};
export default Mondrian;
