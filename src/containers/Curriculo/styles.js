import styled from "styled-components";

export const Title = styled.div`
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
`;
