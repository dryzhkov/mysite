import React from 'react';

export default class XPPage extends React.Component {
  render() {
    return (
      <div id="xp" className={'container-fluid'}>
        <div className={'timeline'}>
          <div className={'record left'}>
            <div className={'content'}>
              <h2>Microsoft ~ Software Engineer</h2>
              <h3>2013 - Present</h3>
            </div>
          </div>
          <div className={'record right'}>
            <div className={'content'}>
              <h2>Incohesive Mobile ~ Cofounder / SWE</h2>
              <h3>2015 - 2017</h3>
            </div>
          </div>
          <div className={'record left'}>
            <div className={'content'}>
              <h2>EMC Corporation ~ Software Quality Engineer.</h2>
              <h3>2012 - 2013</h3>
            </div>
          </div>
          <div className={'record right'}>
            <div className={'content'}>
              <h2>ATGStores.com ~ Software Engineer.</h2>
              <h3>2010 - 2012</h3>
            </div>
          </div>
          <div className={'record left'}>
            <div className={'content'}>
              <h2>University of Washington ~ Computer Science (B.S.)</h2>
              <h3>2008 ~ 2011</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
