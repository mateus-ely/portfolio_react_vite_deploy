import styled from 'styled-components'

export const NavBarStyle = styled.h1`
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
`
