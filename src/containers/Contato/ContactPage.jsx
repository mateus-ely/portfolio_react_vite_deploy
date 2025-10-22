
import Navigation from '../../components/Navigation/Navigation'
import { Link } from "react-router-dom";
import linkedinIcon from '../../assests/icons/iconelinkedin.png'

function ContactPage(){

    const email = "mateus.elyc@gmail.com";
    const phone = "Coloque aqui seu telefone";
    const linkedinUrl = "https://www.linkedin.com/in/mateus-ely-chies-4a69a31b2/";
   
    return (
        
        <>
        <Navigation />
         <div className="main">

            {/* Caminho de Migalhas (Breadcrumbs) */}
            <ul className="caminho">
             <li>
                <Link to="/">Home</Link>
                </li>
                <li>&nbsp; &gt; &nbsp;</li> {/* Mantido como estava, mas usando a entidade HTML > */}
                <li>Contato</li>
            </ul>

            <h1>Contato</h1>
            
            {/* Informações de Contato */}
            
            <h3>E-mail:</h3>
            {/* Opcional: Usar 'mailto' para criar um link clicável de email */}
            <p><a href={`mailto:${email}`}>{email}</a></p>

            <h3>Telefone:</h3>
            <p>{phone}</p>

            <h3>Redes Sociais:</h3>

            {/* Link do Linkedin */}
            <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" // Recomendado para links com target="_blank"
            >
                {/* No React, as tags <img> devem ser fechadas com barra (/>).
                  Estou usando a variável 'linkedinIcon' importada, assumindo 
                  que a imagem está no seu código fonte. Se a imagem estiver 
                  na pasta 'public', você usaria: src="/img/iconelinkedin.png"
                */}
                <img 
                    className="social-img" 
                    src={linkedinIcon} 
                    alt="Link para o Linkedin"
                />
            </a>
            
            <p>{linkedinUrl}</p>

            <br />
            
            {/* Link para Voltar ao Início (usando Link do React Router DOM) */}
            <Link className="back-link" to="/">
                &larr; Voltar ao início
            </Link>
            
        </div>  
        </>
      
    );
}

export default ContactPage;
