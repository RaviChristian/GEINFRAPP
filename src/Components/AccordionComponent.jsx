import './css/AccordionComponent.css'
import axios from 'axios';

import { Accordion,AccordionSummary,AccordionDetails } from '@mui/material';
import { MdOutlineExpandMore } from 'react-icons/md';

const apiBaseUrl = "http://localhost:3001"


async function deleteForm(id) {
  try {
    await axios.delete(`${apiBaseUrl}/api/DELETEformulario/${id}`);
    window.location.reload()
  } catch (error) {
    console.log("Erro na resposta do deleteForm");
    console.log(error);
  }
}

async function updateStatus(formData){

  try {
    await axios.post(`${apiBaseUrl}/api/POSTrelatorioFormulario/`, formData);

    await deleteForm(formData.id)
  } catch(error) {
    console.log(error)
  }
}

function AccordionComponent({data}) {

  
  return (
    <>

      <Accordion>
        <AccordionSummary expandIcon={<MdOutlineExpandMore/>}>
          <div className="title">
            <p>{data.id}</p>
            
          </div>
        </AccordionSummary>
  
        <AccordionDetails>
            <h2 className='accordion-details-h2'>Nome Completo: </h2><p className="accordion-details-p">{data.fullName}</p>
            <h2 className='accordion-details-h2'>Email: </h2><p className="accordion-details-p">{data.email}</p>
            <h2 className='accordion-details-h2'>Siape/Matrícula: </h2><p className="accordion-details-p">{data.siape}</p>
            <h2 className='accordion-details-h2'>Unidade: </h2><p className="accordion-details-p">{data.unit}</p>
            <h2 className='accordion-details-h2'>Telefone: </h2><p className="accordion-details-p">{data.phone}</p>
            <h2 className='accordion-details-h2'>Descrição: </h2><p className="accordion-details-p">{data.description}</p>
            <h2 className='accordion-details-h2'>Criado em: </h2><p className="accordion-details-p">{data.createdAt}</p>
            <h2 className='accordion-details-h2'>Última atualização: </h2><p className="accordion-details-p">{data.updatedAt}</p>
            <p id="accordion-details-isComplete" className={`${data.isComplete ? 'completed' : 'incomplete'}`}>
            Status: {data.isComplete ? 'Finailzado' : 'Em progresso'}
</p>



            <button id="delete-button" onClick={() => deleteForm(data.id)} className='accordion-details-button'> Deletar </button>
            <button onClick={() => updateStatus({id: data.id, fullName: data.fullName, email: data.email, siape: data.siape, unit: data.unit, phone: data.phone, description: data.description, createdAt: data.createdAt, updatedAt: data.updatedAt, isComplete: true})} className='accordion-details-button'> Alterar Status </button>
        </AccordionDetails>
      </Accordion>

    </>
  )

}
  
export default AccordionComponent