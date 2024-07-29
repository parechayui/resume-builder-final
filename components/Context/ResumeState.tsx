import ResumeContext from './ResumeContext';
import { useState, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios'

const ResumeState = (props) => {
  const componentRef = useRef();

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {      
        const response = await axios.get('/api/resume/'); // Replace with the actual path to your db.json
        console.log(response)
        setFormData(response.data.data.resume);
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError(err);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchData();
  }, []);

  const saveResumeData = async () => {
    setFormData(formData);


    try {
      const response = await axios.patch('/api/resume', {
        resume: formData,
        keywords: {},
        userId: '12e1a4de-4598-48f1-ae83-f02b3c1a08ae'
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Data saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAboutChange = (data) => {
    let myVal = data;
    setFormData((prevData) => ({
      ...prevData,
      about: myVal,
    }));
  };

  const templates = [{ name: 'Template 1' }, { name: 'Template 2' }];

  const colours = [{ name: 'Red' }, { name: 'Blue' }];

  const handleSaveProgress = () => {
    console.log('Save progress');
  };
  const handleLoadProgress = () => {
    console.log('Load progress');
  };

  const handleDownloadPdf = () => {
    console.log('Download as PDF');
  };

  //   const [themeData, setThemeData] = useState(initialData);
  //   const [checkProj, setCheckProj] = useState(false);
  //   const [checkWork, setCheckWork] = useState(false);
  //   const [checkAward, setCheckAward] = useState(false);

  //   //Change bellow two state for create any new Theme
  //   const [showComponent, setShowComponent] = useState(false);
  //   const [currentTheme, setCurrentTheme] = useState("Theme1");
  //   const [selectBtn, setSelectBtn] = useState(true);

  return (
    <ResumeContext.Provider
      value={{
        handleInputChange,
        formData,
        handleAboutChange,
        setFormData,
        componentRef,
        saveResumeData
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;
