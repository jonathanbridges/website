import React, { useState } from "react";
import localStyles from "./Mondrian.module.scss";
import { Button, Modal } from "react-bootstrap";

const Mondrian: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setShowModal(!showModal)}>Show Mondrian</Button>
      <Modal centered size="xl" show={showModal}>
        <Modal.Header>Mondorian</Modal.Header>
        <Modal.Body>
          <div id="black" className={localStyles.black}>
            <div className="grid-"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Mondrian;
