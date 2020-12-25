import React, { useContext, useState } from 'react';
import { Button, Nav, Form } from 'react-bootstrap';
import axios from 'axios';
import { DarkModeContext } from '../../utilites/ThemeProvider';
import SectionHeader from '../SectionHeader/SectionHeader';
import localStyles from './Contact.module.scss';

/**
 * Local state shared by the handleSubmit and handleServerResponse functions
 */
type FormStatus = {
	ok: boolean;
	message: string;
};

const Contact: React.FC = () => {
	const theme = useContext(DarkModeContext);
	const { color, isDark } = theme.mode;
	const { image, invert } = localStyles;

	const [status, setStatus] = useState<FormStatus>({ ok: false, message: '' });
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	/**
	 * Function that submits an email via the FormSpree API
	 * @link https://github.com/formspree
	 *
	 * @param event The form submit event
	 */
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		setIsSubmitting(true);
		axios({
			method: 'POST',
			url: 'https://formspree.io/f/xwkwrwnn',
			data: new FormData(form)
		})
			.then(() => {
				handleServerResponse(true, 'Thanks for your email!', form);
			})
			.catch((result) => {
				handleServerResponse(false, result.response.data.error, form);
			});
	};

	/**
	 * Function that displays feedback to the user after a response is returned from the server
	 *
	 * @param ok The status of the response
	 * @param message The response message
	 * @param form The form data
	 */
	const handleServerResponse = (
		ok: boolean,
		message: string,
		form: HTMLFormElement
	): void => {
		setIsSubmitting(false);
		setStatus({ ok, message });
		if (ok) {
			form.reset();
		}
	};

	const btnColor = isDark ? 'outline-light' : 'outline-dark';

	return (
		<>
			<SectionHeader
				spanText='Get in Touch'
				headerText='Contact'
				useHeaderAnimation
			/>
			<div className='d-sm-flex'>
				<Form
					onSubmit={handleSubmit}
					className='flex-fill mr-sm-3'
					data-aos='flip-left'
				>
					<Form.Group controlId='subject'>
						<Form.Label>Subject</Form.Label>
						<Form.Control
							required
							type='text'
							name='subject'
							placeholder='Enter a subject'
							disabled={isSubmitting}
						/>
					</Form.Group>
					<div className='d-md-flex justify-content-between'>
						<Form.Group controlId='name' className='flex-fill mr-md-3'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								name='name'
								placeholder='Enter your name'
								required
								disabled={isSubmitting}
							/>
						</Form.Group>
						<Form.Group controlId='email' className='flex-fill'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								name='email'
								placeholder='Enter your email'
								required
								disabled={isSubmitting}
							/>
						</Form.Group>
					</div>
					<Form.Group className='d-flex flex-column' controlId='message'>
						<Form.Label>Message</Form.Label>
						<Form.Control
							as='textarea'
							rows={5}
							name='message'
							placeholder='Enter a message'
							required
							disabled={isSubmitting}
						/>
						{status.message && (
							<Form.Text
								className={
									!status.ok
										? 'align-self-center text-danger mt-3'
										: 'align-self-center mt-3'
								}
							>
								{status.message}
							</Form.Text>
						)}
					</Form.Group>
					<Form.Group
						className={`d-flex align-end justify-content-center flex-fill mb-2 ${
							!status.message ? 'mt-4' : ''
						}`}
					>
						<Button
							variant={isDark ? 'outline-light' : 'outline-dark'}
							type='submit'
							disabled={isSubmitting}
						>
							Send Message
						</Button>
					</Form.Group>
					<Form.Group className='d-flex align-items-center justify-content-center'>
						<Nav.Link
							className={`${btnColor} ${color} ${isDark ? invert : ''} px-2`}
							as='a'
							href='mailto: jbridges7@gmail.com'
						>
							jbridges7@gmail.com
						</Nav.Link>
						<Nav.Link
							className={`${btnColor} ${color} ${isDark ? invert : ''} px-2`}
							as='a'
							href='tel: 707.604.8552'
						>
							707.604.8552
						</Nav.Link>
					</Form.Group>
				</Form>
				<div
					style={{ backgroundImage: 'url(images/about.jpg)' }}
					className={image}
				/>
			</div>
		</>
	);
};
export default Contact;
