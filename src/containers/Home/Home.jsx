import { Title } from './styles'
import NavigationComp from '../../components/Navigation/Navigation'
import minhaImagem from '../../assests/images/img01.png'



function Home(){

    return(
        <div>
            <NavigationComp />

            <div className="capa">

                <div className="profile-pic">
                    <img src={minhaImagem} alt="Foto de Mateus Ely Chies" />           
                </div>
                
                {/* 1. Substituí a div 'profile-title' pela tag <Title> importada.
                  2. Essa tag <Title> agora aplicará qualquer estilo que você definiu em './styles'.
                */}
                <Title className="profile-title">
                    <h1>Mateus <span>Ely Chies</span></h1>
                    <h2>Estudante de Ciência da Computação - Desenvolvedor Web Júnior em formação (HTML, CSS e JavaScript) - Entusiasta de Game Developer</h2>
                </Title>
                
            </div>

        </div>
    )
}

export default Home