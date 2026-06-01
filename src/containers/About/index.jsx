import { AboutStyle } from './styles'
import NavigationComp from '../../components/Navigation'

function About() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    '.NET',
    'C#',
    'Java',
    'VB.NET',
    'Git',
  ]

  return (
    <>
      <NavigationComp />

      <AboutStyle>
        {/* ===== PARTE SUPERIOR ===== */}
        <div className="about-top">
          <h1>ABOUT ME</h1>
          <span className="underline"></span>
          <p>
            Here you will find more information about me, what I do, and my
            current skills, mainly related to programming and technology.
          </p>
        </div>

        {/* ===== CONTEÚDO PRINCIPAL ===== */}
        <div className="about-container">
          {/* COLUNA ESQUERDA */}
          <div className="about-left">
            <h2>Get to know me!</h2>

            <p>
              I'm a Computer Science student and a developer in training,
              focused on Web Development and on building modern and functional
              applications.
            </p>

            <p>
              I'm currently studying Computer Science, with expected graduation
              in January 2027, and I have academic experience from both PUCRS
              and Universidade La Salle Canoas.
            </p>

            <p>
              I worked as an IT Intern at Transis Software, where I developed
              desktop applications using .NET technologies. My activities
              included creating user interfaces, assisting in application
              development, and implementing business logic using C# and frontend
              with VB.NET and C#.
            </p>

            <p>
              I’m constantly improving my skills through online courses and
              practical projects, especially in HTML, CSS, JavaScript, and
              React.
            </p>

            <p>
              I’m open to internship opportunities in IT and Web Development,
              where I can contribute, learn, and grow professionally. If you
              have an opportunity that matches my profile, feel free to contact
              me.
            </p>

            <button className="contact-btn">CONTACT</button>
          </div>

          {/* COLUNA DIREITA */}
          <div className="about-right">
            <h2>My Skills</h2>

            <div className="skills">
              {skills.map((skill) => (
                <span key={skill} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AboutStyle>
    </>
  )
}

export default About
