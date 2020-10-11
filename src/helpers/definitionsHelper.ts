export interface Indexable {
  [key: string]: any;
}

export const ranks: Indexable = {
  red: 5,
  white: 4,
  yellow: 3,
  blue: 2,
  black: 1,
};

export const colMap: Indexable = {
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

export const rowMap: Indexable = {
  2: "yellow",
  4: "blue",
  6: "white",
  8: "red",
  10: "yellow",
  12: "white",
  14: "black",
};

export const colors: Indexable = {
  red: "rgb(236, 44, 40)",
  white: "rgb(228, 227, 225)",
  blue: "rgb(1, 112, 183)",
  yellow: "rgb(244, 205, 23)",
  darkYellow: "rgb(236, 197, 60)",
  black: "black",
};
