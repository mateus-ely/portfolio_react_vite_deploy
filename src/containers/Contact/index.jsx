import { ContactStyle } from './styles'
import NavigationComp from '../../components/Navigation'
import imgGithub from '../../assets/icons/github.png'
import imgLinkedin from '../../assets/icons/linkedin-img.png'
const urlGithub = 'https://github.com/mateus-ely'
const urlLinkedin = 'https://www.linkedin.com/in/mateus-ely-chies-4a69a31b2'

function Contact() {
  return (
    <>
      
      <ContactStyle>
        <div className="contact-top">
          <h1>CONTACT</h1>
          <span className="underline"></span>
          <p>
            Here you will find more information about me, what I do, and my
            current skills, mainly related to programming and technology.
          </p>
        </div>

        <div className="contact-container">
          <a href={urlGithub} target="_blank" rel="noreferrer">
            <img src={imgGithub} className="contact-right" />
          </a>

          <a href={urlLinkedin} target="_blank" rel="noreferrer">
            <img src={imgLinkedin} className="contact-left" />
          </a>
        </div>
      </ContactStyle>
    </>
  )
}

export default Contact
