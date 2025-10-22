
import Navigation from '../../components/Navigation/Navigation'
import minhaImagem from '../../assests/images/img01.png'

import { Link } from "react-router-dom";

function Curriculo(){

    return(

        <div>
            <Navigation />

           <div class="main">
								
				<ul className="caminho">
				    <li>
    				<Link to="/">Home</Link>
 					 </li>
					<li> &nbsp;&gt;&nbsp; </li>
					<li> Currículo </li>
				</ul>

				<h1>Currículo</h1>

					
					<h2>Dados Pessoais</h2>
					

						<img className="cv-pic" src={minhaImagem} alt="Foto de Mateus Ely Chies"/>	

						<h3>Nome:</h3>

							<p>Mateus Ely Chies</p>

						<h3>Data de Nascimento:</h3>

							<p>02 de julho de 1998</p>

						<h3 style={{ clear: "left" }}>Residência:</h3>

							<p>Canoas, Brasil</p>

						<h3>Idiomas:</h3>

							<p>Português (Nativo)</p>
							<p>Inglês (intermediário)</p>
							
							
					
					<h2>Sobre Mim</h2>
					

							<p>Neste espaço escreva uma história sobre sua carreira. Fale sobre sua trajetória, suas conquistas e sobre o que você gosta de fazer. Pode incluir algo breve sobre o que você faz em seu tempo livre. Veja o exemplo do meu currículo em <a href="http://www.ivanlourencogomes.com" target="_blank">www.ivanlourencogomes.com</a></p>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque ipsum vitae malesuada ultrices. Proin suscipit nulla odio, sit amet cursus ipsum fringilla ac. Morbi et turpis odio. Praesent diam ex, malesuada ornare neque et, placerat tincidunt nunc. Ut sit amet ex tincidunt, viverra nisl vitae, aliquam purus. Nam purus dolor, maximus in quam sed, aliquam congue ipsum. Integer eleifend id ante sed porta.</p>

							<p>Sed posuere sit amet mi ac rhoncus. Donec ac pretium nibh. Curabitur id nisi et lorem efficitur molestie. Quisque diam nulla, pulvinar sit amet porttitor id, mollis viverra leo. Fusce in tellus porttitor, suscipit turpis et, faucibus dui. Donec sit amet magna id nunc bibendum fermentum. Praesent quam odio, venenatis non tellus eu, molestie luctus erat. Mauris eu ultricies metus.</p>

					
					<h2>Educação</h2>
					

						
						<h3>06/2019 a 06/2024</h3>

							<p>Ciência da Computação – Pucrs (Transferência)</p>

						<h3>01/2025 a 01/2027</h3>

							<p>Ciência da Computação – Universidade La Salle Canoas (Cursando)</p>


					
					<h2>Habilidades</h2>
					

						<h3>Tema 1</h3>

							<p>Habilidade 1 / Habilidade 2...</p>

						<h3>Tema 1</h3>

							<p>Habilidade 1 / Habilidade 2...</p>

						<h3>Tema 1</h3>

							<p>Habilidade 1 / Habilidade 2...</p>

						<h3>Tema 1</h3>

							<p>Habilidade 1 / Habilidade 2...</p>

					
					<h2>Experiência de Trabalho</h2>
					
						<h3>data-data</h3>

							<p>Função - empresa - local</p>

						<h3>data-data</h3>

							<p>Função - empresa - local</p>

						<h3>data-data</h3>

							<p>Função - empresa - local</p>

						


					<h2>Contato</h2>
					

							<p>mateus.elyc@gmail.com</p>
							<p>seu telefone aqui</p>

          
				<a className="back-link" href="index.html">&larr;Voltar ao início</a>


			</div>
        </div>
    )
}

export default Curriculo