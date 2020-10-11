import React, { useState } from "react";
import localStyles from "./Mondrian.module.scss";
import { Button, Modal } from "react-bootstrap";

const getColor = (col: number, row: number) => {
  // handleExceptions
  if (col === 14 && row === 8) {
    return 'white';
  } else if (col === 18 && row === 4) {
    return 'black';
  }

  interface Indexable {
    [key: string]: any;
  }

  const ranks: Indexable = {
    red: 5,
    white: 4,
    yellow: 3,
    blue: 2,
    black: 1,
  };

  const colMap: Indexable = {
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

  const rowMap: Indexable = {
    2: "yellow",
    4: "blue",
    6: "white",
    8: "red",
    10: "yellow",
    12: "white",
    14: "black",
  };

  const colColor = colMap[col];
  const rowColor = rowMap[row];

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

const Mondrian: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { body } = localStyles;

  const items = [];
  for (let row = 1; row < 16; row++) {
    for (let col = 1; col < 22; col++) {
      items.push(
        <div
          style={{backgroundColor: getColor(col, row)}}
        />
      );
    }
  }

  
  
  return (
    <>
      <Button onClick={() => setShowModal(!showModal)}>Show Mondrian</Button>
      <Modal centered show={true}>
        <Modal.Body className={body}>
          {items}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Mondrian;
