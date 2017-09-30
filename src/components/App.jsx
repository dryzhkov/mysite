import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import SkillzPage from './SkillzPage';
import XPPage from './XPPage';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <HomePage />
        <SkillzPage />
        <XPPage />
      </div>
    );
  }
}

export default App;