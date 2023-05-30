import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import AccordionComponent from '../Components/AccordionComponent';
import '../Components/css/AccordionPageRendered.css';
import axios from 'axios';

const apiBaseUrl = 'http://localhost:3001';

function AccordionPageRendered() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    async function getForms() {
      try {
        const response = await axios.get(`${apiBaseUrl}/api/GETformulario`);
        const formData = response.data;
        setFormData(formData);
      } catch (error) {
        console.log("Erro na response do getForms")
        console.log(error);
      }
    }

    getForms();
  }, []);

  return (
    <>
      <Navigation/>

      <div className="accordion-outter-wrapper">
        <div className="accordion-inner-wrapper">
          {formData.map(item => (
            <AccordionComponent key={item.id} data={item} />
          ))}
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default AccordionPageRendered;
