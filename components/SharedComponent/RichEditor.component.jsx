/* eslint-disable react/jsx-key */
/* eslint-disable i18next/no-literal-string */
import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { convertToHTML, convertFromHTML } from 'draft-convert';
import dynamic from 'next/dynamic';
import SuggestedPhrasesModal from './SuggestedPhrasesModal.component';
import { Button } from 'react-bootstrap';

// Dynamically import the Editor component with SSR disabled
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const RichEditor = ({ initialData, handleDataChange, showCustomButtons }) => {
  const [editorState, setEditorState] = useState(() => {
    if (initialData) {
      const contentState = convertFromHTML(initialData);
      if (contentState) {
        return EditorState.createWithContent(contentState);
      }
    }
    return EditorState.createEmpty();
  });

  useEffect(() => {
    if (initialData) {
      const contentState = convertFromHTML(initialData);
      if (contentState) {
        setEditorState(EditorState.createWithContent(contentState));
      }
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [initialData]);

  const handleChange = (newEditorState) => {
    const html = convertToHTML(newEditorState.getCurrentContent());
    handleDataChange(html);
    setEditorState(newEditorState);
  };

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAcceptChanges = (newData) => {
    const contentState = convertFromHTML(newData);
    if (contentState) {
      const newEditorState = EditorState.createWithContent(contentState);
      handleChange(newEditorState);
    }
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbarCustomButtons={
          showCustomButtons
            ? [<Button onClick={handleOpenModal}>Suggested Phrases</Button>]
            : []
        }
        toolbar={{
          options: ['inline', 'list', 'link', 'history'],
          inline: {
            options: ['bold', 'italic', 'underline'],
          },
        }}
      />
      <SuggestedPhrasesModal
        initialData={convertToHTML(editorState.getCurrentContent())}
        handleClose={handleCloseModal}
        show={showModal}
        handleAccept={handleAcceptChanges}
      />
    </div>
  );
};

export default RichEditor;
