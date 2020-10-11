import React, { useState, useMemo } from "react";
import localStyles from "./Mondrian.module.scss";
import { Button, Modal } from "react-bootstrap";
import getColor from "../../helpers/colorHelper";
import { colors } from '../../helpers/definitionsHelper';

const Mondrian: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { body, shadow } = localStyles;

  /**
   * Function used to generate and style grid items.
   */
  const MemoizedGridItems: React.ReactElement[] = useMemo(() => {
    const items: React.ReactElement[] = [];
    for (let row: number = 1; row < 16; row++) {
      for (let col: number = 1; col < 22; col++) {
        const backgroundColor: string = getColor(col, row);
        items.push(
          <div
            style={{
              backgroundColor: colors[backgroundColor],
            }}
            className={backgroundColor === "transparent" ? shadow : undefined}
          />
        );
      }
    }
    return items;
  }, []);

  /**
   * Callback used to toggle modal visibility.
   */
  const toggleShowModal = (): void => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Button onClick={toggleShowModal}>Show Mondrian</Button>
      <Modal centered show={showModal} onHide={toggleShowModal}>
        <Modal.Body className={body}>{MemoizedGridItems}</Modal.Body>
      </Modal>
    </>
  );
};
export default Mondrian;
