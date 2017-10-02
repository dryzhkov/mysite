import React from 'react';
import Paper from 'material-ui/Paper';

export default class SkillzPage extends React.Component {
  render() {
    const style = {
      height: 100,
      width: 100,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: '#fffeee',
    };

    const programming = {
      title: 'Development',
      items: ['JavaScript', 'NodeJS', 'Angular', 'React', 'C#', 'Java', 'GoLang', 'PHP', 'C++']
    };

    const tools = {
      title: 'IDEs / Tools',
      items: ['Bash', 'VSCode', 'Visual Studio', 'Android Studio', 'Git', 'Grunt', 'Gulp', 'Webpack']
    };

    const systems = {
      title: 'Operating Systems',
      items: ['Linux', 'MacOS', 'Windows']
    };

    const skillz = [programming, tools, systems];

    return (
      <div id="skillz" className={'container-fluid'}>
        <h1>Skills</h1>
        <div style={{ overflowX: 'auto' }}>
          {
            skillz.map(skill =>
              <div>
                <h2 style={{marginTop: '2em'}}>{skill.title}</h2>
                <ul>
                  {
                    skill.items.map(item =>
                      <li>
                        <Paper style={style} zDepth={3} circle={true} >{item}</Paper>
                      </li>
                    )
                  }
                </ul>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
