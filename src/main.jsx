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
      element: (
        <>
          <section id="home">
            <HomeComp />
          </section>

          <section id="about">
            <AboutComp />
          </section>

          <section id="projects">
            <ProjectsComp />
          </section>

          <section id="contact">
            <ContactComp />
          </section>
        </>
      ),
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>,
)