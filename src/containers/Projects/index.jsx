import NavigationComp from '../../components/Navigation'
import { ProjectsStyle } from './styles'
import PortfolioItem from './PortfolioItem'

const portfolioData = [
  {
    id: 1,
    img: 'img/ccb.jpg',
    link: 'webdesign-ccb.html',
    title: 'titulo trabalho 1',
    realization: 'realizacao 1',
  },
  {
    id: 2,
    img: 'img/ccb.jpg',
    link: 'webdesign-ccb.html',
    title: 'titulo trabalho 2',
    realization: 'realizacao 2',
  },
  {
    id: 3,
    img: 'img/ccb.jpg',
    link: 'webdesign-ccb.html',
    title: 'titulo trabalho 3',
    realization: 'realizacao 3',
  },
]

function Projects() {
  return (
    <>
      <NavigationComp />

      <ProjectsStyle>
        {/* ===== PARTE SUPERIOR ===== */}
        <div className="projects-top">
          <h1>PROJECTS</h1>
          <span className="underline"></span>
        </div>
        <div class="main">
          {/* Renderização da Lista de Itens */}
          {portfolioData.map((item) => (
            <PortfolioItem
              key={item.id} // Chave única é OBRIGATÓRIA ao mapear listas
              imgUrl={item.img}
              link={item.link}
              titulo={item.title}
              realizacao={item.realization}
            />
          ))}
        </div>
      </ProjectsStyle>
    </>
  )
}

export default Projects
