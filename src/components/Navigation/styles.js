import styled from 'styled-components'

export const NavBarStyle = styled.header`
  width: 100%;
  background: #bea2a241;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 100px;

  text-transform: uppercase;
  font-size: 18px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

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

  .header__main {
    display: flex;
    margin-left: auto;
    alignItems: 'flex-end';
  }

  .header__links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .header__links li {
    width: 120px;
    text-align: center;
  }

  .header__links a {
    display: block;
    width: 100%;
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