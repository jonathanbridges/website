import React, { Context, createContext, useReducer, useEffect } from 'react';

/**
 * Class name(s) applied to the background and foreground elements
 */
export type BackgroundClassNames = 'bg-dark transition' | 'bg-light transition';
export type ForegroundClassnames = 'text-dark' | 'text-light';

/**
 * API for using the theme variables with the useContext hook
 */
export interface Theme {
	background: BackgroundClassNames;
	color: ForegroundClassnames;
	isDark: boolean;
}

export const LIGHT_THEME: Theme = {
	background: 'bg-light transition' as BackgroundClassNames,
	color: 'text-dark' as ForegroundClassnames,
	isDark: false
};

export const DARK_THEME: Theme = {
	background: 'bg-dark transition' as BackgroundClassNames,
	color: 'text-light' as ForegroundClassnames,
	isDark: true
};

interface DarkModeContext {
	mode: Theme;
	dispatch: React.Dispatch<any>;
}

const darkModeReducer = (_reducer: any, isDark: boolean) =>
	isDark ? DARK_THEME : LIGHT_THEME;

const DarkModeContext: Context<DarkModeContext> = createContext(
	{} as DarkModeContext
);

const initialState =
	JSON.parse(localStorage.getItem('DarkMode') as string) || LIGHT_THEME;

const DarkModeProvider: React.FC = ({ children }) => {
	const [mode, dispatch] = useReducer(darkModeReducer, initialState);

	useEffect(() => {
		localStorage.setItem('DarkMode', JSON.stringify(mode));
	}, [mode]);

	return (
		<DarkModeContext.Provider
			value={{
				mode,
				dispatch
			}}
		>
			{children}
		</DarkModeContext.Provider>
	);
};

export { DarkModeProvider, DarkModeContext };
