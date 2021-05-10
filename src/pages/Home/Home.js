import React from 'react';
import logo from '../../images/icons/logo.png';
import logoText from '../../images/icons/logo-text.png';
import LoginFormWithAuth from '../../components/LoginForm';
import RegForm from '../../components/RegForm';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static propTypes = {
    navigateTo: PropTypes.func,
    page: PropTypes.string
  };

  renderPage(){
    switch (this.props.page) {
      case "loginPage":
        return <LoginFormWithAuth navigateTo={this.props.navigateTo}/>;
      case "regPage":
        return <RegForm navigateTo={this.props.navigateTo}/>;
      default:
        return "";
    };
  };

  render() {
    return (
      <div className='container'>
        <div className="left-column">
          <div className="logo home-page__logo">
            <img src={logo} alt="logo" className="logo-image"/>
            <img src={logoText} alt="loft taxi" className="logo-text"/>
          </div>
        </div>
        <div className="right-column">
          {this.renderPage()}
        </div>
      </div>
    );
  };
}

export { Home };