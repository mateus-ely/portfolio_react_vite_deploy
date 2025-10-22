import { createGlobalStyle } from 'styled-components'

const myGlobalStyles = createGlobalStyle`
    
* {
        margin: 0;
    }

    html,body{
    margin: 0px;
    padding: 0px;
}

body{
    background-color:#664C43 ;
    font-family: "Caladea";
}

.navigation{
    background-color:#CB958E;
    color:white;
    height:50px;
}

.navigation ul{
    margin-top: 0;
    list-style: none;
    padding-left: 0;
    text-align: right;
    height:50px;
    background-color: #873D48;
}

.navigation li{
    display:inline-block;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #873D48;
    line-height: 50px;

}

.navigation a{
    text-decoration: none;
    color: white;

    animation-name: navegacao; /* camada para animacao*/
    animation-duration: 1s;
}

.navigation a:hover{
    color:#CB958E;
}

.navigation li.threeline-icon{
    display: none;
}

.navigation li.threeline-icon:hover{
    color: #CB958E;
    cursor: pointer;
}

.capa{
    color:white;
}

.capa span{
    color:#B2596C;
}

.capa h1{
    font-family: "Caladea";
}

.capa div{
    display: inline-block;
    height: 650px;
}
.profile-pic{
    width: 40%;
    text-align: center;

    animation-name: profile-capa; /* camada para animacao*/
    animation-duration: 5s;
}

.profile-pic img{
    width: 350px;
    border-radius: 350px;
    margin-top: 100px;
    
}

.profile-title{
    vertical-align: top;
    width: 59%;

    animation-name: profile-capa; /* camada para animacao*/
    animation-duration: 5s;
}

.profile-title h1{
    text-transform: uppercase;
    font-size: 58px;
    margin-top: 200px;
    font-weight: 400;
}

.profile-title h2{
    font-size: 16px;
    margin-top: -40px;
    font-family: 100px;
}

.main{
    color:white;
    padding:80px 180px 80px 100px;

    animation-name: conteudo; /* camada para animacao*/
    animation-duration: 2s;
}

.cv-piv{
   float: left; 
   width: 200x;
   margin-right: 30px;
   margin-bottom: 20px;
}
.main h1{
    color: white;
    font-weight: normal;
}

.main h2{
    color: white;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: normal;
    margin-top: 40px;

}

.main h3{
    color:#B2596C;
    font-weight: 16px;
     text-transform: uppercase;
}

.main p{
    font-size: 15px;
    font-weight: 0;
    line-height: 24px;
    text-align: justify;
}

.caminho{
    list-style: none;
    padding-left: 0;
    color:grey;
}
.caminho li{
    display: inline-block;
}

.caminho a{
    color:grey;
}

.social-img{
    width: 50px;
    margin-right: 10px;
}

.miniatura{
    width: 320px;
    height: 320px;
    display:inline-block;
    margin-right: 15px;
    margin-bottom: 15px;
    background-size: contain; /* estica o imagem para caber no elemente*/
    overflow: hidden; /*esconde a sobra da area*/
}

.miniatura a{
    text-decoration: none; /* tira sublinha padrao do link*/
}

.blackbox{  /* efeito escurece a imagem */
    width: 100%;
    height: 100%;
    background-color: black;
    opacity:0;
    padding-top: 100px;
    transition: 1s; /* tempoda transicao */
}

.blackbox:hover{ /* efeito escurece a imagem */
    opacity: 0.8;
    transition: 1s;
}

.blackbox-text{
    text-align: center;
}

.blackbox-text h1{
    font-size:16px;
    color: #CB958E;
    text-transform: uppercase;
    margin-top: 0px;
}

.blackbox-text h2{
    text-transform: none;
    font-weight: 10;
    margin-top: 0;
}
.foto-trabalhos{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}

.back-link{
    color: #CB958E;
}

@keyframes profile-capa {
    0% {opacity:0}
    100% {opacity:1;}
}

@keyframes conteudo {
    0% {apacity: 0; transform: translate(-20px,-0px)}
    100% {apacity: 0; transform: translate(0px,0px)}
}

@keyframes navegacao {
    0% {opacity:0;}
    50% {opacity:0;}
    100% {opacity:1}
}

@media (max-width: 1000px){

.navigation li{
   display: none;
}

.navigation li.threeline-icon {
    display: inline-block;
}

.capa div{
    display: block;
    height: auto;
}

.profile-pic{
    width: 100%;
}

.profile-pic img{
    max-width: 75%;  /* ao chegar a 80% ela altera a escala  */
    margin-top: 0;
    max-width: 80%;
}

.profile-title{
    text-align: center;
    width: 100%;
}

.profile-title h1{
    margin-top: 30px;
    font-size: 40px;
    margin-left: 20px;
    margin-right: 20px;
}

.profile-title h2{
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
}

.main{
    color:white;
    padding:10px 5% 40px 100px 5%;
}

.main p{
    text-align: left;
    line-height: 30px;
}

.caminho li{
    font-size: 12px;
}
 
.cv-piv{
   float: none; 
   max-width: 100%;
   margin-right: 0px;
}

.miniatura{
    max-width: 100%;;
    background-size: auto 100%;
}

.blackbox{
    opacity: 0.8;
}
    
.menujs{   /* menu celular */
    height: auto;
}
.menujs ul{
    height: auto;
    text-align: center;
    padding-right: 15%;
    padding-left: 15%;
}
.menujs li{
    display: block;
    border-bottom:solid grey 1px;
}
}

`

export default myGlobalStyles
