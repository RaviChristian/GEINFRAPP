import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import AccordionComponent from '../Components/AccordionComponent';


import '../Components/css/AccordionPageRendered.css';

const data = [{
  title : "Lorem ipsum dolor, sit amet ciendis?",
  text: "oieeeeee"
},
{
  title : "titulo?????",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur et quae at, aliquid distinctio, pariatur voluptate voluptates accusamus possimus perspiciatis eaque quia! Neque, doloribus molestias."
},
{
    title : "Lorem ipsum dolor, sit amet ciendis?",
    text: "oieeeeee"
}
]



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