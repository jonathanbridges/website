import React from 'react';
import {
	fireEvent,
	render,
	screen,
	waitForElementToBeRemoved,
	waitForElement
} from '@testing-library/react';

import App from './App';

describe('portfolio app', (): void => {
	it('renders the navbar', (): void => {
		const { getByTestId } = render(<App />);

		const navbarBrand: HTMLElement = getByTestId('navbar');
		expect(navbarBrand).toBeInTheDocument();
	});
	it('renders the jumbotron', (): void => {
		const { getByTestId } = render(<App />);

		const jumbotron: HTMLElement = getByTestId('home');
		expect(jumbotron).toBeInTheDocument();
	});
	it('renders the about section', (): void => {
		const { getByTestId } = render(<App />);

		const about: HTMLElement = getByTestId('about');
		expect(about).toBeInTheDocument();
	});
	it('renders the skills section', (): void => {
		const { getByTestId } = render(<App />);

		const skills: HTMLElement = getByTestId('skills');
		expect(skills).toBeInTheDocument();
	});
	it('renders the experience section', (): void => {
		const { getByTestId } = render(<App />);

		const experience: HTMLElement = getByTestId('experience');
		expect(experience).toBeInTheDocument();
	});
	it('renders the projects section', (): void => {
		const { getByTestId } = render(<App />);

		const projects: HTMLElement = getByTestId('projects');
		expect(projects).toBeInTheDocument();
	});
	it('renders the contact section', (): void => {
		const { getByTestId } = render(<App />);

		const contact: HTMLElement = getByTestId('contact');
		expect(contact).toBeInTheDocument();
	});
	it('launches the modal', (): void => {
		const { getByTestId } = render(<App />);

		const btn: HTMLElement = getByTestId('mondrian-btn');
		fireEvent.click(btn);
		const modal: HTMLElement = getByTestId('mondrian');
		expect(modal).toBeInTheDocument();
	});
	it('hides the modal', async (): Promise<void> => {
		const { getByTestId } = render(<App />);
		const btn: HTMLElement = getByTestId('mondrian-btn');
		fireEvent.click(btn);
		const modal: HTMLElement = getByTestId('mondrian');
		await waitForElement(() => screen.getByTestId('mondrian'));
		expect(modal).toBeInTheDocument();
		fireEvent.keyDown(modal, {
			key: 'Escape',
			code: 'Escape',
			keyCode: 27,
			charCode: 27
		});
		await waitForElementToBeRemoved(() => screen.getByTestId('mondrian'));
		expect(modal).not.toBeInTheDocument();
	});
});
