import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import AccordionComponent from '../Components/AccordionComponent';

import '../Components/css/AccordionPageRendered.css';
import axios from 'axios';
const apiBaseUrl = 'http://localhost:3001';




async function getForms() {
  axios.post(`${apiBaseUrl}/api/GETformularios`)
    .then(response => {
        const formData = response
        return formData
    })
    .catch(error => {
        console.log(error)
        return error
    })
}

const data = await getForms()

console.log("AAAAAAAAAAAAAAAAAAAAAA")
console.log(data)



function AccordionPageRendered() {
  
  return(
    <>
        <Navigation/>

        <div className="accordion-outter-wrapper">
            <div className="accordion-inner-wrapper">
                {data.map(item => (
                    <AccordionComponent data={item}/>
                ))}

            </div>
        </div>

        <Footer/>
    </>
  );
}

export default AccordionPageRendered