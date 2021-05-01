import React, { useState } from 'react';
// import { Header } from './components/Header';
import {Map} from './components/Map';
import {Profile} from './components/Profile';
import { Home } from './components/Home';
import { LoginForm } from './components/LoginForm';
import './App.css';

const PAGES = {
  map: <Map/>,
  profile: <Profile/>,
  loginPage: <Home/>
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { page: 'loginPage' }
  }

  navigateTo = (page) => {
    this.setState({ page});
  }
  render() {
    return (
      // <React.Fragment>
      //   <Header navigateTo={this.navigateTo}/>
      //   <main>
      //     <div>
      //       {PAGES[this.state.page]}
      //     </div>
      //   </main>
      // </React.Fragment>

      <React.Fragment>
        <main>
          {PAGES[this.state.page]}
          {this.state.page === 'loginPage' ? <LoginForm/> : null}
        </main>
      </React.Fragment>
    )
  }
}

export default App;