import React from 'react';

import Container from '@material-ui/core/container';
import Button from "@material-ui/core/Button";
import logo from '../images/icons/logo.png';
import logoText from '../images/icons/logo-text.png';

// import { withStyles } from "@material-ui/core";

// const styles = theme => ({
//   appBar: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     minHeight: "60px",
//     backgroundColor: "#1C1A19",
//     paddingLeft: "25px",
//     paddingRight: "50px"
//   },
//   noDecor: {
//     textDecoration: "none"
//   }
// });

const Header = ({ navigateTo }) => {
  const handlePage = (page) => {
    navigateTo(page);
  }
  return (
    <header>
      <Container>
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="logo" className="logo-image"/>
            <img src={logoText} alt="loft taxi" className="logo-text"/>
          </div>
          <div className="header-menu">
            <Button onClick={() => handlePage('map')} className='header__button'>Карта</Button>
            <Button onClick={() => handlePage('profile')} className='header__button'>Профиль</Button>
            <Button onClick={() => handlePage('loginForm')} className='header__button'>Выйти</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export { Header }