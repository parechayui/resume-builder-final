import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import SuggestedPhrasesModal from "./SuggestedPhrasesModal.component";


const SuggestedPhrasesButton = ({ editorState, onChange }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <Button variant="primary" className="btn-primary" onClick={handleOpen}>
        Suggested Phrases
      </Button>
      <SuggestedPhrasesModal
        show={showModal}
        handleClose={handleClose}
        onChange={onChange}
      />
    </>
  );
};

export default SuggestedPhrasesButton;
