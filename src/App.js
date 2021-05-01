import React, { useState } from 'react';
import { Header } from './components/Header';
import {Map} from './components/Map';
import {Profile} from './components/Profile';
import { LoginForm } from './components/LoginForm';
import './App.css';

const PAGES = {
  map: <Map/>,
  profile: <Profile/>,
  loginForm: <LoginForm/>
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { page: 'loginForm' }
  }

  navigateTo = (page) => {
    this.setState({ page});
  }
  render() {
    return (
      <React.Fragment>
        <Header navigateTo={this.navigateTo}/>
        <main>
          <div>
            {PAGES[this.state.page]}
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default App;