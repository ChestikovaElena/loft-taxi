import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/container';
import Button from "@material-ui/core/Button";
import logo from '../../images/icons/logo.png';
import logoText from '../../images/icons/logo-text.png';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/actions';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  static propTypes = {
  logOut: PropTypes.func
}

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <header data-testid="header">
        <Container>
          <div className="header__content">
            <div className="logo header__logo">
              <img src={logo} alt="logo" className="logo-image"/>
              <img src={logoText} alt="loft taxi" className="logo-text"/>
            </div>
            <nav className="header__menu" data-testid="menu">
              <Link to="/map" className='header__button'>Карта</Link>
              <Link to="/profile" className='header__button'>Профиль</Link>
              <Button
                onClick={this.unauthenticate}
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
};

const HeaderWithConnect = connect(
  null,
  { logOut }
)(Header);
export { HeaderWithConnect };