/* eslint-disable i18next/no-literal-string */
// /* eslint-disable i18next/no-literal-string */
import React, { useContext, useEffect, useState } from 'react';
import { Accordion, Button, FloatingLabel, Form } from 'react-bootstrap';
import ResumeContext from '../Context/ResumeContext';
import { FaTrash } from 'react-icons/fa';
import RichEditor from '../SharedComponent/RichEditor.component';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import { convertToHTML } from 'draft-convert';

const ExperienceComponent = ({ onBack }) => {
  const { formData, setFormData } = useContext(ResumeContext);
  const [experienceData, setExperienceData] = useState({});
  const [editorStates, setEditorStates] = useState({});

  useEffect(() => {
    if (formData.experienceData) {
      setExperienceData(formData.experienceData);

      const newEditorStates = {};
      Object.keys(formData.experienceData).forEach((key) => {
        const contentHTML =
          formData.experienceData[key]?.impact.join('<br>') || '';
        const blocksFromHTML = convertFromHTML(contentHTML);
        const contentState = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap
        );
        newEditorStates[key] = EditorState.createWithContent(contentState);
      });
      setEditorStates(newEditorStates);
    }
  }, []);

  const handleChangeExperience = (e) => {
    const { name, value, id, checked, type } = e.target;
    const experienceTitleIndex = id.replace(/\D+/g, ''); // extract the number from the id
    const experienceTitleKey = `experienceTitles${experienceTitleIndex}`;

    setExperienceData((prevExperienceData) => {
      const updatedExperienceData = {
        ...prevExperienceData,
        [experienceTitleKey]: {
          ...prevExperienceData[experienceTitleKey],
          [name]: type === 'checkbox' ? checked : value,
        },
      };

      if (name === 'currentlyWorking') {
        if (checked) {
          updatedExperienceData[experienceTitleKey].endDate = 'Present';
        } else {
          updatedExperienceData[experienceTitleKey].endDate = '';
        }
      }

      return updatedExperienceData;
    });
  };

  const handleImpactChange = (key, newEditorState) => {
    setEditorStates((prevEditorStates) => ({
      ...prevEditorStates,
      [key]: newEditorState,
    }));

    const contentHTML = convertToHTML(newEditorState.getCurrentContent());
    const newImpact = contentHTML.split('<br>').filter(Boolean); // Convert HTML to array
    setExperienceData((prevExperienceData) => ({
      ...prevExperienceData,
      [key]: {
        ...prevExperienceData[key],
        impact: newImpact,
      },
    }));
  };

  const handleDeleteExperience = (index) => {
    setExperienceData((prevExperienceData) => {
      const newExperienceData = { ...prevExperienceData };
      delete newExperienceData[`experienceTitles${index + 1}`];

      // Reindex keys after deletion
      const reorderedExperienceData = {};
      Object.keys(newExperienceData).forEach((key, i) => {
        reorderedExperienceData[`experienceTitles${i + 1}`] =
          newExperienceData[key];
      });

      return reorderedExperienceData;
    });
  };

  const handleExperienceClick = (e) => {
    e.preventDefault();
    const newCount = Object.keys(experienceData).length + 1;
    const newKey = `experienceTitles${newCount}`;
    setExperienceData((prevExperienceData) => ({
      ...prevExperienceData,
      [newKey]: {},
    }));
    setEditorStates((prevEditorStates) => ({
      ...prevEditorStates,
      [newKey]: EditorState.createEmpty(),
    }));
  };

  const formatDate = (date) => {
    if (!date || date === 'Present') return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const createExperienceTemplate = (i, experience) => {
    const key = `experienceTitles${i}`;
    return (
      <Accordion.Item key={i} eventKey={i}>
        <Accordion.Header className="d-flex justify-content-between align-items-center accordion-items">
          <span className="d-flex flex-grow-1">Experience {i}</span>
          <FaTrash
            className="delete-icon"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteExperience(i - 1);
            }}
          />
        </Accordion.Header>
        <Accordion.Body>
          <Form>
            <Form.Group>
              <FloatingLabel label="Company" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Company"
                  id={`company${i}`}
                  name="company"
                  value={experience.company || ''}
                  onChange={handleChangeExperience}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel label="Position" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter position"
                  id={`position${i}`}
                  name="position"
                  value={experience.position || ''}
                  onChange={handleChangeExperience}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel label="Start Date" className="mb-3">
                <Form.Control
                  type="date"
                  id={`startDate${i}`}
                  name="startDate"
                  value={formatDate(experience.startDate)}
                  onChange={handleChangeExperience}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel label="End Date" className="mb-3">
                <Form.Control
                  type="date"
                  id={`endDate${i}`}
                  name="endDate"
                  value={
                    experience.endDate === 'Present'
                      ? ''
                      : formatDate(experience.endDate)
                  }
                  onChange={handleChangeExperience}
                  disabled={experience.currentlyWorking}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <p>Roles & Responsibility</p>
              <RichEditor
                initialData={
                  Array.isArray(experience.impact)
                    ? experience.impact.join('<br>')
                    : ''
                }
                editorState={editorStates[key]}
                setEditorState={(newEditorState) =>
                  handleImpactChange(key, newEditorState)
                }
                handleDataChange={() => {}}
                showCustomButtons={false}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="switch"
                label="I currently work here"
                id={`currentlyWorking${i}`}
                name="currentlyWorking"
                checked={experience.currentlyWorking || false}
                onChange={handleChangeExperience}
              />
            </Form.Group>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    );
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experienceData,
    }));
  }, [experienceData, setFormData]);

  return (
    <div className="basic-details">
      <h2
        className="back-title mb-5"
        onClick={onBack}
        style={{ cursor: 'pointer' }}
      >
        &larr; Experience
      </h2>
      <div>
        <Accordion defaultActiveKey="0">
          {Object.keys(experienceData).map((key, index) =>
            createExperienceTemplate(index + 1, experienceData[key])
          )}
        </Accordion>
        <Button variant="primary" onClick={handleExperienceClick}>
          Add More Experience
        </Button>
      </div>
    </div>
  );
};

export default ExperienceComponent;
