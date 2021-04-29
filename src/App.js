import React from 'react';
import { Header } from './components/Header';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header isLoggedIn={false}/>
      </React.Fragment>
    )
  }
}

export default App;