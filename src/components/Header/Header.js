import React from 'react';

import Container from '@material-ui/core/container';
import Button from "@material-ui/core/Button";
import logo from '../../images/icons/logo.png';
import logoText from '../../images/icons/logo-text.png';

const Header = ({ navigateTo }) => {
  return (
    <header>
      <Container>
        <div className="header__content">
          <div className="logo header__logo">
            <img src={logo} alt="logo" className="logo-image"/>
            <img src={logoText} alt="loft taxi" className="logo-text"/>
          </div>
          <nav className="header__menu">
            <Button 
              onClick={() => navigateTo('map')}
              className='header__button'
            >
              Карта
            </Button>
            <Button
              onClick={() => navigateTo('profile')}
              className='header__button'
            >
              Профиль
            </Button>
            <Button
              onClick={() => navigateTo('loginPage')}
              className='header__button'
            >
              Выйти
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export { Header };