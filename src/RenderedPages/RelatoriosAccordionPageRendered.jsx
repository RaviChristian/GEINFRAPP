import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import AccordionComponent from '../Components/AccordionComponent';
import '../Components/css/AccordionPageRendered.css';
import axios from 'axios';

const apiBaseUrl = 'http://localhost:3001';

function RelatoriosAccordionPageRendered() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    async function getRelatorios() {
      try {
        console.log("[inicia] getRelatorios")
        const response = await axios.get(`${apiBaseUrl}/api/GETrelatorioFormulario`);
        const relatoriosData = response.data;
        console.log("[finaliza] getRelatorios")
        console.log(response)
        setFormData(relatoriosData);
      } catch (error) {
        console.log("Erro na response do getRelatorios ")
        console.log(error);
      }
    }

    getRelatorios();
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

export default RelatoriosAccordionPageRendered;
