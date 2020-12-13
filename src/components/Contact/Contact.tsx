import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { DarkModeContext } from '../../utilites/ThemeProvider';
import SectionHeader from '../SectionHeader/SectionHeader';

/**
 * Local state shared by the handleSubmit and handleServerResponse functions
 */
type FormStatus = {
	ok: boolean;
	message: string;
};

const Contact: React.FC = () => {
	const theme = useContext(DarkModeContext);
	const { isDark } = theme.mode;

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

	return (
		<>
			<SectionHeader
				spanText='Get in Touch'
				headerText='Contact'
				useHeaderAnimation
			/>
			<Form onSubmit={handleSubmit}>
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
				<div className='d-sm-flex justify-content-between'>
					<Form.Group controlId='name' className='flex-fill mr-sm-3'>
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
				<Form.Group controlId='message'>
					<Form.Label>Message</Form.Label>
					<Form.Control
						as='textarea'
						rows={5}
						name='message'
						placeholder='Enter a message'
						required
						disabled={isSubmitting}
					/>
				</Form.Group>
				{status && (
					<p className={!status.ok ? 'text-danger' : ''}>{status.message}</p>
				)}
				<Form.Group className='d-flex align-end justify-content-center flex-fill'>
					<Button
						variant={isDark ? 'outline-light' : 'outline-dark'}
						type='submit'
						disabled={isSubmitting}
					>
						Send Message
					</Button>
				</Form.Group>
			</Form>
		</>
	);
};
export default Contact;
