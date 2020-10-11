import { colMap, rowMap, ranks } from './definitionsHelper';

export default function getColor(col: number, row: number): string {
  // handleExceptions
  if (col === 14 && row === 8) {
    return "white";
  } else if (col === 18 && row === 4) {
    return "black";
  }

  const colColor: string = colMap[col];
  const rowColor: string = rowMap[row];

  if (!colColor && !rowColor) {
    return "transparent";
  } else if (colColor && !rowColor) {
    return colColor;
  } else if (rowColor && !colColor) {
    return rowColor;
  } else {
    return ranks[colColor] >= ranks[rowColor] ? colColor : rowColor;
  }
};
