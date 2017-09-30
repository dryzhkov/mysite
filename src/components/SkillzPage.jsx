import React from 'react';

export default class SkillzPage extends React.Component {
  render() {
    return (
      <div id="skillz" className={'container-fluid'}>
      <h1>Skills</h1>
      <div style={{ overflowX: 'auto' }}>
        <h2>Development</h2>
        <ul>
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>Angular</li>
          <li>React</li>
          <li>C#</li>
          <li>Java</li>
          <li>GoLang</li>
          <li>PHP</li>
          <li>C++</li>
        </ul>
        <h2>IDE / Tools</h2>
        <ul>
          <li>Bash</li>
          <li>VSCode</li>
          <li>Visual Studio</li>
          <li>Android Studio</li>
          <li>Git</li>
          <li>Grunt</li>
          <li>Gulp</li>
          <li>Webpack</li>
        </ul>
        <h2>Operating Systems</h2>
        <ul>
          <li>Linux</li>
          <li>MacOS</li>
          <li>Windows</li>
        </ul>
      </div>
    </div>
    );
  }
}
