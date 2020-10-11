import React, { useState } from "react";
import localStyles from "./Mondrian.module.scss";
import { Button, Modal } from "react-bootstrap";
import getColor from "../../helpers/colorHelper";
import { colors } from "../../helpers/definitionsHelper";

const Mondrian: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { body, shadow } = localStyles;

  const yellowSquareCoords: Array<number[]> = [
    [7, 3],
    [9, 3],
  ];
  const blueSquareCoords: Array<number[]> = [
    [19, 9],
    [21, 9],
  ];

  const items: Array<React.ReactElement> = [];
  for (let row = 1; row < 16; row++) {
    for (let col = 1; col < 22; col++) {
      const isYellow: boolean = yellowSquareCoords.some(
        (subArr: number[]) => subArr[0] === col && subArr[1] === row
      );
      const isBlue: boolean = blueSquareCoords.some(
        (subArr: number[]) => subArr[0] === col && subArr[1] === row
      );

      const backgroundColor: string = getColor(col, row);

      items.push(
        <div
          style={{
            backgroundColor: isYellow
              ? colors["darkYellow"]
              : isBlue
              ? colors["blue"]
              : backgroundColor,
          }}
          className={backgroundColor === "transparent" ? shadow : undefined}
        />
      );
    }
  }

  return (
    <>
      <Button onClick={(): void => setShowModal(!showModal)}>
        Show Mondrian
      </Button>
      <Modal centered show={showModal} onHide={(): void => setShowModal(false)}>
        <Modal.Body className={body}>{items}</Modal.Body>
      </Modal>
    </>
  );
};
export default React.memo(Mondrian);
