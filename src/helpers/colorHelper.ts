import { colMap, rowMap, ranks } from './definitionsHelper';

/**
 * Helper function that retrieves the background color for an item in the Mondrian easter egg.
 *
 * @param col the column the item is in.
 * @param row the row the item is in.
 */
export default function getColor(col: number, row: number): string {
	// handle exceptions
	if (col === 14 && row === 8) {
		return 'white';
	} else if (col === 18 && row === 4) {
		return 'black';
	} else if ((col === 7 && row === 3) || (col === 9 && row === 3)) {
		return 'darkYellow';
	} else if ((col === 19 && row === 9) || (col === 21 && row === 9)) {
		return 'blue';
	}

	const colColor: string = colMap[col];
	const rowColor: string = rowMap[row];

	// if colors are provided for both a col and a row, return the highest ranked color
	if (colColor && rowColor) {
		return ranks[colColor] >= ranks[rowColor] ? colColor : rowColor;
	} else {
		return colColor && !rowColor
			? colColor
			: rowColor
			? rowColor
			: 'transparent';
	}
}
