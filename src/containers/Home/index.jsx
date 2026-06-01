import NavigationComp from '../../components/Navigation'
import minhaImagem from '../../assets/images/img01.png'
import { HomeStyle } from './styles'
import img01 from '../../assets/images/img01.png'

function Home() {
  return (
    <>
      <NavigationComp />

      <HomeStyle>
        <div className="home-container">
          <div className="home-left">
            <div className="home-title">
              
              <h1>Hello <br></br>I'm Mateus Ely Chies</h1>
            </div>
            <p>
              A Computer Science student and Junior Web Developer in training. I
              specialize in building interfaces with HTML, CSS, and JavaScript,
              while expanding my expertise in React.
            </p>
          </div>
          <div className="home-right">
            <div className="home__logo-container">
              <div className="home__logo-img-cont">
                <img src={img01} className="home__logo-img" />
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </HomeStyle>
    </>
  )
}

export default Home
