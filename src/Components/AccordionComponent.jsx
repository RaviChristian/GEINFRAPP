import './css/AccordionComponent.css'

import { Accordion,AccordionSummary,AccordionDetails } from '@mui/material';
import { MdOutlineExpandMore } from 'react-icons/md';


function AccordionComponent({data}) {

  console.log(data)
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
            {data.isComplete ? 'Finailzado' : 'Em progresso'}
</p>



            <button className='accordion-details-button'> Editar </button>
        </AccordionDetails>
      </Accordion>

    </>
  )

}
  
export default AccordionComponent