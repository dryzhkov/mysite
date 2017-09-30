import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
  render() {

    return(
      <nav className={'navbar navbar-dark navbar-fixed-top'}>
        <div id="navbar" className={'navbar-collapse collapse'}>
          <ul className={'nav navbar-nav'}>
            <li className={'active'}><a href="#">Home</a></li>
            <li><a href="#skillz">Skills</a></li>
            <li><a href="#xp">Experience</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;