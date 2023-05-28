import './AccordionComponent.css'

import { Accordion,AccordionSummary,AccordionDetails } from '@mui/material';
import { MdOutlineExpandMore } from 'react-icons/md';


function AccordionComponent({data}) {

  console.log(data)
  return (
    <>

      <Accordion>
        <AccordionSummary expandIcon={<MdOutlineExpandMore/>}>
          <div className="title">
            <p>{data.title}</p>
          </div>
        </AccordionSummary>
  
        <AccordionDetails>
          <p>{data.text}</p>
        </AccordionDetails>
      </Accordion>

    </>
  )

}
  
export default AccordionComponent