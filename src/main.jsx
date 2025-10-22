import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MyGlobalStyles from './styles/globalStyles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomeComp from './containers/Home/Home'
import CurriculoComp from './containers/Curriculo/Curriculo'
import PortifolioComp from './containers/Portfoleo/PortfolioPage'
import ContactPageComp from './containers/Contato/ContactPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComp />,
  },
  {
    path: "Curriculo",
    element: <CurriculoComp />,
  },
  {
    path: "PortifolioPage",
    element: <PortifolioComp />,
  },
  {
    path: "ContactPage",
    element: <ContactPageComp />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles /> 
    <RouterProvider router={router} />
  </StrictMode>
);
