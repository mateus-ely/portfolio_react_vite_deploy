import styled from 'styled-components'

export const NavBarStyle = styled.header`
  width: 100%;
  background: #bea2a241;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 100px;
  text-transform: uppercase;
  font-size: 18px;

  font-family:
    gt,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;

  .header__content {
    width: 100%;
    padding: 1rem 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
  }

  .header__logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }

  .header__logo-img-cont {
    width: 40px;
    height: 40px;
    background: #eee;
    border-radius: 50%;
    overflow: hidden;
  }

  .header__logo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header__main {
    display: flex;
    align-items: center;
  }

  .header__links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .header__links li {
    list-style: none;
  }

  .header__links a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: 0.3s;
  }

  .header__links a:hover {
    color: #7843e9;
  }

  .header__main-ham-menu-cont {
    display: none;
    font-size: 2rem;
    cursor: pointer;
  }
`
