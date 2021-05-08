import React, { useState } from 'react';
import HeaderWithAuth from './components/Header';
import Map from './components/Map';
import ProfileWithAuth from './components/Profile';
import Home from './components/Home';
import LoginFormWithAuth from './components/LoginForm';
import RegForm from './components/RegForm';
import {withAuth} from './components/AuthContext/AuthContext';
import './App.css';

// const PAGES = {
//   // map: (props) => <Map {...props}/>,
//   // profile: (props) => <ProfileWithAuth {...props}/>,
//   // loginPage: (props) => <Home {...props}/>,
//   // regPage: (props) => <Home {...props}/>

//   map: (props) => <Map {...props}/>,
//   profile: (props) => <ProfileWithAuth {...props}/>,
//   loginPage: (props) => <Home {...props}/>,
//   regPage: (props) => <Home {...props}/>
// };

class App extends React.Component {
  state = { page: 'loginPage' };

  navigateTo = (page) => {
    this.setState({ page });
  };

  render() {
    return (
      <main data-testid="container">
        {(this.props.isLoggedIn) ? 
          (<>
            <HeaderWithAuth navigateTo={this.navigateTo}/>
            {this.state.page === 'map' && <Map navigateTo={this.navigateTo}/>}
            {this.state.page === 'profile' && <ProfileWithAuth navigateTo={this.navigateTo}/>}
          </>) : (<>
            <Home />
            {this.state.page === 'loginPage' && <LoginFormWithAuth navigateTo={this.navigateTo}/>}
            {this.state.page === 'regPage' && <RegForm navigateTo={this.navigateTo}/>}
          </>)
        }
      </main>
      // <React.Fragment>
      //   <main data-testid="container">
      //     {PAGES[this.state.page]({ navigate: this.navigateTo })}
      //     {this.state.page === 'map' ? (<Header navigateTo={this.navigateTo}/>) : null}
      //     {this.state.page === 'profile' ? (<Header navigateTo={this.navigateTo}/>) : null}
      //     {this.state.page === 'loginPage' ? (<LoginFormWithAuth navigateTo={this.navigateTo}/>) : null}
      //     {this.state.page === 'regPage' ? <RegForm navigateTo={this.navigateTo}/> : null}
      //   </main>
      // </React.Fragment>
    )
  }
}

export default withAuth(App);