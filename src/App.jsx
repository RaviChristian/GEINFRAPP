import Navigation from './Navigation';
import Section from './section';
import Footer from './Footer';
import AccordionComponent from './AccordionComponent';


import './App.css';

const data = [{
  title : "Lorem ipsum dolor, sit amet ciendis?",
  text: "oieeeeee"
},
{
  title : "titulo?????",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur et quae at, aliquid distinctio, pariatur voluptate voluptates accusamus possimus perspiciatis eaque quia! Neque, doloribus molestias."
}
]



function App() {

  return(
    <>
      <AccordionComponent data={data[0]}/>
    </>
  );
}

export default App