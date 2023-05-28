import './AccordionComponent.css'

import { Accordion,AccordionSummary,AccordionDetails,Typography } from '@mui/material';


function AccordionComponent({data}) {

  console.log(data)
  return (
    <>

      <Accordion>
        <AccordionSummary>
          <div className="title">
            <p>{data.title}</p>
            <p className='title'>oieee</p>
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