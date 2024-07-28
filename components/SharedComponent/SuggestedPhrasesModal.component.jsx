/* eslint-disable i18next/no-literal-string */
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RichEditor from './RichEditor.component';
import { convertToHTML, convertFromHTML } from 'draft-convert';
import { EditorState, Modifier, ContentState } from 'draft-js';
import axios from 'axios';

const SuggestedPhrasesModal = ({
  initialData,
  handleClose,
  show,
  handleAccept,
}) => {
  const [phrases, setPhrases] = useState([]);
  const [addedPhrases, setAddedPhrases] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(null);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromHTML(initialData))
  );

  // Update form data when fetched data changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/db.json'); // Replace with the actual path to your db.json
        console.log(response.data.getAboutPhrases.phrases);
        setPhrases(response.data.getAboutPhrases.phrases);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  const handleAddPhrase = (phrase) => {
    setAddedPhrases([...addedPhrases, phrase]);
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const newContentState = Modifier.insertText(
      contentState,
      selectionState,
      phrase + '\n'
    );
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      'insert-characters'
    );
    setEditorState(newEditorState);
  };

  const handleRemovePhrase = (phrase) => {
    const newPhrases = addedPhrases.filter((p) => p !== phrase);
    setAddedPhrases(newPhrases);
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText();
    const newPlainText = plainText.replace(phrase + '\n', '');
    const newContentState = ContentState.createFromText(newPlainText);
    const newEditorState = EditorState.createWithContent(newContentState);
    setEditorState(newEditorState);
  };

  const handleAcceptChanges = () => {
    const contentState = editorState.getCurrentContent();
    const htmlContent = convertToHTML(contentState);
    handleAccept(htmlContent);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Suggested Phrases</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <ul className="content-ul">
                {phrases.map((phrase, index) => (
                  <li key={index}>
                    {addedPhrases.includes(phrase) ? (
                      <span
                        className="btn-plus"
                        onClick={() => handleRemovePhrase(phrase)}
                      >
                        -
                      </span>
                    ) : (
                      <span
                        className="btn-plus"
                        onClick={() => handleAddPhrase(phrase)}
                      >
                        +
                      </span>
                    )}
                    {phrase}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-7">
              <RichEditor
                initialData={convertToHTML(editorState.getCurrentContent())}
                editorState={editorState}
                setEditorState={setEditorState}
                handleDataChange={() => {}}
                showCustomButtons={false}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} className="btn-3">
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleAcceptChanges}
          className="btn-2"
        >
          Accept Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuggestedPhrasesModal;
