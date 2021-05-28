import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/container';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import logo from '../../images/icons/logo.png';
import logoText from '../../images/icons/logo-text.png';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/auth';
import { Link } from 'react-router-dom';

const StyledButton = withStyles({
  root: {
    padding: '0px',
  },
})(Button);

export class Header extends React.Component {
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
              <ul className="menu__list">
                <li className="menu__item">
                  <Link to="/map" className='header__button'>Карта</Link>
                </li>
                <li className="menu__item">
                  <Link to="/profile" className='header__button'>Профиль</Link>
                </li>
                <li className="menu__item">
                  <StyledButton
                    onClick={this.unauthenticate}
                    className='header__button'
                  >
                    Выйти
                  </StyledButton>
                </li>
              </ul>
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