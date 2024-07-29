/* eslint-disable i18next/no-literal-string */
import React, { useState, useContext } from 'react';
import BasicDetails from './BasicDetails';
import SkillComponent from './SkillComponent';
import EducationComponent from './EducationComponent';
import ExperienceComponent from './ExperienceComponent';
import Activity from './ActivityComponent';
import LanguagesComponent from './LanguagesComponent';
import { Button, ButtonGroup } from 'react-bootstrap';
import ResumeContext from '@/components/Context/ResumeContext';
import GenericModal from '../SharedComponent/GenericModal.component';
import Image from 'next/image';

const Sidebar = ({
  formData,
  setFormData,
  handleInputChange,
  handleAboutChange,
  saveResumeData
}) => {
  const [activeSection, setActiveSection] = useState(null);
  const { handlePrint } = useContext(ResumeContext);
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const onSaveProgress = () => {
    setFormData(formData);
    saveResumeData();
  };

  const onReset = () => {};

  const handleItemClick = (section) => {
    setActiveSection(section);
  };

  const renderDetails = () => {
    switch (activeSection) {
      case 'basicDetails':
        return (
          <BasicDetails
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            handleAboutChange={handleAboutChange}
            onBack={() => setActiveSection(null)}
          />
        );
      case 'skillSet':
        return (
          <LanguagesComponent
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            onBack={() => setActiveSection(null)}
          />
        );
      case 'education':
        return (
          <EducationComponent
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            onBack={() => setActiveSection(null)}
          />
        );
      case 'experience':
        return (
          <ExperienceComponent
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            onBack={() => setActiveSection(null)}
          />
        );
      case 'activities':
        return (
          <Activity
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            onBack={() => setActiveSection(null)}
          />
        );
      default:
        return renderSidebarItems();
    }
  };

  const renderSidebarItems = () => (
    <div className="sidebar-items">
      <div
        className="sidebar-item"
        onClick={() => handleItemClick('basicDetails')}
      >
        Basic details <span className="arrow">›</span>
      </div>
      <div className="sidebar-item" onClick={() => handleItemClick('skillSet')}>
        Skills and expertise <span className="arrow">›</span>
      </div>
      <div
        className="sidebar-item"
        onClick={() => handleItemClick('education')}
      >
        Education <span className="arrow">›</span>
      </div>
      <div
        className="sidebar-item"
        onClick={() => handleItemClick('experience')}
      >
        Experience <span className="arrow">›</span>
      </div>

      <div
        className="sidebar-item"
        onClick={() => handleItemClick('activities')}
      >
        Activities <span className="arrow">›</span>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <ButtonGroup className="w-100">
          <Button
            variant="outline-success"
            className="mx-2 w-100"
            onClick={handlePrint}
          >
            DOWNLOAD PDF
          </Button>
          <Button
            variant="outline-success"
            className="mx-2 w-100"
            onClick={handleOpen}
          >
            CUSTOMIZE RESUME
          </Button>
          <GenericModal show={showModal} handleClose={handleClose} />
          <Button
          variant="outline-danger"
          className="mx-2 w-100"
          onClick={onReset}
        >
          RESET
        </Button>
        </ButtonGroup>
      
       
      </div>
      <Button
        variant="outline-success"
        className="reset-button"
        onClick={onSaveProgress}
      >
        SAVE RESUME
      </Button>
    </div>
  );

  return <div className="col-md-6 sidebar">{renderDetails()}</div>;
};

export default Sidebar;
