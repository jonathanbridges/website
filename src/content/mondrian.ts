export const ranks: Record<string, number> = {
  red: 5,
  white: 4,
  yellow: 3,
  blue: 2,
  black: 1,
};

export const colMap: Record<number, string> = {
  2: "white",
  4: "blue",
  6: "red",
  8: "red",
  10: "white",
  12: "red",
  14: "white",
  16: "red",
  18: "black",
  20: "yellow",
};

export const rowMap: Record<number, string> = {
  2: "yellow",
  4: "blue",
  6: "white",
  8: "red",
  10: "yellow",
  12: "white",
  14: "black",
};

export const mondrianColors: Record<string, string> = {
  red: "rgb(236, 44, 40)",
  white: "rgb(228, 227, 225)",
  blue: "rgb(1, 112, 183)",
  yellow: "rgb(244, 205, 23)",
  darkYellow: "rgb(236, 197, 60)",
  black: "black",
  transparent: "transparent",
};

export function getMondrianColor(col: number, row: number): string {
  if (col === 14 && row === 8) return "white";
  if (col === 18 && row === 4) return "black";
  if ((col === 7 && row === 3) || (col === 9 && row === 3)) return "darkYellow";
  if ((col === 19 && row === 9) || (col === 21 && row === 9)) return "blue";

  const colColor = colMap[col];
  const rowColor = rowMap[row];

  if (colColor && rowColor) {
    return ranks[colColor] >= ranks[rowColor] ? colColor : rowColor;
  }
  return colColor ?? rowColor ?? "transparent";
}
