import React from 'react';
import logo from '../../images/icons/logo.png';
import logoText from '../../images/icons/logo-text.png';
import LoginFormWithConnect from '../../components/LoginForm';
import RegForm from '../../components/RegForm';

class Home extends React.Component {
  state = {
    mode: 'login'
  };

  handleModeChange = () => {
    const mode = this.state.mode === 'login' ? 'registration' : 'login';
    this.setState({ mode });
  }

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
          {this.state.mode === 'login' ?
            <LoginFormWithConnect changeAuthMode={this.handleModeChange}/> :
            <RegForm changeAuthMode={this.handleModeChange}/>}
        </div>
      </div>
    );
  };
}

export { Home };