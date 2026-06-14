/** Fixed header height in px — keep in sync with `h-16` on Header */
export const HEADER_HEIGHT_PX = 64;

/** Shared inset for fixed bottom chrome (clock, copyright, geocities nav) */
export const FOOTER_INSET_X = "px-6 md:px-12";
export const FOOTER_INSET_Y = "py-4 md:py-5";
export const FOOTER_INSET = `${FOOTER_INSET_X} ${FOOTER_INSET_Y}`;

/** Light/dark themes hide copyright + clock on these sections */
export const FOOTER_META_HIDDEN_SECTIONS = new Set(["experience", "contact"]);
