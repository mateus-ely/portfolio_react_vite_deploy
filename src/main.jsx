import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MyGlobalStyles from './globalStyles'

import HomeComp from './containers/Home/index'
import AboutComp from './containers/About/index'
import ProjectsComp from './containers/Projects/index'
import ContactComp from './containers/Contact/index'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeComp />,
    },
    {
      path: 'About',
      element: <AboutComp />,
    },
    {
      path: 'Projects',
      element: <ProjectsComp />,
    },
    {
      path: 'Contact',
      element: <ContactComp />,
    },
  ],
  {
    // O nome do seu repositório é o prefixo da URL no GitHub Pages
    basename: import.meta.env.BASE_URL,
  },
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles />
        <RouterProvider router={router} /> {' '}
  </StrictMode>,
)
