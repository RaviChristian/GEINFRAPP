import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import AccordionPageRendered from './RenderedPages/AccordionPageRendered.jsx'
import HomePageRendered from './RenderedPages/HomePageRendered.jsx'
import RenderedForm from './RenderedPages/RenderedForm.jsx'
import RelatoriosAccordionPageRendered from './RenderedPages/RelatoriosAccordionPageRendered.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path : '/',
    element: <HomePageRendered/>
  },
  {
    path : 'listar',
    element: <AccordionPageRendered/>
  },

  {
    path : 'cadastrar',
    element: <RenderedForm/>
  },
  {
    path : 'listarFormularios',
    element: <RelatoriosAccordionPageRendered/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />

  </React.StrictMode>,
)
