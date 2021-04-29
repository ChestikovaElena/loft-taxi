import React from 'react';

class Header extends React.Component {
  state = {
    visible: false,
  }

  render() {
    const {isLoggedIn} = this.props;
    return (
      <section className="header">
        <div className="header__wrapper">
          <div className="header__logo">
            <div className="header__logo-img"></div>
            <div className="header__logo-text"></div>
          </div>
          <nav className="header__menu">
            <button className="menu__item">Карта</button>
            <button className="menu__item">Профиль</button>
            <button
              className="menu__item">
              {isLoggedIn ? 'Выйти' : 'Войти'}
            </button>
          </nav>
        </div>
      </section>
    )
  }
}

export { Header }